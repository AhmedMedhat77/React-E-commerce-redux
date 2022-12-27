import React from "react";
import Hero from "../../layouts/hero/Hero";
import categoryData from "../../api/dummyData/categoryData";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import Titile from "../../layouts/title/Titile";
import deviderImg from "../../assets/devider.png";
import TrendingProductsData from "../../api/dummyData/trendingProducts";
import ProductCard from "../../components/productCard/ProductCard";
import Devider from "../../components/devider/Devider";
import MainBtn from "../../components/button/MainBtn";
const Home = () => {
  return (
    <>
      <Hero />
      <section className="category">
        <div className="container">
          {categoryData.map((item) => {
            return (
              <CategoryCard
                key={item.id}
                img={item.img}
                name={item.name}
                itemsCount={item.itemsCount}
              />
            );
          })}
        </div>
      </section>
      <section className="trending-products">
        <Titile
          title=" trending products"
          description="

Check the hottest designs of the week. These rising stars are worth your attention.
"
        />
        <div className="container mt-m">
          <div className="grid ">
            {TrendingProductsData.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  author={item.author}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-devider">
        <div className="container">
          <Devider
            title="Simple iPhone
Mockups Design File PSD, Ai, EPS"
            description="Sale 30% Off For Members"
            img={deviderImg}
          />
        </div>
      </section>

      <section className="category-tabs">
        <Titile
          title=" trending products"
          description="

Check the hottest designs of the week. These rising stars are worth your attention.
"
        />
        <div className="container">
          <div className="category-tabs__btns">
            <MainBtn
              name="All Products"
              type="btn--secondary"
              size="btn--m"
              isRounded="btn--rounded-m"
            />
            <MainBtn
              name="Web Themes"
              type="btn--secondary"
              size="btn--m"
              isRounded="btn--rounded-m"
            />
            <MainBtn
              name="Mockups"
              type="btn--secondary"
              size="btn--m"
              isRounded="btn--rounded-m"
            />
            <MainBtn
              name="Icons"
              type="btn--secondary"
              size="btn--m"
              isRounded="btn--rounded-m"
            />
            <MainBtn
              name="Image Stocks"
              type="btn--secondary"
              size="btn--m"
              isRounded="btn--rounded-m"
            />
          </div>
        </div>
        <section className="trending-products">
          <Titile
            title=" trending products"
            description="

Check the hottest designs of the week. These rising stars are worth your attention.
"
          />
          <div className="container mt-m">
            <div className="grid ">
              {TrendingProductsData.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    author={item.author}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
