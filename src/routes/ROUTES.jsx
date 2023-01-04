import CartProducts from "../pages/cartProducts/CartProducts";
import Home from "../pages/home/Home";

export const RoutePathes = Object.freeze({
  Home: "/",
  Shop: "/shop",
  Pages: "/pages",
  Blog: "/blog",
  About: "/about",
  Contact: "/contact",
});

const ROUTES = [
  {
    id: "home",
    name: "Home",
    path: RoutePathes.Home,
    Element: <Home />,
    isHidden: false,
  },
  {
    id: "shop",
    name: "Shop",
    path: RoutePathes.Shop,
    Element: <CartProducts />,
    isHidden: false,
  },
  {
    id: "pages",
    name: "Pages",
    path: RoutePathes.Pages,
    Element: <></>,
    isHidden: false,
  },
  {
    id: "blog",
    name: "Blog",
    path: RoutePathes.Blog,
    Element: <></>,
    isHidden: false,
  },
  {
    id: "about",
    name: "About",
    path: RoutePathes.About,
    Element: <></>,
    isHidden: false,
  },
  {
    id: "contact",
    name: "Contact",
    path: RoutePathes.Contact,
    Element: <></>,
    isHidden: false,
  },
];

export default ROUTES;
