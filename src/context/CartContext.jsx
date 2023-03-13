import { useState, createContext, useEffect } from "react"


export const CartContext  = createContext()




const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([])


    useEffect(() => {
      const cartLS = JSON.parse(localStorage.getItem('cart')) ?? []
      setCart(cartLS)

    
    }, [])
    
    //dependencia el carrito, cada vez q el carrito cambie se sicroniza con el localstorage
     useEffect(() => {
       localStorage.setItem('cart', JSON.stringify(cart))
     }, [cart])

    
    const addToCart = ( product )=>{
      let exist = isInCart(product.id)

      if(exist){

        let newCart = cart.map( (item)=>{
          if(item.id === product.id){
            let newProduct = {
              ...item,
              quantity: product.quantity
            }
            return newProduct
          }else{
            return item
          }
        })

        setCart(newCart)

      }else{
        setCart( [ ...cart, product ] )
      }
      
    }

    const clearCart = ()=>{
      setCart( [] )
    }

    const deleteProductById = ( id )=>{

      let newCart = cart.filter( product => product.id !== id)
      setCart(newCart)

    }

    const isInCart = ( id )=>{

      let exist = cart.some( element => element.id === id ) 

      return exist

    }

    const getQuantityById = ( id )=>{

      let product = cart.find( element => element.id === id)
      return product?.quantity

    }

    const getTotalItems = ()=>{

      const total = cart.reduce((acc, element)=>{
        return acc + element.quantity
      }, 0 )

      return total
    }

    const getTotalPrice = ()=>{

      const total = cart.reduce( (acc, element)=>{
        return acc + (element.price * element.quantity)
      }, 0)

      return total

    }


    let data = {
      cart: cart,
      addToCart,
      clearCart,
      deleteProductById,
      getQuantityById,
      getTotalItems,
      getTotalPrice
    }

  return (
    <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
