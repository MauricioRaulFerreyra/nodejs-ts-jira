import express, {Application} from 'express';


class Server {

    private app: Application;
    private port: string | undefined;

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server is listening on port ${this.port}`);
        })
    }
}

export default Server;