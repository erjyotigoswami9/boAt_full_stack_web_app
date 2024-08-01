import React, { memo } from "react";
import "../../../styles/style.css";

export const ImageBigDiv1 = memo(({imgSrc}) => {
  return (
    <>
      {/* <div className="img1">
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Product_Highlights_WEB_f2a39c9e-025a-4636-b54a-c60b6619ac7a.jpg?v=1721457723" alt="img"/>
        </div> */}
      <div className="img1">
        <img
          src={imgSrc}
          alt="img"
        />
      </div>
    </>
  );
});
