import express, { NextFunction, Request, Response } from "express";
import { Ordproducts, Model_OF_Ordproducts } from "../models/ordproductsModel";

const module = new Model_OF_Ordproducts();

export const create = async (req: Request, _res: Response) => {
    const Data: Ordproducts= {
        quantity: req.body.quantity,
        order_id: req.body.order_id,
        product_id: req.body.product_id,
    };
    try {
      const newOP = await module.create(Data);
      _res.json(newOP);
    } catch (err) {
      console.log(err);
      _res.status(400);
      _res.json(err);
    }
  };


export const index = async (req: Request, res: Response,next :NextFunction) => {
  try {
    const data = await module.index();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const orderinproduct = async (_req: Request, res: Response,next:NextFunction) => {
  try{
  const users = await module.orderinproduct();
  res.json(users);
  }catch (err) {
        next(err);
         }

};


export const Delete= async (req: Request, res: Response) => {
  
  try {
    const deletedData = await module.delete(req.body.order_id,req.body.product_id);
    res.json(deletedData);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
};
export const update = async (req: Request, res: Response,next:NextFunction) => {
    const Data: Ordproducts= {
        quantity: req.body.quantity,
        order_id: req.body.order_id,
        product_id: req.body.product_id,
        id:parseInt(req.params.id as unknown as string)
    };
  try {
    const updatedDate = await module.update(Data);
    res.json(updatedDate);

  } catch (err) {
    next(err);
  }
};

