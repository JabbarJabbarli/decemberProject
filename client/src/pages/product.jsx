import React from "react";
import Header from "../components/Header";
import { links } from "../data/header";
import ProductCard from "../components/ProductCard";
import { productCardImage, productCardInfo } from "../data/productCard";
import ProductShop from "../components/ShopProduct";
import { shop } from "../data/shop";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";
import { footerData, footerLinks, footerPayment } from "../data/footer";
import { Outlet } from "react-router-dom";
import OutletLinks from "../components/Outlet";
import { reviewsData } from "../data/reviews";
const ProductPage = () => {
  return (
    <div>
      <Header links={links} />
      <ProductCard
        productCardInfo={productCardInfo}
        productCardImage={productCardImage}
      />
      <div className="flex px-32 items-center py-20">
        <OutletLinks reviewsData={reviewsData} />
        <Outlet />
      </div>
      <ProductShop shop={shop} />
      <NewsLetter />
      <Footer
        footerData={footerData}
        footerLinks={footerLinks}
        footerPayment={footerPayment}
      />
    </div>
  );
};

export default ProductPage;
