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
              rate: 3.0,
            },
            {
              id: "2",
              name: "Floating 2021 iPhone 13 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "80.0",
              img: float,
              rate: 4.0,
            },
            {
              id: "3",
              name: "Floating 2021 iPhone 12 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "80.0",
              img: floatIhpone,
              rate: 5.0,
            },
            {
              id: "4",
              name: "Floating 2021 iPhone 14 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "100.0",
              img: float,
              rate: 2.3,
            },
            {
              id: "5",
              name: "Floating 2021 iPhone 15 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "100.0",
              img: floatIhpone,
            },
            {
              id: "6",
              name: "Floating 2021 iPhone 16 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "100.0",
              img: float,
            },
            {
              id: "7",
              name: "Floating 2021 iPhone 17 Mockups (PSD)",
              author: "by Blueskytechco in Mockups",
              price: "100.0",
              img: iphone,
            },
            {
              id: "8",
              name: "Floating 2021 iPhone 18  Mockups (PSD)",
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
