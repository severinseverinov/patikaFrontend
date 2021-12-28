const USER=["Ayse","Ahmet","MEHMET","ALI","CevDET"]

const NEW_USER=USER.map(user => user.toLowerCase())

console.log(NEW_USER)

const USER_OBJ=USER.map( item =>
    {
        return{
            username:item,
            shortName:`${item[0]}.`,
            newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    }
}
)

console.log(USER_OBJ)