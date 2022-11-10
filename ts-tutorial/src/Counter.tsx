import React, {useState} from "react";

// useState에서는 Generics를 사용하지 않아도 알아서 타입을 유추하기 때문에 <Numbers> 생략 가능
// 상태가 null일 수도 있고, 아닐수도 있을때 Generics 를 쓴다.
type information = {name: string, description:string};
const [info , setInformation] = useState<information | null >(null);

//배열일때도 활용
type Todo = {id: number, name:string, done : boolean};
const [todo, setTodo] = useState<Todo[]>([]);


function Counter() {
    const [count, setCount] = useState(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);



    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}
export default Counter;