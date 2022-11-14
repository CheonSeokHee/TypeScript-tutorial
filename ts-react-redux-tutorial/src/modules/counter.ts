//액션 타입 선언
//뒤에 as const를 붙여준 이유는 나중에 액션 객체를 만들게 action.type의 값을 찾는 과정에서
//action.type이 string으로 찾지 않고, 'counter/INCREASE'와 같이 실제 문자열 값으로 찾게 해주려고
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

//액션 생성함수 선언
export const increase = () =>({
    type : INCREASE
});
export const decrease = () => ({
    type: DECREASE
});
//액션이 부가적으로 필요한 값을 payload 라는 이름으로 사용 => 액션의 모양을 통일시킴으로써 개발의 편의성을 올려준다.
//FSA 규칙임
export const increaseBy = (value : number) => ({
    type : INCREASE_BY,
    payload : value
});
//모든 액션 객체들에 대한 타입 준비
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
//상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않는다.
type CounterAction = | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;


//리덕스에서 관리할 상태 타입 선언
type CounterState = {
    count : number;
}
//초기상태 선언
const initialState : CounterState = {
    count : 0
}

function counter(
    state : CounterState = initialState,
    action : CounterAction
): CounterState {
    switch (action.type){
        case INCREASE :
            return {count : state.count + 1 }
        case DECREASE :
            return {count : state.count - 1}
        case INCREASE_BY :
            return {count : state.count + action.payload}
        default:
            return state;
    }
}

export default counter;


