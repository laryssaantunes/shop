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
            </div>
            <div className={styles.cordefundo}>
            <h1 className={styles.nome}>Loja</h1>
            <p className={styles.bemvindo}>Bem Vindo a nossa loja</p>
            <p className={styles.frase}> Os melhores produtos e os melhores preços</p>
            <button className={styles.button}>Adicionar um novo produto</button>
            </div>
        </header>
    );
}
export default Header

