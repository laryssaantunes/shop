import React from 'react';
import styles from "./header.module.css";
import Image from "next/image";
function Header(){
    return(
        <header className={styles.hearder}>
            <h1>Loja</h1>
            <div>
            <Image 
                width={80}
                height={80}
                src={"https://w7.pngwing.com/pngs/937/71/png-transparent-barbie-illustration-barbie-logo-barbie-logo-s-text-wikimedia-commons-magenta.png"}>
            </Image>

            </div>
        </header>
    );
}
export default Header

