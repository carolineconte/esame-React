import { useContext } from "react";
import AppContext from "../context/AppContext";


export const Cart = ({ data }) => {


    const formatPrice = (value) => {
        return value.toLocaleString('IT', { style: 'currency', currency: 'EUR' });
    };

    const { cartItems, isCartVisible } = useContext(AppContext)

    const total = cartItems.reduce((acc, item) => {
        return item.price + acc;
    }, 0)

    return (

        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            {cartItems.map(item => (
                <>
                    <section className="cart-item">
                        <img src={item.thumbnail} />
                        <div className="cart-item-cont">
                            <h3 className="cart-title">{item.title}</h3>
                            <h3>{formatPrice(item.price)}</h3>
                        </div>
                    </section>
                </>
            ))}
            <p className="price">total = {formatPrice(total)}</p>
        </section>
    )
}
