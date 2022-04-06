import { logger } from "../../config/logger";
import { Request, Response } from "express";
import { Movie } from "../models/Movie";

export class MovieController {

  static async create(req: Request, res: Response) {
    try { 
      const data = req.body
  
      const movie = await Movie.create(data)
    
      res.status(201).json({ msg: 'Filme registrado', movie })
    }
    catch (err: any) {
      logger.error(err.message)

      return res.status(500).json({msg: 'Ocorreu um erro inesperado'})
    }
  }
  
  static async findAll(req: Request, res: Response) {
    try {
      const movies = await Movie.find()

      if (!movies) {
        return res.status(404).json({ msg: 'Numhum filme foi encontrado' })
      }

      return res.status(200).json(movies) 
    }
    catch (err: any) {
      logger.error(err.message)

      return res.status(500).json({msg: 'Ocorreu um erro inesperado'})

    }
  }

  static async findById(req: Request, res: Response) {
    try {
      const { id } = req.params

      const movie = await Movie.findById(id)

      if (!movie) {
        return res.status(404).json({msg: 'Filme não encontrado'})
      }

      return res.status(200).json( movie )
    }
    catch (err: any) {
      logger.error(err.message)

      return res.status(500).json({msg: 'Ocorreu um erro inesperado'})
    }
  }

  static async update(req: Request, res: Response) {
    try { 
      const { id } = req.params
      const data = req.body
  
      const movie = await Movie.findByIdAndUpdate(id, data)
    
      if (!movie) {
        return res.status(404).json({msg: 'Filme não encontrado'})
      }

      const updated = await Movie.findById(id)

      res.status(201).json({ msg: 'Filme atualizado', movie: updated })
    }
    catch (err: any) {
      logger.error(err.message)

      return res.status(500).json({msg: 'Ocorreu um erro inesperado'})
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params

      const movie = await Movie.findByIdAndDelete(id)

      if (!movie) {
        return res.status(404).json({msg: 'Filme não encontrado'})
      }

      return res.status(200).json({msg: 'Filme deletado'})
    }
    catch (err: any) {
      logger.error(err.message)

      return res.status(500).json({msg: 'Ocorreu um erro inesperado'})
    }
  }
}
