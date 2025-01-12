System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, find, instantiate, Label, Prefab, randomRange, randomRangeInt, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, GameManager;

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
      director = _cc.director;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      randomRange = _cc.randomRange;
      randomRangeInt = _cc.randomRangeInt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "095988MjWJFdqgX+n///5bu", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider', 'BoxCollider2D', 'Component', 'director', 'find', 'instantiate', 'Label', 'Node', 'Prefab', 'randomRange', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec2 = property(Prefab), _dec3 = property([String]), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "prefabLabel", _descriptor, this);

          _initializerDefineProperty(this, "workNameArray", _descriptor2, this);

          //使用过的索引
          this.usedIndexes = new Set();
        }

        // 获取实例
        static get Instance() {
          return this._instance;
        }

        onLoad() {
          //确保全局只有一个实例
          if (GameManager._instance == null) {
            GameManager._instance = this;
          } else {
            console.log("GameManager is already exist");
            this.node.destroy();
            return;
          }
        }

        start() {
          this.schedule(this.replaceLabelContent, 0.5);
        }

        update(dt) {}

        replaceLabelContent() {
          // 重置已使用的索引列表，如果所有索引都被使用过一次
          // if (this.usedIndexes.size === this.workNameArray.length) {
          //     this.usedIndexes.clear();
          // }
          // 获取一个未使用的随机索引
          if (this.usedIndexes.size === this.workNameArray.length) {
            return;
          }

          var randomIndex;

          do {
            randomIndex = randomRangeInt(0, this.workNameArray.length);
          } while (this.usedIndexes.has(randomIndex)); // 标记此索引为已使用


          this.usedIndexes.add(randomIndex); // 更新 prefabLabel 的内容

          var WorkLabelNode = instantiate(this.prefabLabel);
          WorkLabelNode.getComponent(Label).string = this.workNameArray[randomIndex];
          WorkLabelNode.parent = find("Canvas/WorkList");
          WorkLabelNode.setPosition(randomRange(-320, 320), 670);
        }

        buttonClick() {
          console.log("buttonClick");
          director.loadScene(director.getScene().name);
        }

      }, _class3._instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "workNameArray", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d338a7cb529311899b7a719de6987ace4922da0.js.map