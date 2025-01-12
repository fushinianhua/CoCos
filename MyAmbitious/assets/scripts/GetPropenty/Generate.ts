import {
  _decorator,
  Color,
  Component,
  find,
  instantiate,
  Label,
  Node,
  Prefab,
  randomRange,
  randomRangeInt,
  Sprite,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("NewComponent")
export class NewComponent extends Component {
  @property([String])
  PropenrtyNameArray: string[] = [];
  @property(Prefab)
  propentrylabel: Prefab = null;

  public Charaters: { [Name: string]: { Size: number; Effect: string } } = {};

  private cachedRandomNum: number | null = null;
  // 用于记录累计时间
  private elapsedTime: number = 0;
  start() {
    // // 调度一个任务
    // this.schedule(function () {
    //   // 设置一个延迟，10毫秒后执行以下函数
    // }, 0.2); // 延迟0.2秒执行调度任务
    this.Charaters = {
      "+1000": { Size: 1, Effect: "加现金1000元" },
      精通服装店: { Size: 2, Effect: "服装店销量+10%" },
      "+10000元": { Size: 3, Effect: "增加" },
      精通花店: { Size: 2, Effect: "增加" },
      营销专家: { Size: 4, Effect: "所有商品销量+10%" },
    };
  }

  update(deltaTime: number) {
    this.elapsedTime += deltaTime;
    if (this.elapsedTime >= 0.2) {
      this.createAndSetupLabelNode();
      this.elapsedTime = 0;
    }
  }
  /**
   * 获取一个新的属性名
   * @returns
   */

  /**
   * 创建并设置标签节点
   */
  createAndSetupLabelNode() {
    // 创建预制体实例
    let labelNode = instantiate(this.propentrylabel);
    // 生成随机索引
    const num = randomRangeInt(0, this.PropenrtyNameArray.length);

    labelNode.getComponent(Sprite).color = this.getcolor(num);

    // 设置子节点文本属性
    labelNode.getChildByName("PropenrtyLabel").getComponent(Label).string =
      this.getname(num);
    // 设置预制体实例的父节点和位置
    labelNode.parent = find("Canvas/PropList");
    labelNode.setPosition(randomRange(-320, 320), 670);
  }
  getname(num: number): string {
    return this.PropenrtyNameArray[num];
  }
  getcolor(num: number): Color {
    let newcolor;

    // 根据传入的数字选择颜色
    switch (num + 1) {
      case 1:
        // 数字为1时，颜色为红色
        newcolor = Color.RED;
        break;
      case 2:
        // 数字为2时，颜色为绿色
        newcolor = Color.GREEN;
        break;
      case 3:
        // 数字为3时，颜色为蓝色
        newcolor = Color.BLUE;
        break;
      case 4:
        // 数字为4时，颜色为白色
        newcolor = Color.WHITE;
        break;
      case 5:
        // 数字为5时，颜色为黄色（注意：这里使用的是Color.MAGENTA，可能是个错误，因为MAGENTA通常代表品红色）
        newcolor = Color.MAGENTA;
        break;
      case 6:
        // 数字为6时，颜色为黄色
        newcolor = Color.YELLOW;
        break;
      case 7:
        // 数字为7时，颜色为黄色
        newcolor = Color.YELLOW;
        break;
      case 8:
        // 数字为8时，颜色为灰色
        newcolor = Color.GRAY;
        break;
      case 9:
        // 数字为9时，颜色为青色
        newcolor = Color.CYAN;
        break;
      default:
        // 数字为其他值时，颜色为黄色
        newcolor = Color.YELLOW;
        break;
    }

    // 返回选择的颜色
    return newcolor;
  }
}
