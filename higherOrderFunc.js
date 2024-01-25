//filter関数：条件に合った要素で新しい配列を作成
const pomeraninas = dogs.filter(dog => dog.type === "pomeraninan");

//find関数：条件に合う最初の要素を抽出して変数に格納
const myDog = dogs.find(dog => dog.name == "ポメおくん");

//map関数：各要素を加工して新しい配列を作成する
const dogName = dogs.map(dog => dog.name);

//reactで頻出のmap関数の使用方法
render() {
    return (
        <ul>
            {this.props.dogs.map(dog => <li>{`${dog.name}: ${dog.description}`}</li>)}
        </ul>
    );
};

//filter関数とmap関数の組み合わせ
const animals = dogs.filter(dog => dog.type === "pomeraninan")
    .map(dog => ({
        id: uuid(),
        name: dog.name,
    })
);

//reduce関数：各要素同士を加算（もしくは連結）して値を求める
const total = dogs.reduce((acc, dog) => acc + dog.price, 0);