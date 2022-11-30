export default {
    Login: function(mail, pass) {
        console.log("AA")
        return new Promise((res, rej) => {
            if (mail == "a@b" ||pass=="aaaaaaaa") 
                res();
            else 
                rej("username o password errati");
        })
    }
}