import React, { useState, useEffect } from 'react';
// import Products from '../src/Components/Products/Product/Products';
// import Navbar from './Components/Navbar/Navbar';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './Components';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        // const cartActions = await commerce.cart.retrieve();
        // setcart( cart );
        setCart(await commerce.cart.retrieve());
        // const { cartno } = await commerce.cart.retrieve()
        // setCart(cartno);
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    // console.log(products)
    console.log("app.js");
    console.log(cart);

    // console.log(cart.total_unique_items);

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
            <Cart cart={cart} />
        </div>
    )
}

export default App;
