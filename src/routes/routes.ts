import { MovieController } from "../controllers/MovieController"
import { movieValidator } from "../middleware/movieValidator";
import { validate } from "../middleware/handleValidator";
import { Router } from "express";

const router = Router()

router.post('/', movieValidator(), validate, MovieController.create)

router.get('/', MovieController.findAll)
router.get('/:id', MovieController.findById)

router.patch('/:id', MovieController.update)

router.delete('/:id', movieValidator(), validate, MovieController.delete)

export { router }