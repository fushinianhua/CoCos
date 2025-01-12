System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, find, instantiate, Label, Prefab, randomRange, randomRangeInt, Sprite, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, NewComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      randomRange = _cc.randomRange;
      randomRangeInt = _cc.randomRangeInt;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6c33uOO+ZJ7pP1DPyzJRaQ", "Generate", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'find', 'instantiate', 'Label', 'Node', 'Prefab', 'randomRange', 'randomRangeInt', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewComponent", NewComponent = (_dec = ccclass("NewComponent"), _dec2 = property([String]), _dec3 = property(Prefab), _dec(_class = (_class2 = class NewComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "PropenrtyNameArray", _descriptor, this);

          _initializerDefineProperty(this, "propentrylabel", _descriptor2, this);

          this.Charaters = {};
          this.cachedRandomNum = null;
          // 用于记录累计时间
          this.elapsedTime = 0;
        }

        start() {
          // // 调度一个任务
          // this.schedule(function () {
          //   // 设置一个延迟，10毫秒后执行以下函数
          // }, 0.2); // 延迟0.2秒执行调度任务
          this.Charaters = {
            "+1000": {
              Size: 1,
              Effect: "加现金1000元"
            },
            精通服装店: {
              Size: 2,
              Effect: "服装店销量+10%"
            },
            "+10000元": {
              Size: 3,
              Effect: "增加"
            },
            精通花店: {
              Size: 2,
              Effect: "增加"
            },
            营销专家: {
              Size: 4,
              Effect: "所有商品销量+10%"
            }
          };
        }

        update(deltaTime) {
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
          var labelNode = instantiate(this.propentrylabel); // 生成随机索引

          var num = randomRangeInt(0, this.PropenrtyNameArray.length);
          labelNode.getComponent(Sprite).color = this.getcolor(num); // 设置子节点文本属性

          labelNode.getChildByName("PropenrtyLabel").getComponent(Label).string = this.getname(num); // 设置预制体实例的父节点和位置

          labelNode.parent = find("Canvas/PropList");
          labelNode.setPosition(randomRange(-320, 320), 670);
        }

        getname(num) {
          return this.PropenrtyNameArray[num];
        }

        getcolor(num) {
          var newcolor; // 根据传入的数字选择颜色

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
          } // 返回选择的颜色


          return newcolor;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PropenrtyNameArray", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "propentrylabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0241d8b6135bbed407583626b642b57e44b458d3.js.map