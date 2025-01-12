System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, GameManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e88294/zvJKqKd4KocYJajN", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec(_class = (_class2 = class GameManager extends Component {
        static inst() {
          return this._inst;
        } // Fetch player name


        static getname() {
          if (this._playerName === null) {
            this.readName();
          }

          return this._playerName;
        } // Fetch player money


        static getMoney() {
          if (this._Money === null) {
            this.readMoney();
          }

          return this._Money;
        } // Fetch player store value


        static getStore() {
          if (this._Store === null) {
            this.readStore();
          }

          return this._Store;
        } // Read player name from localStorage


        static readName() {
          var name = localStorage.getItem(this.PLAYERNAME);
          this._playerName = name ? name : "小鹏";
        } // Read money from localStorage


        static readMoney() {
          var moneyValue = localStorage.getItem(this.MONEY);
          this._Money = moneyValue ? moneyValue : "0";
        } // Read store value from localStorage


        static readStore() {
          var storeValue = localStorage.getItem(this.STORE);
          this._Store = storeValue ? parseInt(storeValue) : 0; // Default to 0 if not found
        } // Save player name to localStorage


        static saveName() {
          localStorage.setItem(this.PLAYERNAME, this._playerName);
        } // Save money to localStorage


        static saveMoney() {
          localStorage.setItem(this.MONEY, this._Money);
        } // Save store value to localStorage


        static saveStore() {
          localStorage.setItem(this.STORE, this._Store.toString());
        } // Update player name


        static namechange(name) {
          this._playerName = name;
          this.saveName(); // Save updated name to localStorage
        } // Example of setting and getting values


        static updatePlayerData(name, money, store) {
          this._playerName = name;
          this._Money = money;
          this._Store = store;
          this.saveName();
          this.saveMoney();
          this.saveStore();
        }

      }, _class2._playerName = null, _class2.PLAYERNAME = "playername", _class2._Money = null, _class2.MONEY = "money", _class2._Store = null, _class2.STORE = "store", _class2._inst = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f3971f169f0fa9495391bb6a9b38ee8ae5dc5c3.js.map