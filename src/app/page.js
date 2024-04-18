"use client";
import React, { useState, useEffect } from "react";
import allProducts from "../Component/allProducts.json";
import ProductCard from "../Component/ProductCard";
import dynamic from "next/dynamic";
import Footer from "../Component/footer/Footer.js";
import Image from "next/image";
import leftArrow from ".././assets/icons/left-arrow-logo.png";
import rightArrow from ".././assets/icons/right-arrow-logo.png";
import Filterbar from "../Component/Filterbar/Filterbar";
import DesktopNavbar from "../Component/DesktopNavbar/DesktopNavbar";
import Hero from "../Component/Hero/Hero";
import FilterDropdown from "../Component/FilterDropdown";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [products, setProducts] = useState([]);


// I have shown the implementation fakestoreAPI. But I am using mine
//  own json as the picture in fakestore api are not looking good but I have show the imlementaion and data is also showing properly


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <DesktopNavbar />
      <Hero />
      <Filterbar
        toggleDropdown={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
      />

      <div className="product-list-page">
        <div
          className="filters"
          style={{ display: isDropdownOpen ? "block" : "none" }}
        >
          {isDropdownOpen && (
            <>
              <FilterDropdown
                title="IDEAL FOR"
                availableFilters={["Men", "Women", "Baby & Kids"]}
              />
              <FilterDropdown
                title="OCCASION"
                availableFilters={["Marriage", "Birthday", "Holi"]}
              />
              <FilterDropdown
                title="WORK"
                availableFilters={["OFFICE", "OUTING", "MEETING"]}
              />
              <FilterDropdown
                title="FABRIC"
                availableFilters={["Velvet", "Cotton", "Chiffon"]}
              />
              <FilterDropdown
                title="SEGMENT"
                availableFilters={[
                  "Luxury Fashion",
                  "Fast Fashion",
                  "Ready-to-wear",
                ]}
              />
              <FilterDropdown
                title="SUITABLE FOR"
                availableFilters={["OFFICE", "HOME", "DATES"]}
              />
              <FilterDropdown
                title="RAW MATERIAL"
                availableFilters={["Cotton", "Wool", "Silk"]}
              />
              <FilterDropdown
                title="PATTERN"
                availableFilters={["Stripes", "Floral", "Batik"]}
              />
            </>
          )}
        </div>
        <div
          className={`product-cards ${
            isDropdownOpen ? "three-in-row" : "four-in-row"
          }`}
        >
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
