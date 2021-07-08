import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Product/Product';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/05/1144163-987539-The-Top-7-Altra-Running-Shoes-of-2021-1296x728-headerc0dcdf-1296x727.jpg?w=1155&h=1528' },
//     { id: 2, name: 'Macbook', description: 'Apple macbook', price: '$12', image: 'https://www.climaxcomputer.com/wp-content/uploads/2020/05/New-Apple-Macbook-Air-Gold-New.jpg' },
// ]

const Products = ({ products, onAddToCart }) => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products;
