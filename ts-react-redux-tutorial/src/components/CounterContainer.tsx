import * as React from "react";
import  {decrease, increase, increaseBy} from "../modules/counter";
import {useDispatch, useSelector} from "react-redux";
import rootReducer, {RootState} from "../modules";
import Counter from "./Counter";

function CounterContainer() {
    //컨테이너 상태를 조회. 상태를 조회할 때는 state의 타입을 RootState로 지정해야한다.
    const count = useSelector((state : RootState) => state.counter.count)
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    }
    const onDecrease = () => {
        dispatch(decrease());
    }
    const onIncreaseBy = (value : number) => {
        dispatch(increaseBy(value));
    }
    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    );
};

export default CounterContainer;

