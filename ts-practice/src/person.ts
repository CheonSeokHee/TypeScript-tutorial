interface Person{
    name : string,
    age ?: number
}
type Person2 = {
    name : string,
    age ?: number
}

interface Developer extends Person{
    skills : string[];
}
type Developer2 = Person & {
    skills : string[]
}

const person : Person = {
    name : "석희천",
    age : 10
}
const expert : Developer = {
    name : "천석희",
    skills : ["javaScript" , "java", "typeScript"]
}
// 일반 변수에도 type 지정이 가능하다.
type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
// const colors: Color[] = ['red', 'blue']; //error !


// ?: == ~ 일수도 아닐수도 있다는 의미
// interface 안에 선언될 것들이 공통부분이 존재한다면 객체끼리의 참조 선언도 가능하다
// type == interface => 타입 as 라고 불린다. extends == & 연산자로 상속 받고자 하는 타입을 지정한다.
//라이브러리의 타입 설정은 interface 를 사용한다 둘 중에 일관성 있게 하나만 사용한다.
