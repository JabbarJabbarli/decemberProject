import React from "react";
import { links } from "../data/header";
import Category from "../components/CategoryListing";
import { categoryFilter } from "../data/listingCategory";
import Header from "../components/Header";
import ProductsListing from "../components/ProductsListing";
import { listingProducts } from "../data/listingProducts";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";
import { footerData, footerLinks, footerPayment } from "../data/footer";
const ListingPage = () => {
  return (
    <div>
      <Header links={links} />
      <div className="flex py-20 ">
        <Category categoryFilter={categoryFilter} />
        <ProductsListing listingProducts={listingProducts} />
      </div>
      <NewsLetter />
      <Footer
        footerData={footerData}
        footerPayment={footerPayment}
        footerLinks={footerLinks}
      />
    </div>
  );
};

export default ListingPage;
