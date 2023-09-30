import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./pages/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Router>
          <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
