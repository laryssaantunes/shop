import React from "react";
import styles from "./main.module.css";
import Image from "next/image";
import Spinner from "./Spinner";



export default async function Main() {
    const response = await fetch ("https://fakestoreapi.com/products");
    const produto = await response.json();

    return (
        <main className={styles.main}>
            <h2>Produtos</h2>
            <div classNamme={styles.produtol}>
            {produto.map((produto) => (
                <div className= {styles.produto} key= {produto.id}>
                    <h3>{produto.title}</h3>
                    <p>Preço: ${produto.price}</p>
                    <p>{produto.description}</p>
                    <p>Categoria: {produto.category}</p>
                    <p>Avaliação: {produto.rating.count}</p>
                    <Image 
                        width={100}
                        height={100}
                        src={produto.image}
                    />
                </div>
            ))}
            </div>


            if(listProduct[0] == null){
                return <Spinner/>
            };
        </main>
    );
}
