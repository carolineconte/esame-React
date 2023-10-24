import { useContext } from "react";
import AppContext from "../context/AppContext";
import { BsCartDashFill } from 'react-icons/bs';


export const Cart = ({ data }) => {

    

    const formatPrice = (value) => {
        return value.toLocaleString('IT', { style: 'currency', currency: 'EUR' });
    };

    const { cartItems,setCartItems, isCartVisible } = useContext(AppContext)

    const total = cartItems.reduce((acc, item) => {
        return item.price + acc;
    }, 0)

    const handleRemoveItem = (e) => {
        const updatedItems = cartItems.filter((item) => item.id !== e);
     
        setCartItems(updatedItems);
    }

    return (
        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            {cartItems.map(item => (
                <>
                    <section key={item.id} className="cart-item">
                        <img src={item.thumbnail} />
                        <div className="cart-item-cont">

                            <h3 className="cart-title">{item.title}</h3>

                            {item.quantity > 1 && (<p>Unit. Price: {formatPrice(item.price)}</p>)}
                            <h3>{(formatPrice(item.price * item.quantity))}</h3>
                            <p className='qnt'>{item.quantity}</p>
                            <button type="button" 
                            className="button__remove-item" onClick={() => handleRemoveItem(item.id)}>
                                <BsCartDashFill /></button>
                        </div>
                    </section>
                </>
            ))}
            <p className="totalPrice">Total = {formatPrice(total)}</p>
        </section>
    )
}