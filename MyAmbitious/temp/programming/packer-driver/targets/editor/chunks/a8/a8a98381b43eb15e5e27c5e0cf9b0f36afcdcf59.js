System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, _dec, _class, _crd, ccclass, property, Start;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffdf26xtQZDU7BnVdvnoM78", "Start", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Input', 'input', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Start", Start = (_dec = ccclass("Start"), _dec(_class = class Start extends Component {
        onLoad() {
          this.addTouch();
        }

        onDestroy() {
          console.log("移除");
          this.removeTouch();
        }

        start() {}

        update(deltaTime) {}

        addTouch() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        removeTouch() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        onTouchStart(event) {
          console.log(event.getLocation()); // Location on screen space

          console.log(event.getUILocation()); // Location on UI space

          console.log("开始触摸");
        }

        onTouchMove() {
          console.log("开始移动");
        }

        onTouchEnd() {
          console.log("停止触摸");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a8a98381b43eb15e5e27c5e0cf9b0f36afcdcf59.js.map