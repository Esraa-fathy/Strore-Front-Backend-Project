import express, { NextFunction, Request, Response } from "express";
import { User, Model_OF_User } from "../models/userModel";
import jwt from "jsonwebtoken";

const module = new Model_OF_User();

export const create = async (req: Request, _res: Response) => {
    const userdata: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      pass: req.body.pass,
    };
    try {
      const newuser = await module.create(userdata);
      // create Token
      const token = jwt.sign(
        { user: newuser },
        process.env.TOKEN as string
      );
      _res.json(newuser);
    } catch (err) {
      console.log(err);
      _res.status(400);
      _res.json(err);
    }
  };


export const displayAll = async (req: Request, res: Response,next :NextFunction) => {
  try {
    const users = await module.displayAllusers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const show = async (req: Request, res: Response,next:NextFunction) => {
    try{
  const user = await module.showOneUsr(req.params.id);
  console.log(user);
  res.json(user);
    }catch (err) {
        next(err);
      }
};

export const Delete= async (req: Request, res: Response) => {
  try {
    const deleted = await module.delete(req.params.id );
    res.json(deleted);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
};
export const update = async (req: Request, res: Response,next:NextFunction) => {
  const userdata: User = {
    id: parseInt(req.params.id),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    pass: req.body.pass,
  };
  try {
    const updatedUser = await module.update(userdata);
    res.json(updatedUser);

  } catch (err) {
    next(err);
  }
};


export const login = async (req: Request, res: Response) => {
  try {
    const user = await module.authenticate(
      req.body.email,
      req.body.pass
    );
    if (user != null) {
      const token = jwt.sign(
        { user: user },
        process.env.TOKEN as string
      );
      res.json(token);
    } else {
      res.json(null);
    }
  } catch (err) {
    res.json({ error: `${err}` });
  }
};