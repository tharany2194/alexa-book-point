import './UsedBooks.css'
import {used_books} from '../../assets/assets'
import BooksItem from '../../components/BooksItem/BooksItem'

const UsedBooks = () => {
  return (
    <div className='usedbooks'>
      <div>
        <h3>Used Books for Sale!</h3>
        <p>We have collection of great used books for sale.Enjoy thier remarkable present to your soul</p>
        <div className="book-display-list">
        {used_books.map((item,index)=>{
          
            return <BooksItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          
            
        })}
     </div>
        
      </div>

      
    </div>
  )
}

export default UsedBooks
