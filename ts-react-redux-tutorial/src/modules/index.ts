import {combineReducers} from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
    counter
})

//rootReducer 내보내고
export default rootReducer;

//rootReducer 의 반환값을 유추한다
//추우 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보난다.
export type RootState = ReturnType<typeof rootReducer>;