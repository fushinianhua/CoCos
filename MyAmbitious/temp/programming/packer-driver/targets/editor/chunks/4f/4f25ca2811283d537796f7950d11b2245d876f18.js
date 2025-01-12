System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider2D, Component, Contact2DType, _dec, _class, _crd, ccclass, property, dir;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa1bfNiDytMuqwyw2fWU4Ye", "Destroy", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider', 'Collider2D', 'Component', 'Contact2DType', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dir", dir = (_dec = ccclass("Destroy"), _dec(_class = class dir extends Component {
        start() {
          // 注册单个碰撞体的回调函数
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          setTimeout(() => {
            this.node.destroy();
          }, 0);
        }

        update(deltaTime) {
          let NodePosition = this.node.getPosition();

          if (NodePosition.y < -650) {
            this.node.destroy();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f25ca2811283d537796f7950d11b2245d876f18.js.map