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

};
const handleSubmit = (e : any) => {

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