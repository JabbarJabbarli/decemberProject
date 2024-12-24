import React from "react";
import Header from "../components/Header";
import { links } from "../data/header";
import ProductCard from "../components/ProductCard";
import { productCardImage, productCardInfo } from "../data/productCard";
import Reviews from "../components/Reviews";
import { reviewsData } from "../data/reviews";
import ProductShop from "../components/ShopProduct";
import { shop } from "../data/shop";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";
import { footerData, footerLinks, footerPayment } from "../data/footer";

const ProductPage = () => {
  return (
    <div>
      <Header links={links} />
      <ProductCard
        productCardInfo={productCardInfo}
        productCardImage={productCardImage}
      />
      <Reviews reviewsData={reviewsData} />
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
