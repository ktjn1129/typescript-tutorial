export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

// 型のkeyのリテラルを型とする
type PropertyTypes = keyof Profile;

// [P in keyof T]でkeyのリテラルを一つずつ抽出する
// T[P]でPに対応する型を求める
type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};

type OptionalProfile = Optional<Profile>;
