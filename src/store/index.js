import { atom } from "jotai";

import { ProductsList } from "@/assets/products/Products";

export const productsAtom = atom(ProductsList);
export const displayFullSizeImage = atom(false);
export const productFullSize = atom(null);
