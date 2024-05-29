import React from "react";
import styles from "./main.module.css";
import Image from "next/image";

export default async function Main() {
    const response = await fetch ("https://fakestoreapi.com/products");
    const produto = await response.json();

    return (
        <main className={styles.main}>
            <h2>Produtos</h2>
            {produto.map((produto) => (
                <div className= {styles.produto} key= {produto.id}>
                    <h3>{produto.title}</h3>
                    <p>Price: ${produto.price}</p>
                    <p>{produto.description}</p>
                    <p>Category: {produto.category}</p>
                    <p>Avaliação: {produto.rating.count}</p>
                    <Image 
                        width={100}
                        height={100}
                        src={produto.image}
                    />
                </div>
            ))}
        </main>
    );
}
