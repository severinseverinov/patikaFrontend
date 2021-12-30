import getUser from "./app.js";
import getPost from "./app.js";

(async ()=>{
    try{
        const user=await getUser(1);
        const post=await getPost(1);
    
        console.log(user);
        console.log(post);
    }
    catch(e){
     console.log(e);
    }
})();