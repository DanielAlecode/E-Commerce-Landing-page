import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    //Cart items counter 
    const [counter, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    //My order 
    const [ order, setOrder ] = useState([]);
    //Product Details 
    const [isProductDetailOpen, setProductDetailOpen] = useState(false);
    const openProductDetail = () => setProductDetailOpen(true);
    const closeProductDetail = () => setProductDetailOpen(false);
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });
    //Check out side menu items
    const [isCheckOutSideMenuOpen, setCheckOutSideMenu] = useState(false);
    const openCheckOutSideMenu = () => setCheckOutSideMenu(true);
    const closeCheckOutSideMenu = () => setCheckOutSideMenu(false);
    return (
        <ShoppingCartContext.Provider
            value={{
                counter, setCount, openProductDetail, closeProductDetail,
                isProductDetailOpen, productToShow, setProductToShow, cartProducts, setCartProducts,
                isCheckOutSideMenuOpen, setCheckOutSideMenu, openCheckOutSideMenu, closeCheckOutSideMenu, 
                setOrder, order
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {
    ShoppingCartContext,
    ShoppingCartProvider
}