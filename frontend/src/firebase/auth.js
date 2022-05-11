export default {
    Login: function(mail, pass) {
        return new Promise((res, rej) => {
            if (mail == "a@b" ||pass=="aaaaaaaa") res()
            else rej();
        })
    }
}