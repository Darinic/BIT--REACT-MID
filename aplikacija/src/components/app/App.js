import './App.css';
import Nav from "../nav/Nav";
import Header from '../header/Header';
import Main from '../main/Main';
// import Posts from '../posts/Posts';
import Footer from '../footer/Footer';
import MainCat from '../mainCat/MainCat';

const App = ()=>{
  return(
    <>
    <Nav/>
    <Header/>
    {/* <Posts/> */}
    <Main/>
    <MainCat/>
    <Footer/>
    </>
  );
}

export default App;
