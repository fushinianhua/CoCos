import {
  _decorator,
  Component,
  director,
  EventTouch,
  instantiate,
  Label,
  Node,
  Prefab,
  Size,
  tween,
  UITransform,
  Vec2,
  Vec3,
} from "cc";
import { GameManager } from "../Globla/GameManger";
import { Manager } from "./Manager";

const { ccclass, property } = _decorator;

@ccclass("Move")
export class Move extends Component {
  @property(Vec2)
  public minBoundary: Vec2 = new Vec2(0, 0);
  @property(Vec2)
  public maxBoundary: Vec2 = new Vec2(0, 0);
  @property(Prefab)
  FutureWorkLabel: Prefab = null;
  private _offset: Vec3 = new Vec3();
  private _isDragging: boolean = false;
  @property(Node)
  restratpanel: Node = null;

  onLoad() {
    // 注册触摸事件
    this.addTouch();
  }
  protected start(): void {
    console.log("开始游戏");
    this.scheduleOnce(() => {
      // 移除触摸事件
      this.removeTouch();
      // 创建标签并添加到节点上
      let FutureWorkLabel = instantiate(this.FutureWorkLabel);
      // 设置标签的位置

      FutureWorkLabel.setParent(this.node);
      // 动画效果
      let t1 = tween(FutureWorkLabel).to(
        1.5,
        { position: new Vec3(0, 95, 0) },
        { easing: "backInOut" }
      );
      // 移动节点效果
      let t2 = tween(this.node).to(2, { position: new Vec3(0, 260, 0) });
      // 动画结束后执行回调函数，然后开始移动节点的效果
      t1.call(() => {
        t2.start();
        this.scheduleOnce(() => {
          //获取玩家选择的属性标签
          let newnode = this.getPlayerSelectedProperty();
          //判断玩家是否选择了属性标签
          if (newnode) {
            //获取玩家选择的属性标签的文字内容
            GameManager.PlayProentry =
              // 把玩家选择的属性标签的文字内容赋值给 wanjiashuxing 变量
              newnode.getComponent(Label).string;
            GameManager.inst().savePlayerPropenty();
            console.log(newnode.getComponent(Label).string);
          }
          console.log("获取完成");
          this.restratpanel.active = true;
        });
      }).start();
    }, Manager.Instance.totalTime);
  }
  getPlayerSelectedProperty(): Node | null {
    let getpronode = null;
    const selfUITransform = this.node.getComponent(UITransform);
    if (!selfUITransform) {
      return getpronode;
    }
    const selfPosition = this.node.getPosition();
    const selfHalfWidth = selfUITransform.contentSize.width / 2;
    const selfHalfHeight = selfUITransform.contentSize.height / 2;
    const minX = selfPosition.x - selfHalfWidth;
    const maxX = selfPosition.x + selfHalfWidth;
    const minY = selfPosition.y - selfHalfHeight;
    const maxY = selfPosition.y + selfHalfHeight;
    let workListNode =
      this.node.scene.getChildByPath("Canvas/WorkList").children;
    workListNode.forEach((element) => {
      const elementPosition = element.getPosition();
      if (
        elementPosition.x >= minX &&
        elementPosition.x <= maxX &&
        elementPosition.y >= minY &&
        elementPosition.y <= maxY
      ) {
        getpronode = element;
      }
    });
    return getpronode;
  }

  onDestroy() {
    // 移除触摸事件
    this.removeTouch();
  }
  onTouchStart(event: EventTouch) {
    //触摸位置
    const touchLocation = event.getUILocation();
    //结点位置
    const nodeLocation = this.node.getPosition();
    //计算位置偏移量
    this._offset.set(
      touchLocation.x - nodeLocation.x,
      touchLocation.y - nodeLocation.y,
      0
    );
    this._isDragging = true;
  }

  onTouchMove(event: EventTouch) {
    if (!this._isDragging) return;
    const touchLocation = event.getUILocation();
    let newPosition = new Vec3(
      touchLocation.x - this._offset.x,
      touchLocation.y - this._offset.y,
      this.node.getPosition().z
    );
    // 限定拖动范围
    newPosition = this.clampPosition(newPosition);
    this.node.setPosition(newPosition);
  }

  onTouchEnd(event: EventTouch) {
    this._isDragging = false;
  }

  clampPosition(position: Vec3): Vec3 {
    // 将位置x限制在最小边界和最大边界之间
    const clampedX = Math.max(
      this.minBoundary.x,
      Math.min(position.x, this.maxBoundary.x)
    );
    // 将位置y限制在最小边界和最大边界之间
    const clampedY = Math.max(
      this.minBoundary.y,
      Math.min(position.y, this.maxBoundary.y)
    );
    // 返回新的Vec3对象，其中x和y被限制在边界内，z保持不变
    return new Vec3(clampedX, clampedY, position.z);
  }
  addTouch() {
    this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  removeTouch() {
    this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
}
