import './ExploreMenu.css'
import PropTypes from 'prop-types';
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
      <h2>Explore All Books Here</h2>

      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return( <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index}className='explore-menu-list-item'>
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="menu-image" />
            <p>{item.menu_name}</p>

          </div>)
        })}
      </div>
      <hr />
    </div>
  )
}
// Define PropTypes for validation
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired, // Adjust type as necessary
};


export default ExploreMenu
