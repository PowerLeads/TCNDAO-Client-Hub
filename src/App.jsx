import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Payment from "./components/Payment";
import PayWays from "./components/PayWays";
import Forums from "./components/Forums";

function App() {

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/register" Component={Register} />
      <Route path="/forums" Component={Forums} />
      <Route path="/payment" Component={Payment} />
      <Route path="/payment/method" Component={PayWays} />
    </Routes>
  );
}

export default App;
