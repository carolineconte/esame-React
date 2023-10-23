import { Link } from "react-router-dom"


export const ProductCard = ({ product, buyItem }) => {
    const { id, title, category, images, price, discountPercentage, brand } = product

    const formatPrice = (value) => {
        return value.toLocaleString();
    };



    return (

        <section>
            <Link className="product-card" to={`/product/${id}`}>
                <img src={images[0]} alt="" />
                <div className="product-card-info">
                    <h2 className="product-card_name" >{title}</h2>
                    <p className="product-card_price">{formatPrice(price)}</p>
                </div>
            </Link>
            <button onClick={buyItem} className="btn">Add Cart</button>
        </section>

    )
}
