import React, {useState} from "react";

type MyFormProps = {
    onSubmit : (form : {name : string; description : string } ) => void
};

function MyForm({onSubmit} : MyFormProps) {
    const [form , setForm ] = useState({
        name : '',
        description : ''
    });

const {name, description} = form;

const onChange = (e: any) => {
    const {name, value} = e.target;
    //name의 위치에 value값을 넣는다
    console.log(value);
    setForm({
        ...form,
       [name] : value
        //객체를 참조할때는 []로 감싸서 사용한다.
        //여기서 name 은 내가 input창 첫번째 name이 아닌 name="name"의 name을 의미하여 name의 들어있는 "name", "description"을 참조가능
    });
};
const handleSubmit = (e : any) => {
    e.preventDefault(); // 새로고침 방지
    onSubmit(form);
    setForm({
        name : '',
        description: ''
    });
};
return (
    <form onSubmit={handleSubmit}>
        <input name="name" value = {name} onChange={onChange}/>
        <input name="description" value={description} onChange={onChange}/>
        <button type="submit">등록</button>


    </form>
)
}
export default MyForm;