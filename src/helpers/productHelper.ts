import express, { NextFunction, Request, Response } from "express";
import { Product, Model_OF_Product } from "../models/productModel";

const module = new Model_OF_Product();

export const create = async (req: Request, _res: Response) => {
    const productdata: Product= {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    try {
      const newProduct = await module.create(productdata);
      _res.json(newProduct);
    } catch (err) {
      console.log(err);
      _res.status(400);
      _res.json(err);
    }
  };


export const displayAll = async (req: Request, res: Response,next :NextFunction) => {
  try {
    const products = await module.displayAllproducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const show = async (_req: Request, res: Response,next:NextFunction) => {
    try{
  const product = await module.showOneProduct(_req.params.id);
  console.log(product);
  res.json(product);
    }catch (err) {
        next(err);
      }
};

export const Delete= async (req: Request, res: Response) => {
  try {
    const deletedProduct = await module.delete(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
};
export const update = async (req: Request, res: Response,next:NextFunction) => {
  const productData: Product = {
    id: parseInt(req.params.id),
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,

  };
  try {
    const updatedUser = await module.update(productData);
    res.json(updatedUser);

  } catch (err) {
    next(err);
  }
};

