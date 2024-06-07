import React from 'react';
import styles from "./footer.module.css";
import Image from "next/image";


function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.texto}>
      
             <p>Data de criação: 10 de junho de 2023</p>
             <ul claassName={styles.redesocial}>
             <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://twitter.com" >Twitter</a></li>
                    <li><a href="https://instagram.com" >Instagram</a></li>
             </ul>
            </div>
            <div classNeme={styles.logo}>
            <Image 
                    width={80}
                    height={80}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASWKbiYwbNQq9ukVNPqMm8HSZK6h4y5EFABHROpRQUgr19HRLEfptnMMVWSKHyYJu0eE&usqp=CAU"
                    alt="Logo da Loja"
                />  
            </div>
        </footer> 
    );
}

export default Footer

