import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "https://food-del-backend3.onrender.com"
  const [token , setToken] = useState("");
  const [food_list,setFoodList] = useState([])

  const addToCart = async (itemid) => {
    if (!cartItems[itemid]) {
      setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
    }
     else {
        setCartItems((prev) => ({ ...prev, [itemid]:prev[itemid]+1}));
    }
    // console.log("HII TESTING......   TOKEN :"+itemid)
    if(token){
      await axios.post(url+"/api/cart/add",{itemid} , {headers:{token}})
    }
  };

  const removeFromCart = async (itemid)=>{
    setCartItems((prev) => ({ ...prev, [itemid]:prev[itemid]-1}));
    // console.log("HII TESTING......   TOKEN :"+itemid)
    if(token){
      await axios.post(url+"/api/cart/remove",{itemid} , {headers:{token}})
    }
  }


  const getTotalCartAmount = ()=>{
    let totalAmount =0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo=food_list.find((product)=> product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
        
      }
    }
    return totalAmount;
  }
  //Fetching foodlist from datbase
  const fetchFoodList = async () =>{
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data)
  }

  const loadCartData = async (token) =>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData)
  }


 //to prevent logout when we reload the web page
  useEffect(()=>{
    
    //to load foodlist
    async function loadData(){
      await fetchFoodList()
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  },[])

  // useEffect(()=>{
  //   console.log(cartItems)

  // },[cartItems])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken

  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
