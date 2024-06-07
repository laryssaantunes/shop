import React from 'react';
import styles from "./header.module.css";
import Image from "next/image";
function Header(){
    return(
        <header className={styles.hearder}>
            <div className={styles.imagem}>
            <Image 
                width={80}
                height={80}
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASWKbiYwbNQq9ukVNPqMm8HSZK6h4y5EFABHROpRQUgr19HRLEfptnMMVWSKHyYJu0eE&usqp=CAU"}>
            </Image>
            <h1 className={styles.nome}>Loja</h1>
            <div className={styles.iconi}> 🛒 </div>
            <p> Bem Vindo a nossa loja:    Os melhores produtos e os melhores preços </p>
            </div>
            <button className={styles.button}>Adicionar um novo produto</button>
        </header>
    );
}
export default Header

