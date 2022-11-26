import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function SingleProduct() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      Product {productId}
      <ul>
        <li>
          <Link href={`/products/${productId}/review/1`}>review 1</Link>
        </li>
        <li>
          <Link href={`/products/${productId}/review/2`}>review 2</Link>
        </li>
        <li>
          <Link href={`/products/${productId}/review/3`}>review 3</Link>
        </li>
      </ul>
    </div>
  );
}
export default SingleProduct;
