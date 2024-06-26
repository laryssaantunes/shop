import Image from "next/image";
export default async function Produto(params){
    const response = await fetch("https://fakestoreapi.com/products/" + params.id)
    const data = await response.json();
    return(
        <div className= {styles.produto} key= {data.id}>
                <h3>{data.title}</h3>
                <p>Preço: ${data.price}</p>
                <p>{data.description}</p>
                <p>Categoria: {data.category}</p>
                <p>Avaliação: {data.rating.count}</p>
                <Image 
                    width={100}
                    height={100}
                    src={data.image}
                />
            </div> 
    )
}