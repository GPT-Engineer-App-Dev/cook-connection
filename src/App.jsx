import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SubmitRecipe from "./pages/SubmitRecipe.jsx"; // Import the new SubmitRecipe page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/submit" element={<SubmitRecipe />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
