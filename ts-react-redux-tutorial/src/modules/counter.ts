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

export const increaseBy = ()