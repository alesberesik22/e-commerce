export interface IProductsAttributes {
  createdAt: string;
  description: string;
  new_season: boolean;
  image: Iimage;
  image2: Iimage;
  price: number;
  publishedAt: string;
  title: string;
  type: string;
  updatedAt: string;
}
export interface IProduct {
  id: number;
  attributes: IProductsAttributes;
}

export interface Iimage {
  data: {
    attributes: {
      url: string;
    };
  };
}

export type IProducts = IProduct[];
