import React, { useEffect, useState } from "react";

export default function Main() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <main className={styles.main}>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id} className={styles.product}>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                    <p>Category: {product.category.name}</p>
                    <div className={styles.images}>
                        {product.images.slice(0, 3).map((image, index) => (
                            <img key={index} src={image} alt={product.title} className={styles.image}/>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}