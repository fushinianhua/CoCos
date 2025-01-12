System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Input, Vec3, _dec, _class, _crd, ccclass, property, Start;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Input = _cc.Input;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffdf26xtQZDU7BnVdvnoM78", "StartGet", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'Component', 'computeRatioByType', 'Contact2DType', 'director', 'EventTouch', 'Input', 'input', 'Node', 'Prefab', 'Scene', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Start", Start = (_dec = ccclass("StartGet"), _dec(_class = class Start extends Component {
        constructor(...args) {
          super(...args);
          this._IsDargging = false;
          this.touchOffset = new Vec3(0, 0, 0);
        }

        // 跟踪触摸偏移量
        onLoad() {
          this.addTouch();
        }

        onDestroy() {
          console.log("移除");
          this.removeTouch();
          this._IsDargging = false;
        }

        update(deltaTime) {} // 添加触摸事件监听


        addTouch() {
          this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        } // 移除触摸事件监听


        removeTouch() {
          this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        } // 在触摸开始时，计算并存储初始的偏移量


        onTouchStart(event) {
          const touchLocation = event.getUILocation();
          const nodeLocation = this.node.getPosition();
          this.touchOffset.x = touchLocation.x - nodeLocation.x;
          this.touchOffset.y = touchLocation.y - nodeLocation.y;
          this._IsDargging = true;
        } // 在触摸移动时，更新节点的位置


        onTouchMove(event) {
          if (!this._IsDargging) return;
          const touchLocation = event.getUILocation();
          let newPosition = new Vec3(touchLocation.x - this.touchOffset.x, touchLocation.y - this.touchOffset.y, 0); // 限定拖动范围

          newPosition = this.clampPosition(newPosition);
          this.node.setPosition(newPosition);
        }

        clampPosition(newPosition) {
          const maxX = 250; // 最大X坐标

          const maxY = 350; // 最大Y坐标

          const minx = -250;
          const miny = -350;
          newPosition.x = Math.min(Math.max(newPosition.x, minx), maxX);
          newPosition.y = Math.min(Math.max(newPosition.y, miny), maxY); // 修正为 miny

          newPosition.z = 0; // 确保Z坐标为0

          return newPosition;
        }

        onTouchEnd() {
          console.log("触摸结束"); // 可选：重置变量或执行其他操作
        }

        onback() {
          director.loadScene("WarehouseScene(仓库页面)");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf3d5f3ea1abb5ce7c38a9988d37760cdefc5a11.js.map