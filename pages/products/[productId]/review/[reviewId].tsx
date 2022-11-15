import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function SingleReview() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h1>
        <Link href={"/"}>Go Home</Link>
      </h1>
      Review {reviewId} From product {productId}
    </div>
  );
}

export default SingleReview;
