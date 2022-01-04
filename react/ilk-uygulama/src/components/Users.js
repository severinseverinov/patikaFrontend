import propTypes from "prop-types"

function Users({name,surname,isLog,age,friends,friends2,address}){   //props : {name,surname,isLog}
    if(!isLog){
        return <h1>Giriş yapmadınız.</h1>
    }
    //early return işlemi ile kulanıcı giriş yapmadı ise diğer bölümler gözükmez.

    return (
        <>
        <h1>
            {isLog
            ? `${name} ${surname} (${age})`
            : `Giriş yapmadınız.`}
        </h1>
        
        {address.title}-{address.zip}
        <br/>
        <br/>
        {friends.map((friend,index) => (
        <div>{index} -  {friend}</div>
        ))}

        {friends2.map((friend2) => (
        <div key={friend2.id}>{friend2.name}</div>
        ))}

    </>
    );
}

Users.propTypes={
    name:propTypes.string.isRequired,  
    //veri string tipinde ve isRequired ile zorunlu olarak girilmesi gerekmektedir.
    surname:propTypes.string.isRequired,
    isLog:propTypes.bool.isRequired,
    age:propTypes.oneOfType([propTypes.number,propTypes.string]).isRequired,
    //oneofType ile birden fazla tipte veri kabul edilebildiği söylenebilir.
    address:propTypes.shape({title:propTypes.string,
    zip:Number
    }),
    //address ile gelen verilerden title string zip number olmak zorunda
    friends:Array.isRequired,
    friends2:Array.isRequired,
};

Users.defaultProps={
    name:"isimsiz",
    isLog:false
}

export default Users;