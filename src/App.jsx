import reactLogo from "./assets/images/react.svg";
import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Route path="/" component={HomePage} />
         </BrowserRouter>
      </div>
   );
}

export default App;
