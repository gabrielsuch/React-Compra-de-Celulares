import "./style.css"

import {useCart} from "../../Providers/Cart/index"

interface Product {
    id: number
    title: string
    description: string
    price: number
    image: string
}

interface ProductProps {
    product: Product
}

const DisplayProduct = ({product}: ProductProps) => {

    const {addProduct} = useCart()

    return (
        <li>
            <div className="productImg">
                <img src={product.image} alt={product.title}/>
            </div>
            <h2>{product.title}</h2>
            <h2>
                <span>
                    R${product.price.toFixed(2)}
                </span>
            </h2>
            <button onClick={() => addProduct(product)}>Adicionar ao Carrinho</button>
        </li>
    )
}

export default DisplayProduct