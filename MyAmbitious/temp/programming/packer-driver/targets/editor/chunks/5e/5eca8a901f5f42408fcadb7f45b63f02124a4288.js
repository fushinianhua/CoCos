System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _class2, _crd, ccclass, property, GameManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12772UoM99FoZ8IS3Wvc237", "GameManger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);
          this._playerName = null;
          // 玩家名称
          this.PLAYERNAME = "playername";
          // 本地存储中玩家名称的键
          this._Money = null;
          // 玩家金钱
          this.MONEY = "money";
          // 本地存储中玩家金钱的键
          this._Store = null;
          // 玩家商店数据
          this.STORE = "store";
          // 本地存储中玩家商店数据的键
          this._MaxShelfCount = null;
          this.SHELFCOUNT = "shelfcount";
        }

        // 游戏管理器的单例实例
        static inst() {
          return this._inst;
        }

        onLoad() {
          GameManager._inst = this;
          director.addPersistRootNode(this.node); // 设置 GameManager 节点为持久化，跨场景不销毁

          this.init(); // 初始化游戏数据
        } // 初始化游戏数据


        init() {
          // 加载数据时使用缓存，避免多次从 localStorage 读取
          this._playerName = this.ReadPlayerData(this.PLAYERNAME, "鹏");
          this._Money = this.ReadPlayerData(this.MONEY, 100);
          this._Store = this.ReadPlayerData(this.STORE, 1);
          this._MaxShelfCount = this.ReadPlayerData(this.SHELFCOUNT, 6);
        }
        /**
         * 获取玩家游戏名字
         * @returns 返回玩家游戏名
         */


        getName() {
          return this._playerName;
        }
        /**
         * 获取玩家游戏金额余额
         * @returns 返回玩家游戏金钱
         */


        getMoney() {
          return this._Money;
        }
        /**
         * 获取玩家商店的值
         * @returns 返回玩家商店存储值
         */


        getStore() {
          return this._Store;
        }
        /***
         * 读取本地玩家游戏数据
         * @param key localStorage 键
         * @param defaultValue 默认值
         * @returns 返回从 localStorage 读取的数据
         */


        ReadPlayerData(key, defaultValue) {
          try {
            const value = localStorage.getItem(key);
            if (value === null) return defaultValue; // 如果是数字类型的数据，做类型转换

            if (typeof defaultValue === "number") {
              return isNaN(Number(value)) ? defaultValue : parseInt(value);
            }

            return value;
          } catch (e) {
            console.error(`读取 ${key} 数据失败`, e);
            return defaultValue;
          }
        }
        /**
         * 保存玩家名称
         */


        SavePlayerName() {
          this.SavePlayerData(this.PLAYERNAME, this._playerName);
        }
        /**
         * 保存玩家金钱
         */


        SavePlayerMoney() {
          this.SavePlayerData(this.MONEY, this._Money);
        }
        /**
         * 保存玩家商店数据
         */


        SavePlayerStore() {
          this.SavePlayerData(this.STORE, this._Store.toString());
        }
        /**
         * 保存玩家数据到 localStorage
         * @param key localStorage 键
         * @param value 存储值
         */


        SavePlayerData(key, value) {
          try {
            localStorage.setItem(key, value);
          } catch (e) {
            console.error(`保存 ${key} 数据失败`, e);
          }
        }
        /**
         * 更新玩家数据
         * @param name 玩家名称
         * @param money 玩家金钱
         * @param store 玩家商店数据
         */


        updatePlayerData(name, money, store) {
          this._playerName = name;
          this._Money = money;
          this._Store = store;
          this.SavePlayerName();
          this.SavePlayerMoney();
          this.SavePlayerStore();
        }
        /**
         * 修改玩家名称
         * @param name 新的玩家名称
         */


        namechange(name) {
          this._playerName = name;
          this.SavePlayerName(); // 保存更新的玩家名称
        }

      }, _class2._inst = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5eca8a901f5f42408fcadb7f45b63f02124a4288.js.map