import { connectMongo } from "mongoose";
import cors from 'cors';
import errorHandler from "./handler/error-handler";
import gamesRoutes from './routes/games-routes.js';

//Se connecter à MongoDB
await connectMongo();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/games', gamesRoutes);

app.use('/api/users',);

app.use(errorHandler);

app.listen(5000, () => {
    console.log('serveur écoute au', `http://localhost:5000`);
});



