import React from "react";
import Banner from "./Banner";
import ProductLists from "./ProductLists";
import SellerLists from "./SellerLists";

function MainContent() {
  return (
    <div className="flex-1 flex flex-col gap-8 overflow-x-hidden">
      <Banner />
      <ProductLists />
      <SellerLists />
    </div>
  );
}

export default MainContent;
