import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Users from './components/Users'

const name="Sevgin"
const surname="SERBEST"
const isLogedIn=true
const friends2=[
  {name:"Sevgin"},{name:"Elif"},{name:"Cihangir"},{name:"Nil Nisa"}
];

function App(){
  return (
    <>
    <div>Merhaba Dünya!</div>
    <Header/>
    <h1>{isLogedIn ? `Benim adım ${name} ve soyadım ${surname}.`:`Giriş yapılmadı.`}</h1>
    <Users 
      name="Sevgin" 
      surname="SERBEST" 
      //isLog={true} 
      age={29}
      address={
        {title:"Kirklareli/Lüleburgaz",
         zip:39750,
        }}
      friends={["Ahmet","Mehmet","Veli","Ali"]} 
      friends2={friends2}
    />

    </>
  );
}

export default App;
