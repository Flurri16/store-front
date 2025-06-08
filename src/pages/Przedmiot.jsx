
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { addToCart } from '../redux/cartSlice'
export default function Przedmiot({item}) {
  const isOkej = useSelector(state => state.auth.isOkej)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const itemsInCart = useSelector(state => state.cart.items)
  const addToCartHandler = (e) => {
     e.stopPropagation()
     if(isOkej === true) dispatch(addToCart(item))
      console.log(isOkej)
  }
  
  const handler = () => {
    if(isOkej) {
      navigate(`${item._id}`)
    } else {
      toast('Nie masz dostępu.')
    }
  }
  return (
    <div onClick={handler} className='przedmiot'>
      <img src={`http://localhost:5000${item.imagesPaths[0]}`} alt="" />
      <h2>{item.title}</h2>
      <div className="button-cost">
        <span>{item.cost}zł</span>
        <button onClick={addToCartHandler}>Do kosza</button>
      </div>
    </div>
  )
}
