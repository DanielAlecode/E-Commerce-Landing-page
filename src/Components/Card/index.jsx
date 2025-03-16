import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
    const {
        openProductDetail,
        setProductToShow,
        closeCheckOutSideMenu,
        cartProducts,
        setCartProducts,
        setCount,
        counter,
        openCheckOutSideMenu,
        closeProductDetail,
    } = useContext(ShoppingCartContext);

    const showProduct = () => {
        openProductDetail();
        setProductToShow(data);
        closeCheckOutSideMenu();
    };

    const addProductsToCart = (e) => {
        e.stopPropagation();
        if (!cartProducts.some(product => product.id === data.id)) {
            setCartProducts([...cartProducts, data]);
            setCount(counter + 1);
            openCheckOutSideMenu();
            closeProductDetail();
        }
    };

    const renderIcon = () => {
        const isInCart = cartProducts.some(product => product.id === data.id);
        return (
            <button 
                className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 bg-white/60 rounded-full m-2 p-1 cursor-pointer"
                onClick={addProductsToCart}
            >
                {isInCart ? (
                    <CheckCircleIcon className="h-4 w-4 text-black" />
                ) : (
                    <PlusIcon className="h-4 w-4 text-black" />
                )}
            </button>
        );
    };

    return (
        <div 
            className="w-56 h-60 bg-white shadow-md rounded-lg cursor-pointer transition-transform hover:scale-105" 
            onClick={showProduct}
        >
            <figure className="relative w-full h-4/5 mb-2">
                <span className="absolute bottom-0 left-0 bg-white/60 text-black text-xs rounded-lg px-3 py-0.5 m-2">
                    {data.category.name}
                </span>
                <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt={data.title} />
                {renderIcon()}
            </figure>
            <p className="flex justify-between px-3 text-gray-700">
                <span className="text-sm font-light truncate">{data.title}</span>
                <span className="text-lg font-bold">${data.price}</span>
            </p>
        </div>
    );
};

export default Card;
