export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Taro",
  age: 30,
};

me.age++;

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "Jiro",
  age: 40,
};

// friend.age++;

// Readonly<Profile>を自作した場合
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadOnlyProfile = ReadOnly<Profile>;
