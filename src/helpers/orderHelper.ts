import express, { NextFunction, Request, Response } from "express";
import { Order, Model_OF_Order } from "../models/orderModel";

const module = new Model_OF_Order();

export const create = async (_req: Request, _res: Response) => {
    const orderdata: Order= {
        user_id: _req.body.user_id,
        status: _req.body.status,
    };
    try {
      const newOrder = await module.create(orderdata);
      _res.json(newOrder);
    } catch (err) {
      console.log(err);
      _res.status(400);
      _res.json(err);
    }
  };


export const displayAll = async (req: Request, res: Response,next :NextFunction) => {
  try {
    const orders = await module.displayAllorders();
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

export const show = async (_req: Request, res: Response,next:NextFunction) => {
    try{
  const order = await module.showOneOrder(_req.params.id);
  console.log(order);
  res.json(order);
    }catch (err) {
        next(err);
      }
};

export const Delete= async (req: Request, res: Response) => {
  try {
    const deletedOrder = await module.delete(req.params.id);
    res.json(deletedOrder);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
};
export const update = async (req: Request, res: Response,next:NextFunction) => {
  const orderData: Order = {
    id: parseInt(req.params.id),
    user_id: req.body.user_id,
    status: req.body.status,
  };
  try {
    const updatedOrder = await module.update(orderData);
    res.json(updatedOrder);

  } catch (err) {
    next(err);
  }
};

