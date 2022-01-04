import {useState} from 'react'

function InputExample() {
    const [form,setForm]=useState({name:"",surname:""});


    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    
    
    
    return (
        <div>
            Name<br/>
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
                  
            Surname<br/>
        <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br />
            <h3>{form.name} {form.surname}</h3>
           
            
        </div>
    )
}

export default InputExample
