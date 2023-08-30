// custom datatype definitions here
export type ProductType = {
    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
    ProductSalePrice:number; 
    productStock: number;
  };
  // Generated by https://quicktype.io

export interface UserType {
  localId:      string;
  email:        string;
  displayName:  string;
  idToken:      string;
  registered:   boolean;
  refreshToken: string;
  expiresIn:    string;
}
