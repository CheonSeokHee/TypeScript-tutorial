import React from "react";

type GreetingsProps = {
    name : string;
    mark : string;
    optional ?: string;
    onClick : (name:string) => void //아무것도 리턴하지 않는다는 함수를 의미
};

//React.FC
//1. props의 자식이 들어가 있다
//2. 컴포넌트의  defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성이 될 수 있다 ex) Greetings. 을 찍어보면 알 수 있음
//3. 되도록 권장하지 않음 defaultProps가 먹히지 않지 때문에 그냥 함수형으로 개발하는것이 낫다.
function Greetings({name, mark, optional, onClick}: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div> Hello, {name} {mark}
              {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>Button Click</button>
        </div>
        </div>
    );
}
Greetings.defaultProps = {
    mark : '!'
}

export default Greetings;