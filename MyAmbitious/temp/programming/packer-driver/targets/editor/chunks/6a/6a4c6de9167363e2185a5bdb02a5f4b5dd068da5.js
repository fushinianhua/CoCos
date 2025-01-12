System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, Label, Node, GameManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameStrat;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../Globla//GameManger", _context.meta, extras);
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
      director = _cc.director;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be748Oax5RIDrLb7ixrYMO1", "Strat", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStrat", GameStrat = (_dec = ccclass("Strat"), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class GameStrat extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "stratbut", _descriptor, this);

          this.readbut = null;

          _initializerDefineProperty(this, "Archiveui", _descriptor2, this);

          _initializerDefineProperty(this, "ArchiveuiPanel", _descriptor3, this);
        }

        onLoad() {
          this.stratbut.node.on("click", this.Strat, this);
          this.readbut.node.on("click", this.readdata, this);
        } //开始游戏


        Strat() {
          director.loadScene("WarehouseScene(仓库页面)");
        } //读取档案


        readdata() {
          this.Archiveui.active = true;

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst() === null) {
            return;
          }

          let moneynum = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst().getMoney();
          console.log(moneynum);
          let name = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst().getName();
          console.log(name);
          let stroenum = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst().getStore();
          this.Archiveui.getChildByName("MoneyLable").getComponent(Label).string = `余额: ${moneynum}￥`;
          this.Archiveui.getChildByName("NameLable").getComponent(Label).string = `名字: ${name}`;
          this.Archiveui.getChildByName("StoreLable").getComponent(Label).string = `仓库: ${stroenum}个`;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stratbut", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Archiveui", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ArchiveuiPanel", [_dec4], {
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
//# sourceMappingURL=6a4c6de9167363e2185a5bdb02a5f4b5dd068da5.js.map