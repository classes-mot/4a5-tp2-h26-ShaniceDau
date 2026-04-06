import { connectMongo } from "mongoose";
import cors from 'cors';

//Se connecter à MongoDB
await connectMongo();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/games', );

app.use('/api/users',);

app.listen(5000, () => {
    console.log('serveur écoute au', `http://localhost:5000`);
});



