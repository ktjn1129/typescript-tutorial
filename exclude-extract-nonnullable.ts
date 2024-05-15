export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// string | number を除外
type FunctionType = Exclude<SomeTypes, string | number>;
// DebugType を除外
type NonFunctionType = Exclude<SomeTypes, DebugType>;
// 関数を除外
type TypeExcludingTypeFunction = Exclude<SomeTypes, Function>;

// DebugType のみを指定
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// string | number のみを指定
type NonFunctionTypeByExtract = Exclude<SomeTypes, string | number>;
// 関数のみを指定
type TypeExcludingTypeExtractingFunction = Exclude<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
// null | undefined を除外
type NonNullableTypes = NonNullable<NullableTypes>;
