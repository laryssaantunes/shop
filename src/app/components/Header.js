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
                src={"https://w7.pngwing.com/pngs/937/71/png-transparent-barbie-illustration-barbie-logo-barbie-logo-s-text-wikimedia-commons-magenta.png"}>
            </Image>

            </div>
            <h1 className={styles.nome}>Loja</h1>
            <div className={styles.iconi}> 🛒 </div>
            <button className={styles.button}>Adicionar um novo produto</button>
            <p className={styles.frase}> Os melhores produtos e os melhores preços</p>
        </header>
    );
}
export default Header

