import React from "react";
import { BannerProvider } from "../../contexts/BannerContext";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import PriceCard from "../../components/PriceCard/PriceCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <BannerProvider>
      <div className="bg-white">
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Banner />
          </div>
          <div id="price-section">
            <PriceCard />
          </div>
          <div id="product-section">
            <ProductCard />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BannerProvider>
  );
}
