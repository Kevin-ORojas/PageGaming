import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blueClaro min-h-screen h-full">
      <Router>
          <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
