import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Welcome,
  Exchange,
  Services,
  Footer,
  Market,
  News,
  CryptoDetails,
} from "./components/index";
import NewsCard from "./widgets/NewsCard";
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="exchange" element={<Exchange />} />
          <Route path="market" element={<Market />} />
          <Route path="news" element={<News />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
