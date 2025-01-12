System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, tween, Vec2, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Move;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54cb2tCunNOr6cReslJ23GZ", "Move", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Move", Move = (_dec = ccclass("Move"), _dec2 = property(Vec2), _dec3 = property(Vec2), _dec4 = property(Prefab), _dec5 = property(Node), _dec(_class = (_class2 = class Move extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "minBoundary", _descriptor, this);

          _initializerDefineProperty(this, "maxBoundary", _descriptor2, this);

          _initializerDefineProperty(this, "FutureWorkLabel", _descriptor3, this);

          this._offset = new Vec3();
          this._isDragging = false;

          _initializerDefineProperty(this, "restratpanel", _descriptor4, this);
        }

        onLoad() {
          // 注册触摸事件
          this.addTouch();
        }

        start() {
          this.scheduleOnce(() => {
            // 移除触摸事件
            this.removeTouch(); // 创建标签并添加到节点上

            var FutureWorkLabel = instantiate(this.FutureWorkLabel); // 设置标签的位置

            FutureWorkLabel.setParent(this.node); // 动画效果

            var t1 = tween(FutureWorkLabel).to(1.5, {
              position: new Vec3(0, 95, 0)
            }, {
              easing: "backInOut"
            }); // 移动节点效果

            var t2 = tween(this.node).to(2, {
              position: new Vec3(0, 170, 0)
            }); // 动画结束后执行回调函数，然后开始移动节点的效果

            t1.call(() => {
              t2.start();
              this.restratpanel.active = true;
            }).start();
          }, 8);
        }

        onDestroy() {
          // 移除触摸事件
          this.removeTouch();
        }

        onTouchStart(event) {
          //触摸位置
          var touchLocation = event.getUILocation(); //结点位置

          var nodeLocation = this.node.getPosition(); //计算位置偏移量

          this._offset.set(touchLocation.x - nodeLocation.x, touchLocation.y - nodeLocation.y, 0);

          this._isDragging = true;
        }

        onTouchMove(event) {
          if (!this._isDragging) return;
          var touchLocation = event.getUILocation();
          var newPosition = new Vec3(touchLocation.x - this._offset.x, touchLocation.y - this._offset.y, this.node.getPosition().z); // 限定拖动范围

          newPosition = this.clampPosition(newPosition);
          this.node.setPosition(newPosition);
        }

        onTouchEnd(event) {
          this._isDragging = false;
        }

        clampPosition(position) {
          // 将位置x限制在最小边界和最大边界之间
          var clampedX = Math.max(this.minBoundary.x, Math.min(position.x, this.maxBoundary.x)); // 将位置y限制在最小边界和最大边界之间

          var clampedY = Math.max(this.minBoundary.y, Math.min(position.y, this.maxBoundary.y)); // 返回新的Vec3对象，其中x和y被限制在边界内，z保持不变

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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "minBoundary", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxBoundary", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 0);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "FutureWorkLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "restratpanel", [_dec5], {
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
//# sourceMappingURL=0a5518d4c4f353db7cf3cc55d5acbb23a23d9886.js.map