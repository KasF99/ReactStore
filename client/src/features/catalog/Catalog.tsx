import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";


export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/product')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    // function addProducts() {
    //     setProducts(prevState => [...prevState,
    //     {
    //         id: prevState.length + 101,
    //         name: 'product' + (prevState.length + 1),
    //         price: (prevState.length * 100) + 100,
    //         brand: 'some brand',
    //         description: 'some desc',
    //         pictureUrl: 'http://picsum.photos/200'
    //     }])
    // }

    return (
        <>
            <ProductList products={products} />
        </>
    )
}

