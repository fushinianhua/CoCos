import {
  _decorator,
  BoxCollider,
  BoxCollider2D,
  Component,
  director,
  find,
  instantiate,
  Label,
  Node,
  Prefab,
  randomRange,
  randomRangeInt,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  private static _instance: GameManager = new GameManager();

  @property([String])
  workNameArray: string[] = [];
  @property(Prefab)
  WorkLabelPrefab: Prefab;
  @property(Node)
  TimerLabel: Node;
  @property(Number)
  public totalTime: number = 0;
  private currenTime: number = this.totalTime;

  //使用过的索引
  private usedIndexes: Set<number> = new Set();
  // 获取实例
  public static get Instance(): GameManager {
    return this._instance;
  }
  protected onLoad(): void {
    //确保全局只有一个实例
    if (GameManager._instance == null) {
      GameManager._instance = new GameManager();
    } else {
      GameManager._instance = this;

      return;
    }
  }
  protected start(): void {
    this.currenTime = this.totalTime;
    this.schedule(this.replaceLabelContent, 0.5);
  }
  protected update(dt: number): void {
    if (this.currenTime > 0) {
      this.currenTime -= dt;
      this.TimerLabel.getComponent(Label).string = this.currenTime.toFixed(2);
    } else {
      this.currenTime = 0;
      this.TimerLabel.getComponent(Label).string = this.currenTime.toFixed(2);
    }
  }

  private replaceLabelContent(): void {
    // 重置已使用的索引列表，如果所有索引都被使用过一次
    // if (this.usedIndexes.size === this.workNameArray.length) {
    //     this.usedIndexes.clear();
    // }
    // 获取一个未使用的随机索引
    if (this.usedIndexes.size === this.workNameArray.length) {
      return;
    }
    let randomIndex: number;
    do {
      randomIndex = randomRangeInt(0, this.workNameArray.length);
    } while (this.usedIndexes.has(randomIndex));
    // 标记此索引为已使用
    this.usedIndexes.add(randomIndex);
    // 更新 prefabLabel 的内容
    let WorkLabelNode = instantiate(this.WorkLabelPrefab);

    WorkLabelNode.getComponent(Label).string = this.workNameArray[randomIndex];
    WorkLabelNode.parent = find("Canvas/WorkList");
    WorkLabelNode.setPosition(randomRange(-320, 320), 670);
  }
  buttonClick() {
    console.log("buttonClick");
    director.loadScene(director.getScene().name);
  }
}
