import { createContext ,useEffect,useState} from "react"
import PropTypes from 'prop-types';
import { books_list } from "../../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{
 const [cartItems, setCartItems] = useState({});
 const url ="http://localhost:4000"
 const [token,setToken] = useState("")

 const addToCart = (itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
 }


 const removeFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }

 useEffect (()=>{
  console.log(cartItems)
 },[cartItems])

const getTotalCartAmount =()=>{
    let totalAmount = 0;
    for (const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo =books_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price * cartItems[item]
        }
    }
    return totalAmount;
}
   
    const contextValue= {
       books_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount,
       url,
       token,
       setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

//Add PropTypes validation for children
StoreContextProvider.propTypes ={
    children:PropTypes.node.isRequired,//validate the 'children ' prop
};

export default StoreContextProvider;