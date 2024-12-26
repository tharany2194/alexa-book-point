import './BooksItem.css'
import propTypes from 'prop-types'
import cartImg from '../../assets/add-cart_.png'
import { useContext } from 'react'
import addIcon from '../../assets/add_icon_green.png'
import removeIcon from '../../assets/remove_icon_red.png'
import { StoreContext } from '../context/StoreContext'
const BooksItem = ({id,name,image,price}) => {
   
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='book-item' id='book-display'>
        <div className="book-item-image-container">
            <img src={image} alt="" className="book-item-image" />
        </div>
        <div className="book-item-name">
            <p><b>{name}</b></p>
        </div>
        <div className="book-item-price">
            <p><b>Price:${price}</b></p>
        </div>
        <hr />
        {!cartItems[id]
        ?<button onClick={()=>addToCart(id)}>
        <img src={cartImg} alt="" className="book-item-button-img" />
        <h3 className='book-item-button-text'>Add to cart</h3>
        </button>
        :<div className='book-item-counter-container'>
            <div className="book-item-counter">
            <img onClick={()=>addToCart(id)}src={addIcon} alt="add-icon" className='icons' />
            <p>{cartItems[id]}</p>
            <img onClick={()=>removeFromCart(id)}src={removeIcon} alt="remove-icon" className='icons' />
        </div>
        </div>}


        
      
    </div>
  )
}

BooksItem.propTypes ={
    id:propTypes.string.isRequired,
    name:propTypes.string.isRequired,
    price:propTypes.number.isRequired,
    description:propTypes.string.isRequired,
    image:propTypes.string.isRequired,
};

export default BooksItem
