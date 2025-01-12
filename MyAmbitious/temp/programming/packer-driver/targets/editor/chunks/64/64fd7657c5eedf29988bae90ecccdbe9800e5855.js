System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, instantiate, Label, Prefab, v3, GameManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Createnew;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../Globla/GameManger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f39b3HbYitBUKGeW7r6Zqp5", "Createnew", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'math', 'Node', 'Prefab', 'v2', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Createnew", Createnew = (_dec = ccclass("Createnew"), _dec2 = property(Button), _dec3 = property(Prefab), _dec(_class = (_class2 = class Createnew extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "House", _descriptor2, this);

          this.Loacthousecount = 0;
          this.MaxhouseCount = 8;
          this.currentHouseCount = 0;
          this.Y = 300;
        }

        start() {
          console.log("start");
        }

        onLoad() {
          let strlabel = this.node.getChildByName("Tip").getComponent(Label);

          const str = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst()._playerName;

          strlabel.string = str + "的仓库";
          this.Loacthousecount = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst()._Store;

          let cpint2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst()._Money;

          for (let i = 1; i <= this.Loacthousecount; i++) {
            this.CreateShelf();
          }
        }

        update(deltaTime) {}
        /**
         * 创建货架
         */


        CreateShelf() {
          if (this.currentHouseCount === this.MaxhouseCount) {
            let panel = this.node.getChildByName("MessagePanel");
            panel.active = true;
            return false;
          }

          let bool = this.AddWareHouse(this.currentHouseCount + 1);
          this.currentHouseCount = bool ? this.currentHouseCount + 1 : this.currentHouseCount;
        }

        AddWareHouse(num) {
          try {
            let newx = 0;
            let newy = 0; // 计算商和余数

            let quotient = Math.floor(num / 2); // 商

            let remainder = num % 2; // 余数
            // 根据余数设置 newx

            newx = remainder === 0 ? 180 : -180; // 根据 quotient 计算 newy 的位置

            newy = this.Y - (quotient + remainder) * 200;
            const house = instantiate(this.House);
            house.setPosition(v3(newx, newy, 0)); // 设置房屋位置

            let LAB = house.getChildByName("Title").getComponent(Label);
            LAB.string = "鲜花";
            house.setParent(this.node); // 将房屋添加到当前节点

            return true;
          } catch (error) {
            return false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "House", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=64fd7657c5eedf29988bae90ecccdbe9800e5855.js.map