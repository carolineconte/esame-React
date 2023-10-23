//Hooks
import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Link, Outlet } from "react-router-dom";
import AppContext from "../context/AppContext";
import { Cart } from "./Cart";

export const Products = () => {

    const { products, setProducts } = useContext(AppContext)

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



    return (
        <>
        <div className="products">
            {data.map(product => <ProductCard key={product.id} product={product} />
            )
            }
        </div>
        <Outlet data={products} />
        </>
    )
}
