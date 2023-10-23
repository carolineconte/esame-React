//Hooks
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";

export const Products = () => {

    //API
    const [data, setData] = useState([])
    useEffect(() => {
        async function get() {
            const res = await fetch('https://dummyjson.com/products');
            const Listres = await res.json();

            setData(Listres.products);
        }
        get();
  
          
    }, [])

    //Cart
    const [cart, setCart] = useState([])

    function buyItem(item) {
       let temp = [...cart]
       temp.push(item)
       setCart(temp)
    }



    return (
        <div className="products">
            {data.map(product =>  <ProductCard key={product.id} product={product} buyItem={buyItem} />
            )
        }
        </div>
    )
}
