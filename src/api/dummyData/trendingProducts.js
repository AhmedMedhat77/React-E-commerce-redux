import iphone from "../../assets/iphone.jpg";
import float from "../../assets/floatdesign.jpg";
import floatIhpone from "../../assets/floatIpone.jpg";

const productsApi = function () {
  return {
    get_products: function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: "1",
              name: "Floating 2021 iPhone 12 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "111.0",
              img: floatIhpone,
            },
            {
              id: "2",
              name: "Floating 2021 iPhone 12 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "80.0",
              img: float,
            },
            {
              id: "3",
              name: "Floating 2021 iPhone 12 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "80.0",
              img: floatIhpone,
            },
            {
              id: "4",
              name: "Floating 2021 iPhone 12 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "100.0",
              img: float,
            },
            {
              id: "5",
              name: "Floating 2021 iPhone 12 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "100.0",
              img: floatIhpone,
            },
            {
              id: "6",
              name: "Floating 2021 iPhone 12 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "100.0",
              img: float,
            },
            {
              id: "7",
              name: "Floating 2021 iPhone 12 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "100.0",
              img: iphone,
            },
            {
              id: "8",
              name: "Floating 2021 iPhone 12 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "111.00",
              img: float,
            },
          ]);
        }, 1000);
      });
    },
  };
};
export default productsApi;
