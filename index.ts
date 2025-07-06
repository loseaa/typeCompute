
// typeof 关键字
// 获取类型
let a:string = "Hello World";
let b:typeof a = "Hello World";

let f=function(a:number,b:number){return a+b};
let foo=f(1,2)
let g:typeof foo = 3;

// keyof 关键字
// 获取一个类型所有的成员名
// keyof操作符可以用于获取一个类型的所有成员名，返回一个联合类型。
// 例如，keyof Person返回"name" | "age"。
type Person = { name: string; age: number ;sex:"male"|"female"};
type PersonKeys = keyof Person; // "name" | "age"
let key: PersonKeys = "name"; // 正确
let key2: PersonKeys = "age"; // 正确

function printPerson(person: Person, key:keyof Person) {
    console.log(person[key]); 
}
printPerson({ name: "Alice", age: 30,sex:"female" },"age"); // 输出：Alice

// in关键字
// 用于遍历枚举类型或对象类型的属性。
// 例如，in操作符可以用于遍历枚举类型的所有成员名，或遍历对象类型的所有属性名。
// 用于遍历

type P={
    [key in "a"|"b"|"c"]:string;
}

// 等价于
// type P={
//     a:string;
//     b:string;
//     c:string;
// }

type P2={
    [key in keyof Person]: Person[key];
}

// 等价于
// type P2={
//     name:string;   
//     age:string;
//     sex:string;  
// }



// in 和  typeof 联合使用
// 制作只读类型
// type ReadOnly={
//     readonly [key in keyof Person]:Person[key];
// }

// // 制作可选类型
// type Optional={
//     [key in keyof Person]?:Person[key];
// }

// 加入泛型扩展
type ReadOnly<T>={
    [key in keyof T]:T[key]; 
}

// 可选泛型
type Optiona<T>={
    [key in keyof T]?:T[key];
}

//必选泛型
type Requireds<T>={
    [key in keyof T]-?:T[key];
}

// 去除readonly
type RemoveReadonly<T>={
    -readonly [key in keyof T]:T[key];
}


