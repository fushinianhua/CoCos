System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, instantiate, Label, Prefab, randomRange, randomRangeInt, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, NewComponent;

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
      find = _cc.find;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      randomRange = _cc.randomRange;
      randomRangeInt = _cc.randomRangeInt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6c33uOO+ZJ7pP1DPyzJRaQ", "Generate", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'instantiate', 'Label', 'Node', 'Prefab', 'randomRange', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewComponent", NewComponent = (_dec = ccclass("NewComponent"), _dec2 = property([String]), _dec3 = property(Prefab), _dec(_class = (_class2 = class NewComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "PropenrtyNameArray", _descriptor, this);

          _initializerDefineProperty(this, "propentrylabel", _descriptor2, this);
        }

        start() {
          this.schedule(function () {
            this.qiyong();
          }, 0.5);
        }

        update(deltaTime) {
          var NodePosition = this.node.getPosition();

          if (NodePosition.x < -1) {
            this.node.destroy;
          }
        }
        /**
         * 获取一个新的属性名
         * @returns
         */


        getname() {
          var num = randomRangeInt(0, this.PropenrtyNameArray.length);
          console.log(this.PropenrtyNameArray[num]);
          return this.PropenrtyNameArray[num];
        }

        qiyong() {
          var LabelNode = instantiate(this.propentrylabel);
          LabelNode.getChildByName("PropenrtyLabel").getComponent(Label).string = this.getname();
          LabelNode.parent = find("Canvas/PropList");
          LabelNode.setPosition(randomRange(-320, 320), 670);
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
//# sourceMappingURL=82deb48fb23a509cf99c9ba757cacfcae82941a8.js.map