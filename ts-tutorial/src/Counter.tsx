import React, {useEffect, useReducer, useState} from "react";
// // useState에서는 Generics를 사용하지 않아도 알아서 타입을 유추하기 때문에 <Numbers> 생략 가능
// // 상태가 null일 수도 있고, 아닐수도 있을때 Generics 를 쓴다.
// type information = {name: string, description:string};
// const [info , setInformation] = useState<information | null >(null);
//
// //배열일때도 활용
// type Todo = {id: number, name:string, done : boolean};
// const [todo, setTodo] = useState<Todo[]>([]);

//useReducer를 사용 할 때에는 액션에 대한 타입스크립트 타입들을 모두 준비해서 | 문자를 사용하여 결합
type Action = {type : 'INCREASE'} | {type : 'DECREASE'};

export const reducer = (state : number | undefined, action : Action): number => {
    switch (action.type || state != undefined){
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default :
            return state;
    }
}
function Counter() {
    //const [count, setCount] = useState(0);
  //  const count = useSelector((state) => state)
    //const dispatch = useDispatch();
    const [count, dispatch] =useReducer(reducer,0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});
    const onResult = () => alert(count);


    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
                <button onClick={onResult}>현재값</button>
        </div>
    )
}
export default Counter;