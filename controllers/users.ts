import { Request, Response } from "express";
import User from "../models/user";


export const getUsers = async (req: Request, res: Response) => {

  const users = await User.findAll();

  res.json({users});
};

export const getUser = async (req: Request, res: Response) => {

  const { id } = req.params;

  const user = await User.findByPk(id);

  if ( !user ) {
    return res.status(404).json({
      msg: `No existe un usuario con el id ${id}`
    });
  }

  res.json(user);
};

export const postUser = async (req: Request, res: Response) => {

  const { body } = req;

  try {

    // verifica si ya existe un usuario con ese email
    const emailExists = await User.findOne({
      where: {
        email: body.email
      }
    });

    if ( emailExists ) {
      return res.status(400).json({
        msg: 'Ya existe un usuario con ese email'
      });
    }

    const user = await User.create(body);

    res.json(user);
    
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    });
  }
};

export const putUser = async (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  try {

    const user = await User.findByPk(id);

    if ( !user ) {
      return res.status(404).json({
        msg: `No existe un usuario con el id ${id}`
      });
    }

    await user.update(body);

    res.json(user);

  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {

  const { id } = req.params;

  try {

    const user = await User.findByPk(id);

    if ( !user ) {
      return res.status(404).json({
        msg: `No existe un usuario con el id ${id}`
      });
    }

    // eliminacion fisica
    // await user.destroy();

    // eliminacion logica
    await user.update({status: false});

    res.json(user);

  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    });
  }

};