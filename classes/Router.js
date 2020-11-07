class Router {
    constructor(prefix, message, client){
        this.prefix = prefix
        this.message = message
        this.client = client
        this.args =  message.content.slice(this.prefix.length).trim().split(/ +/g);
    }
    //Future
}