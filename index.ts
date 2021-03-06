import Server from './clasess/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({origin:true, credentials:true}));

//Rutas de los Servicios
server.app.use('/',router);


server. start(() =>{
    console.log(`Server running port: ${server.port}`);
}); 



