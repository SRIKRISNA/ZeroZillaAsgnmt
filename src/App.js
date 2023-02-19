// import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Newsletter from './components/Newsletter';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Testimonials/>
      <FAQs/>
      <Blogs/>
      <Newsletter/>
    </div>
  );
}

export default App;
