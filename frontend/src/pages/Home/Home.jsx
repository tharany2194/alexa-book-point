import PropTypes from 'prop-types';
import { useState ,useEffect } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import { useLocation } from 'react-router-dom';
import BooksDisplay from '../../components/BooksDisplay/BooksDisplay'

const Home = ({setShowLogin}) => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#book-display") {
      const section = document.getElementById("book-display");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  const [category,setCategory] = useState("All")
  return (
    <div className='home'>
        <Header setShowLogin={setShowLogin}/>
        <ExploreMenu  category={category} setCategory={setCategory}/>
        <section id="books-section">
        <BooksDisplay  category={category}/>
        </section>
      
    </div>
  )
}
Home.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // or PropTypes.func if it's optional
};

export default Home
