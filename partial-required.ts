export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 全てのプロパティをオプショナルにする
type PartialType = Partial<Profile>;

// 全てのプロパティを必須にする
type RequiredType = Required<Profile>;
