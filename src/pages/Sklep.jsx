import { useEffect } from 'react'
import Przedmiot from './Przedmiot'

import {useDispatch, useSelector} from 'react-redux'
import { getAll } from '../redux/itemsSlice'
export default function Sklep() {
  const dispatch = useDispatch()
  const {items} = useSelector(state => state.items)
  // console.log(items)
  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])
  return (
    <div className="">
        <div className='grid-container'>
            {
            items && items.length > 0 ? items.map(item => (
              <Przedmiot item={item} key={item._id}></Przedmiot>
            )) : <h1>Ladowanie...</h1>
            }
        </div>
        {/* <Cart></Cart> */}
    </div>

  )
}
