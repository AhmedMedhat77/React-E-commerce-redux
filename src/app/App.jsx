import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../layouts/footer/Footer";
import Navbar from "../layouts/navbar/Navbar";
import ROUTES from "../routes/ROUTES";
import Payment from "../assets/payment.png";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar routes={ROUTES} />
        <Routes>
          {ROUTES.map((route) => {
            return (
              <Route path={route.path} key={route.id} element={route.Element} />
            );
          })}
        </Routes>
        <Footer
          text="Copyright © GOSTO all rights reserved. Powered by Blueskytechco."
          img={Payment}
        />
      </Router>
    </div>
  );
}

export default App;
