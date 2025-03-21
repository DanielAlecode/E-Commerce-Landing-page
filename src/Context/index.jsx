import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  // Estado de productos
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState("");

  // Estado de carrito
  const [cartProducts, setCartProducts] = useState([]);
  const [counter, setCount] = useState(0);
  const [order, setOrder] = useState([]);

  // Estado de detalles de producto
  const [isProductDetailOpen, setProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(null);

  // Estado del checkout side menu
  const [isCheckOutSideMenuOpen, setCheckOutSideMenuOpen] = useState(false);

  // Fetch de productos
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  // Filtrado de productos
  useEffect(() => {
    if (searchByTitle) {
      const filtered = items.filter(item =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [items, searchByTitle]);

  // Funciones utilitarias
  const openProductDetail = () => setProductDetailOpen(true);
  const closeProductDetail = () => setProductDetailOpen(false);

  const openCheckOutSideMenu = () => setCheckOutSideMenuOpen(true);
  const closeCheckOutSideMenu = () => setCheckOutSideMenuOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        // Productos
        items,
        filteredItems,
        searchByTitle,
        setSearchByTitle,

        // Carrito
        cartProducts,
        setCartProducts,
        counter,
        setCount,
        order,
        setOrder,

        // Detalles del producto
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,

        // Side menu
        isCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
