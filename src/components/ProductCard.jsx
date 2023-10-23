import { Link } from "react-router-dom"
import AppContext from "../context/AppContext";
import { useContext } from "react";


export const ProductCard = ({ product }) => {
    const { id, title, category, images, price, discountPercentage, brand } = product

    const formatPrice = (value) => {
        return value.toLocaleString('IT', { style: 'currency', currency: 'EUR' });
    };

    const { cartItems, setCartItems } = useContext(AppContext)
    function buyItem() {
        setCartItems([...cartItems, product])
    }


    return (

        <section>
            <Link className="product-card" to={`/product/${id}`}>
                <img src={images[0]} alt="" />
                <div className="product-card-info">
                    <h2 className="product-card_name" >{title}</h2>
                    <p className="product-card_price">{formatPrice(price)}</p>
                </div>
            </Link>
            <Link to={'/cart'}><button onClick={buyItem} className="btn">Add Cart</button></Link>
        </section>

    )
}
