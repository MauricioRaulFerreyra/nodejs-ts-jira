import express, {Application} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from '../routes/user';

dotenv.config();

class Server {

    private app: Application;
    private port: string | undefined;
    private apiPath = {
        users: '/api/users'
    }

    constructor(){
        // Express app
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Define routes
        this.routes();
    }    

    middlewares() {
        // CORS
        this.app.use( cors() );
        // Parse JSON body
        this.app.use( express.json() );
        this.app.use( express.urlencoded( {extended: true} ) );
        // Public folder
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.apiPath.users, userRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server is listening on port ${this.port}`);
        })
    }
}

export default Server;