import { _decorator, Component, director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  public _playerName: string = null; // 玩家名称
  private PLAYERNAME: string = "playername"; // 本地存储中玩家名称的键

  public _Money: string = null; // 玩家金钱
  private MONEY: string = "money"; // 本地存储中玩家金钱的键

  public _Store: number = null; // 玩家商店数据
  private STORE: string = "store"; // 本地存储中玩家商店数据的键
  public _PlayProentry: string = null;
  private PLAYPROENTRY: string = "playproentry"; // 本地存储中玩家商店数据的键

  private _MaxShelfCount: number = null;
  private SHELFCOUNT: string = "shelfcount";

  private static _inst: GameManager = null; // 游戏管理器的单例实例

  public static inst() {
    return this._inst;
  }

  onLoad() {
    GameManager._inst = this;
    director.addPersistRootNode(this.node); // 设置 GameManager 节点为持久化，跨场景不销毁
    this.init(); // 初始化游戏数据
  }

  // 初始化游戏数据
  private init() {
    // 加载数据时使用缓存，避免多次从 localStorage 读取
    this._playerName = this.ReadPlayerData(this.PLAYERNAME, "鹏");
    this._Money = this.ReadPlayerData(this.MONEY, 100);
    this._Store = this.ReadPlayerData(this.STORE, 1);
    this._MaxShelfCount = this.ReadPlayerData(this.SHELFCOUNT, 6);
    this._PlayProentry = this.ReadPlayerData(this.PLAYPROENTRY, "");
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
  ReadPlayerData(key: string, defaultValue: any): any {
    try {
      const value = localStorage.getItem(key);
      if (value === null) return defaultValue;
      // 如果是数字类型的数据，做类型转换
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
  SavePlayerData(key: string, value: string) {
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
  updatePlayerData(name: string, money: string, store: number) {
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
  namechange(name: string) {
    this._playerName = name;
    this.SavePlayerName(); // 保存更新的玩家名称
  }
}
