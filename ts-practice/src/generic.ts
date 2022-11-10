//generic: 데이터의 타입을 일반화 한다는 의미
//         자료형을 정하지 않고 여러 타입을 사용할 수있게 해준다.
//         선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입이 아닌 다양한 타임을 받을 수 있도록 하는 기법
//         타입을 지정하지 않으면 any로 구현 가능 but 어떤 함수를 통해 리턴 타입인지 파악할 수가 없다.
//          generic은 파악가능

// const identify = <T>(arg:T[]):T[] => {
//     console.log(arg.length)
//             return arg;
// }
// T라는 변수 타입을 받고, 인자로는 배열 형태의 T를 받는다.
// identify([1, 2, 3])과 같은 형태로 사용할 수 있다.

// function merge<T1, T2>(a: T1, b: T2){
//     return{
//         ...a,
//         ...b
//     };
// }
// const merged = merge({foo : 1}, {bar : 2, foobar : 3});
//
// type Item<T,V> = {
//     list: T[];
//     value: V
// };
//
// const items : Item<number, string> = {
//     list : [1,2,3],
//     value : 'aaaa'
// };


class Queue <T>{
    list : T[] = [];

    get length() {
        return this.list.length;
    }

    enqueue(item : T) {
        this.list.push(item);
    }

    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while(queue.length > 0){
    console.log(queue.dequeue());
}


function wrap<T> (param : T) {
    return{
        param
    }
}
const wrapped = wrap(123)



interface Items<T> {
    list : T[];
}
const items : Items<String> = {
        list:["a","b","c"]
}