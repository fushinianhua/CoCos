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

      __checkObsolete__(['_decorator', 'Component', 'computeRatioByType', 'director', 'EventTouch', 'Input', 'input', 'Node', 'Prefab', 'Scene', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Start", Start = (_dec = ccclass("StartGet"), _dec(_class = class Start extends Component {
        constructor() {
          super(...arguments);
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

        start() {}

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
          var touchLocation = event.getUILocation(); // 获取触摸点的位置

          console.log("触摸点X:" + touchLocation.x);
          console.log("触摸点Y:" + touchLocation.y);
          var nodeLocation = this.node.getPosition(); // 获取节点的位置

          console.log("节点X:" + nodeLocation.x);
          console.log("节点Y:" + nodeLocation.y); // 计算触摸点和节点位置的偏移量

          this.touchOffset.x = touchLocation.x - nodeLocation.x;
          this.touchOffset.y = touchLocation.y - nodeLocation.y;
          console.log("偏移量X:" + this.touchOffset.x);
          console.log("偏移量Y:" + this.touchOffset.y);
          this._IsDargging = true; ///*console.log(`触摸开始位置: x=${touchLocation.x}, y=${touchLocation.y}`)*/;*/

          /*console.log(`节点初始位置: x=${nodeLocation.x}, y=${nodeLocation.y}`);*/
        } // 在触摸移动时，更新节点的位置


        onTouchMove(event) {
          if (!this._IsDargging) return;
          var touchLocation = event.getUILocation();
          var newPosition = new Vec3(touchLocation.x - this.touchOffset.x, touchLocation.y - this.touchOffset.y, 0); // 限定拖动范围
          // newPosition = this.clampPosition(newPosition);

          this.node.setPosition(newPosition);
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
//# sourceMappingURL=dba34b46f2baf97c3fd55234141f15e9dc0e3148.js.map