import {createContext, useContext, useState, ReactNode} from "react"

interface Product {
    id: number
    title: string
    description: string
    price: number
    image: string
}

interface CartProps {
    children: ReactNode
}

interface CartProviderData {
    cart: Product[]
    addProduct: (product: Product) => void
    removeProduct: (product: Product) => void
}

const CartContext = createContext<CartProviderData>({} as CartProviderData)

export const CartProvider = ({children}: CartProps) => {

    const [cart, setCart] = useState<Product[]>([])

    const addProduct = (product: Product) => {
        setCart([...cart, product])
    }

    const removeProduct = (product: Product) => {
        setCart(cart.filter((products) => {
            return products.title !== product.title
        }))
    }

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)