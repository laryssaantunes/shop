import React from 'react';
import styles from "./footer.module.css";
import Image from "next/image";


function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.texto}>
             <p>Bem Vindo a nossa loja</p>
             <p>Data de criação: 10 de julho de 2023</p>
             <ul claassName={styles.redesocial}>
             <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
             </ul>
            </div>
            <div classNeme={styles.logo}>
            <Image 
                    width={80}
                    height={80}
                    src="https://w7.pngwing.com/pngs/937/71/png-transparent-barbie-illustration-barbie-logo-barbie-logo-s-text-wikimedia-commons-magenta.png"
                    alt="Logo da Loja"
                />  
            </div>
        </footer> 
    );
}

export default Footer

