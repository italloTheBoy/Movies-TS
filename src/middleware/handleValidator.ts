import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export function validate(
  req: Request, res: Response, next: NextFunction
) {
  const objErrors = validationResult(req)

  if (objErrors.isEmpty()) {
    return next()
  }

  const errors: Object[] = []

  objErrors.array().map(err => {
    return errors.push({ [err.param]: err.msg });
  })

  return res.status(422).json({ errors })
}