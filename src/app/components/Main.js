import React from "react";
import styles from "./main.module.css";

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
                </div>
            ))}

<link href= "https://ead.ifms.edu.br/"
             width={100}
             height={100}
             src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.m.wikipedia.org%2Fwiki%2FFicheiro%3AMoodle-logo.svg&psig=AOvVaw1_L_WvZVMZiA5IIwKICGAz&ust=1709812662568000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDi5dPK34QDFQAAAAAdAAAAABAJ"}
></link>
        </main>
    );
}
