import PropTypes from 'prop-types';
import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import BooksDisplay from '../../components/BooksDisplay/BooksDisplay'

const Home = ({setShowLogin}) => {

  const [category,setCategory] = useState("All")
  return (
    <div className='home'>
        <Header setShowLogin={setShowLogin}/>
        <ExploreMenu  category={category} setCategory={setCategory}/>
        <BooksDisplay  category={category}/>
      
    </div>
  )
}
Home.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // or PropTypes.func if it's optional
};

export default Home
