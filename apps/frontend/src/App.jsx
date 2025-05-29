import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-[Poppins] bg-[#1E1E1E] text-white">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};


export default App;
