'use client'
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Image from "next/image";
import Spinner from "./Spinner";
import Link from "next/link";

export default function Main() {
    const [listProduct, setListaProduct] = useState([]);
    const [listComplete, setListComplete] = useState([]);
    const [search, setSearch] = useState ("");
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect( ()=> {
        const getProduct = async () =>{
            try{
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json();
            setListaProduct(data);
            setListComplete(data);
        }catch{
            setErrorFetch 
        }
        }
        getProduct();
    }, []);

    const orderAz = () =>{
        const neWList = [...listProduct].sort( (a,b) =>
            a.title.localeCompare(b.title)
        );
        setListaProduct(neWList);
    }

    const orderZa = () => {
        let newList = [...listProduct].sort( (a,b)=>
            a.title.localeCompare(b.title)
        );
        newList = newList.reverse();
        setListaProduct(newList);
    }

    const ordermais = () =>{
        const newList = [...listProduct].sort( (a,b)=>
            a.price - b.price
        );
        setListaProduct(newList);
    }

    const ordermenos = () =>{
        let newList = [...listProduct].sort( (a,b) =>
            a.price - b.price
        );
        newList = newList.reverse();
        setListaProduct(newList);
    }

    const searchText = (text) => {
        setSearch(text);

        if( text.trim()== ""){
            setListaProduct(listComplete);
            return
        }
        const newList = listProduct.filter((product) =>
        product.title.toUpperCase().trim().includes(search.toUpperCase().trim()))
        setListaProduct(newList);
    }

    if(errorFetch == true){
        return <ErrorGetData/>
    }

    if(setListaProduct[0] == null){
        return(
            <Spinner/>
        )
    }
    return(
        <>
        <div className={styles.fundo}>
            <button className={styles.button} onClick={orderAz}>AZ</button>
            <button className={styles.button} onClick={orderZa}>ZA</button>
            <button className={styles.button} onClick={ordermais}>Maior Preço</button>
            <button className={styles.button} onClick={ordermenos}>Menor Preço</button>
        </div>

    <main className={styles.main}>
        <h2>Produtos</h2>
        <h2 classNamme={styles.produtol}>Produtos</h2>
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
                <Link href={`/product/${produto.id}`}>
                    ver produto
                </Link>
            </div>
        ))}
    </main>
    </>
    );
}






