import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../layouts/navbar/Navbar";
import ROUTES from "../routes/ROUTES";
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
      </Router>
    </div>
  );
}

export default App;
