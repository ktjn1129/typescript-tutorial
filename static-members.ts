export {};

// 静的メンバ：インスタンスごとにプロパティの変化しないメンバ
// new演算子でインスタンス生成せずともメンバへのアクセスが可能
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Taro";
  static lastName: string = "Tanaka";

  static work() {
    return `${this.firstName} is working.`;
  }
}
