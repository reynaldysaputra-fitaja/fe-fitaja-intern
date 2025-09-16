import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HighlightSection from "./components/HighlightSection";
import ReviewForm from "./components/ReviewForm";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <HeroSection />
      <HighlightSection />
      <ReviewForm />
      <Footer />
    </>
  );
}

export default App;
