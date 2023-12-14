import './App.css';
import FilmCont from './components/FilmCont';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import ListFilm from './components/ListFilm';
import Navbar from './components/Navbar';
import PopularList from './components/PopularList';
import Tabs from './components/Tabs';
import TabsTest from './components/TabsTest';
import TopRatedList from './components/TopRatedList';
import TrendingList from './components/TrendingList';

function App() {
  
  return (
    <div className='bg-black'>
      <HeroSlider />
      <div className='relative bottom-[700px]'><Navbar /></div>
      <ListFilm />
      <TrendingList />
      <PopularList />
      <TopRatedList />
      <Footer />
    </div>

    
    
  );
}

export default App;
