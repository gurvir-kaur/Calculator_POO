/**
    Class representing functions of storing memory 
*/
class appLocalDB {

    /**
     * Create an object Local data base.
     * @param {pcookie} cookie - the value to save in cookie.
     */
    constructor() {

        this.name = "Ultimo valor guardado";
        this.expire = "31 Dec 2020 23:59:59 GMT";
        this.init();
    }

    init(){
        console.log("Entered in class appLocalDB")

    }

//////////////////     COOKIE     /////////////////////

    getCookie(){
        return document.cookie;
        console.log(document.cookie); 
    }

    saveCookie(value) {
        console.log("sving");
        document.cookie = this.name+"="+value+";expires="+this.expire;
        console.log(document.cookie);
    }
}