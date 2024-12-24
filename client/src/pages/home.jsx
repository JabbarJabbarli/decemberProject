import React from "react";
import Header from "../components/Header";
import { links } from "../data/header";
import HomeHero from "../components/HeroHome";
import { info } from "../data/info";
import InfoHome from "../components/InfoHome";
import HomeShop from "../components/ShopHome";
import { shop } from "../data/shop";
import BrowseHome from "../components/BrowseHome";
import ShopHomeSecond from "../components/ShopHome2";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";
import { footerData, footerLinks, footerPayment } from "../data/footer";

const HomePage = () => {
  return (
    <div>
      <Header links={links} />
      <HomeHero />
      <InfoHome info={info} />
      <HomeShop shop={shop} />
      <BrowseHome />
      <ShopHomeSecond shop={shop} />
      <NewsLetter />
      <Footer
        footerData={footerData}
        footerPayment={footerPayment}
        footerLinks={footerLinks}
      />
    </div>
  );
};

export default HomePage;
