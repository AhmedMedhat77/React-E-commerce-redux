import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Search from "../../components/search/Search";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import MainBtn from "../../components/button/MainBtn";
import { useDispatch, useSelector } from "react-redux";
import { RoutePathes } from "../../routes/ROUTES";
import { productAction } from "../../redux/Slice/productSlice";

const Navbar = (props) => {
  const [mobile, setMobile] = useState(false);
  const cartCount = useSelector((s) => s.product.cart.count);
  const location = useLocation();
  console.log("location:", location);
  const dispatch = useDispatch();

  const onSearch = (e) => {
    const { value } = e.target;
    switch (location.pathname) {
      case RoutePathes.Home:
        dispatch(productAction.filterProducts({ name: value, price: value }));

        return;
      case RoutePathes.Shop: {
        dispatch(productAction.filterProducts({ name: value, price: value }));
        return;
      }
      default:
        return;
    }
  };

  const navbarLinks = React.useMemo(() => {
    return (
      <ul
        className={mobile ? "navbar__center__mobile" : "navbar__center__menu"}
      >
        {props.routes.map((route) => {
          return (
            <li className="navbar__center__menu__item" key={route.id}>
              <Link
                to={route.path}
                className="navbar__center__menu__item__link"
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }, [mobile, props.routes]);

  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__toggler">
            <button className="icon icon--l" onClick={() => setMobile(!mobile)}>
              {mobile ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
          <div className="navbar__left">
            <div
              className="navbar__left__logo"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logo} alt="Gosto" />
            </div>
          </div>
          <div className="navbar__center">{navbarLinks}</div>
          <div className="navbar__right">
            <div className="navbar__right__actions">
              <Search
                placeHolder="search products..."
                btnType="search"
                onChange={onSearch}
              />
              <div className="navbar__right__actions-user">
                <button className="icon icon--l">
                  <AiOutlineUser />
                </button>
                <button className="icon icon--l">
                  <AiOutlineHeart />
                </button>
              </div>
              <Link to="/shop">
                <MainBtn
                  name="MY CART"
                  type="btn--primary"
                  onClick={() => {
                    navigate("/shop");
                  }}
                  size="btn--l"
                  count={cartCount}
                  isRounded="btn--rounded-m"
                >
                  <HiShoppingBag />
                </MainBtn>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
