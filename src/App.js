import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./screens/components/Header";
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import Homepage from './screens/Homepage';
import BlogScreen from './screens/BlogScreen';
import WorkScreen from "./screens/WorkScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work" element={<WorkScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
