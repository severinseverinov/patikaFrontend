import {useState} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    
    const increase = ()=>{
        setCount(count+1)
    }
    // fonksiyonlu kullanım
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
    )
}

export default Counter
