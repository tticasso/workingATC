
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Brands from './components/Brands';
import Copyright from './components/Copyright';
import FooterEnd from './components/FooterEnd';
import ResponsiveNavbar from './components/ResponsiveNavbar';

function App() {
  return (
    <>
      <div className='relative bg-white'>
        <Slider />
        <div className='w-full absolute top-0 left-0'>
          <Navbar />
        </div>

      </div>
      <div className='relative top-[-75px] contentCss'>
        <Content />
      </div>

      <Brands />
      <div className='w-full bg-[#222222]'>
        <div className="w-full h-[1px] bg-gray-500 mt-4"></div>
        <FooterEnd />
      </div>
      <Copyright />


    </>
  );
}

export default App;
