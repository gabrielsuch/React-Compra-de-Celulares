import {useCart} from "../../Providers/Cart/index"
import "./style.css"

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

const DisplayCart = ({product}: ProductProps) => {

    const {removeProduct} = useCart()

    return (
        <>
            <li>
            <div className="productImg">
                <img src={product.image} alt={product.title}/>
            </div>
            <h2>{product.title}</h2>
            <h2>
                <span>
                    <div className="removePrice">
                        R${product.price.toFixed(2)}
                    </div>
                </span>
            </h2>
            <div className="removeButton">
                <button onClick={() => removeProduct(product)}>Remover do Carrinho</button>
            </div>
        </li>
        </>
    )
}

export default DisplayCart