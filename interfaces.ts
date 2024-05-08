export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void; //シグネチャ：引数と戻り値のみを定義するメソッド
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("イオナズン！");
  }

  kougeki(): void {
    console.log("攻撃！");
  }
}
