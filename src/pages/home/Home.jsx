import React from "react";
import Hero from "../../layouts/hero/Hero";
import categoryData from "../../api/dummyData/categoryData";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import Title from "../../layouts/title/Titile";
import deviderImg from "../../assets/devider.png";
import ProductCard from "../../components/productCard/ProductCard";
import Devider from "../../components/devider/Devider";
import MainBtn from "../../components/button/MainBtn";
import TestemonalCard from "../../components/testemonalCard/TestemonalCard";
import extrasApi from "../../api/dummyData/testemonals";
import productsApi from "../../api/dummyData/trendingProducts";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import { mergeOldState } from "../../helpers/merge";
import { useDispatch, useSelector } from "react-redux";
import { testmonialsAction } from "../../redux/Slice/testmonialsSlice";
import { productAction } from "../../redux/Slice/productSlice";

const Home = () => {
  const testmonial = useSelector((s) => s.testmonial);
  const product = useSelector((s) => s.product);

  const dispatch = useDispatch();
  const [homeState, set_homeState] = React.useState({
    reviews: [],
    is_reviews_loading: false,
  });

  React.useEffect(() => {
    extrasApi()
      .get_reviews()
      .then((r) => {
        //some logic here
        dispatch(testmonialsAction.set({ reviews: r }));
      });
  }, [dispatch]);

  React.useEffect(() => {
    productsApi()
      .get_products()
      .then((r) => {
        //some logic here
        dispatch(productAction.set({ data: r }));
      });
  }, [dispatch]);

  const addToCart = React.useCallback(
    (item) => {
      dispatch(productAction.addToCart(item));
    },
    [dispatch]
  );

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
        <Title
          title=" trending products"
          description="

Check the hottest designs of the week. These rising stars are worth your attention.
"
        />
        <div className="container mt-m">
          <div className="grid ">
            {product.data.map((item) => {
              return (
                <ProductCard {...item} onCartClick={addToCart} key={item.id} />
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
        <Title
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
        <section
          className="trending-products"
          style={{ borderBottom: "1px solid #343a40" }}
        >
          <Title
            title=" trending products"
            description="

Check the hottest designs of the week. These rising stars are worth your attention.
"
          />
          <div className="container mt-m">
            <div className="grid ">
              {product.data.map((item) => {
                return (
                  <ProductCard
                    {...item}
                    onCartClick={addToCart}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </section>
      <section className="testemonal">
        <div className="container">
          <div className="grid">
            {homeState.is_reviews_loading
              ? "loading..."
              : testmonial.reviews.map((item) => {
                  return (
                    <TestemonalCard
                      name={item.name}
                      text={item.text}
                      key={item.id}
                      job={item.job}
                    />
                  );
                })}
          </div>
        </div>
      </section>
      <section className="news-section">
        <NewsLetter
          type="btn--primary"
          name="Subscribe"
          top="OUR NEWSLETTER"
          title="Up To 20% Off Your First Order"
          description="Subscribe to the Gosto mailing list to receive updates on new arrivals
          & other discount information."
        />
      </section>
    </>
  );
};

export default Home;
