import { BsFillCartFill } from 'react-icons/bs';

const CartWidget = () => {
  return (
    <div>
        <BsFillCartFill />
        <input type='button' value='0'></input>
    </div>
  )
}

export default CartWidget