"use client";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { getProductDetails } from "@/lib/actions/actions";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  const getUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/`);
      const data = await res.json();
      setSignedInUser(data);

      console.log("Data: ", data);

      const userWishList = data.wishlist;

      const wishlistProducts = await Promise.all(
        userWishList.map(async (productId) => {
          const res = await getProductDetails(productId);
          return res;
        })
      );
      setWishlist(wishlistProducts);

      setLoading(false);
    } catch (err) {
      console.log("[users_GET", err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser);
  };

  //return loading ? <Loader /> : (
  return (
    <div className="px-10 py-5 h-full w-full">
      {/* <span>signedInUser :{JSON.stringify(signedInUser)}</span>
      <p>===========</p> */}
      {/* <span>USER Context: {JSON.stringify(?.clerkId)}</span> */}
      <p className="text-heading3-bold my-10">Your Wishlist</p>
      {wishlist.length === 0 && <p>No items in your wishlist</p>}

      <div className="flex flex-wrap justify-center gap-16">
        {wishlist.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            updateSignedInUser={updateSignedInUser}
          />
        ))}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Wishlist;
