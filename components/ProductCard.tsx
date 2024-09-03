"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2 hover:bg-blue-200"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={450}
        height={600}
        className="h-[250px] rounded-lg object-cover "
      />
      <div>
        <p className="text-base-bold hover:text-red-1 ">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">${product.price}</p>
        <HeartFavorite product={product} updateSignedInUser={updateSignedInUser}  />
      </div>
    </Link>
  );
};

export default ProductCard;
