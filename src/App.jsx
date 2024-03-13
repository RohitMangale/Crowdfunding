
import './App.css'
import Banner from './components/banner/Banner'
import Counters from './components/counters/Counters'
import Footer from './components/footer/Footer'
import Header from './components/home-header/Header'
import HomeAbout from './components/homeAbout/HomeAbout'
import HomeFaq from './components/homeFaq/HomeFaq'
import Navbar from './components/nav/Navbar'
import HomeSlider from './components/slider/HomeSlider'
// import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="app">
    <Navbar/>
    <Header/>
    <HomeAbout/>
    <HomeSlider/>
    <Banner/>
    <HomeFaq/>
    <Footer/>
    </div>
  )
}

export default App


