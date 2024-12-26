import { useContext } from 'react'
import './BooksDisplay.css'
import { StoreContext } from '../context/StoreContext'
import BooksItem from '../BooksItem/BooksItem'
import PropTypes from 'prop-types';

const BooksDisplay = ({category}) => {

    const {books_list} = useContext(StoreContext)
  return (
    <div className='books-display' id='books-display'>
     <h2>Best Picks For you</h2>
     <div className="book-display-list">
        {books_list.map((item,index)=>{
          if(category=== "All" || category===item.category){
            return <BooksItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
            
        })}
     </div>
    </div>
  )
}

BooksDisplay.propTypes = {
  category: PropTypes.string.isRequired, // category must be a string and is required
 // books must be an array of objects with id and title
};

export default BooksDisplay
