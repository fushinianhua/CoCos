System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, Strat;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11e2dMbr2hLX6bUnxsrszOE", "Strat", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Strat", Strat = (_dec = ccclass("Strat"), _dec(_class = class Strat extends Component {
        start() {
          this.addTouch();
        }

        update(deltaTime) {}

        addTouch() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this); //注册手指触摸屏幕事件

          this.node.on(Node.EventType.TOUCH_MOVE, this.onTounchMove, this); //注册手指触摸屏幕事件

          this.node.on(Node.EventType.TOUCH_START, this.onTouchEnd, this); //注册手指触摸屏幕事件
        }

        removeTouch() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this); //移出手指触摸屏幕事件

          this.node.off(Node.EventType.TOUCH_MOVE, this.onTounchMove, this); //注册手指触摸屏幕事件

          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this); //移出手指触摸屏幕事件
        }
        /**
         * 手指开始触摸事件
         */


        onTouchStart(event) {
          console.log("触摸开始");
        }
        /**
         * 手指停止触摸事件
         */


        onTouchEnd(event) {
          console.log("触摸开始");
        }

        onTounchMove() {
          console.log("触摸移动");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bec2fab59b77669bce6e82c11a894b4fba3e750.js.map