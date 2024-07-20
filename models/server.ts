import express, {Application} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import userRoutes from '../routes/user';
import db from '../db_sequelize/connection';

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

        // Connect to database
        this.dbConnect();
        // Middlewares
        this.middlewares();
        // Define routes
        this.routes();
    }    

    async dbConnect() {
        try {
          await db.authenticate();
          console.log("Connection has been established successfully.");
        } catch (error) {
          console.error("Unable to connect to the database:", error);
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
        // Parse JSON body
        this.app.use( express.json() );
        this.app.use( express.urlencoded( {extended: true} ) );
        // Morgan
        this.app.use( morgan('dev') );
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