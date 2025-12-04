import { Dispatch, SetStateAction } from "react";

export interface IProductStocks {
  stockLabel?: string;
  stockValue?: number;
}

export interface IProductDiscount {
  discountLabel?: string;
  discountValue?: number;
}

export interface IProductListingDataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export interface IProductDetails {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  images: string;
  thumbnail: string;
}

export interface IProductJsonDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: { name: string; id: number };
  images: string[0];
}
export interface IProductFromJson {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export interface IAddProduct {
  addProduct: boolean;
  setAddProduct: Dispatch<SetStateAction<boolean>>;
  onFinish: (values: FieldType) => void | undefined;
}


export type FieldType = {
  thumbnail?: string;
  title?: string;
  price?: string;
  category?: string;
};


