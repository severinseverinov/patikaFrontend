import {useState} from 'react'

function App() {
  const [name, setName]=useState('Sevgin')
  const [age, setAge]=useState(36)
  const [friends, setFriends]=useState(["Ahmet","Ali"])
  const [address, setAddress]=useState({title:'Kirklareli',zip:39750});
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h1>Yaş ({age})</h1>
      <button onClick={()=> setName('Mehmet')}>Change Name </button>
      <button onClick={()=> setAge(30)}>Change Age</button>

      <hr/>
      
      <h2>Friends</h2>
      {
        friends.map((friend,index)=>
        (
          <div key={index}>{friend}</div>
        ))}
      <br />
      <button onClick={()=>setFriends([...friends,"Ayşe"])}>Add New Friend</button>
      {/* setFriends([...friends,"Ayşe"]) => var olan array'in üzerine(önceki verileri korumak) ekleme yapmak için kullanılan yöntem */}
      
      <hr/>
      
      <h2>Address</h2>
      <div>
        {address.title}-{address.zip}
      </div>
      <br />
      <button onClick={()=>setAddress({...address,title:'Istanbul',zip:34750})}>Change Address</button>
      {/* setAddress{...address,title:'Istanbul',zip:34750} => var olan üzerinde değişiklik yapmak için yada sadece bir değeri değiştirmek için kullanılır.Manüpile etmek istemediğimiz zaman ... kullanılır.*/}

    </div>
  );
}

export default App;
