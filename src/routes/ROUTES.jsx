import Home from "../pages/home/Home";

const ROUTES = [
  {
    id: "home",
    name: "Home",
    path: "/",
    Element: <Home />,
    isHidden: false,
  },
  {
    id: "shop",
    name: "Shop",
    path: "/shop",
    Element: <></>,
    isHidden: false,
  },
  {
    id: "pages",
    name: "Pages",
    path: "/pages",
    Element: <></>,
    isHidden: false,
  },
  {
    id: "blog",
    name: "Blog",
    path: "/blog",
    Element: <></>,
    isHidden: false,
  },
  {
    id: "about",
    name: "About",
    path: "/about",
    Element: <></>,
    isHidden: false,
  },
  {
    id: "contact",
    name: "Contact",
    path: "/contact",
    Element: <></>,
    isHidden: false,
  },
];

export default ROUTES;
