import Image from "next/image";
export default function Spinner() {
    return(
        <Image
        widht={100}
        heigth={100}
        scr="12-dots-scale-rotate.svg"
        all="Imagem carregando"
        ></Image>
    );
}