import express from 'express';
import { check } from 'express-validator';
import checkAuth from '../middleware/check-auth';
import gamesController from '../controllers/games-controller';

const router = express.Router();

// Middleware pour obtenir toutes les jeux
router.get('/', gamesController.getGames);

router.get('/:id', gamesController.getGamesById);

router.use(checkAuth);

router.post(
  '/',
  [
    check('titre').not().isEmpty(),
    check('categorie').not().isEmpty(),
    check('nombreJoueurs').not().isEmpty(),
    check('duree').not().isEmpty(),
    checkAuth
  ],
  gamesController.createGame
);

router.patch('/:id', gamesController.updateGame);

router.delete('/:id', gamesController.deleteGame);

export default router;
