import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { ProductCard } from "../components/ProductCard";



export const Search = () => {

  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([])
  const query = searchParams.get('q')

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setProducts(data.products)
  }

  useEffect(() => {
    const searchWithQueryURL = `${"https://dummyjson.com/products"}/search?q=${query}`

    getSearchedMovies(searchWithQueryURL);
  }, [query])



  return (
    <div className="search-page">
      <h2 className="title">Resuldados para: <span className="query-text">{query}</span></h2>
      <div className="products">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
     
    </div>
  )

}