import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from '../redux/itemsSlice'
import {toast} from 'react-toastify'
export default function AddItem() {
  const dispatch = useDispatch()
  const {message} = useSelector(state => state.items)
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [cost, setcost] = useState('')
  const [images, setimages] = useState(null)

  const handler = () => {
    try {
        let formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('cost', cost)
        images.forEach(img => {
          formData.append('images', img)
        })
        dispatch(addItem(formData))
        
    } catch(err) {
      console.log(err)
    }
  }
  const clear = () => {
    setcost('')
    setdescription('')
    setimages(null)
    settitle('')
  }
  useEffect(() => {
    if(message)toast(message)
  }, [message])
  return (
<div className='form'>
    <form onSubmit={e => e.preventDefault()}>
        <h1>Dodaj przedmiot:</h1>
        <div className="inputs-flex">
            <input type="file" multiple onChange={e => setimages([...e.target.files])}/>
            <input type="text" value={title} onChange={e => settitle(e.target.value)} placeholder='Zagłówek:' />
            <input type="number" value={cost} onChange={e => setcost(e.target.value)} placeholder='Cena:' />
            <textarea type="text" value={description} onChange={e => setdescription(e.target.value)} placeholder='Informacja:' />
        </div>
        <div className="form-buttons-flex">
            <Link to="/" className='form-buttons-flex-link'>Na główną</Link>
            <button className='clearform' onClick={clear}>Wyciść</button>
            <button onClick={handler}>Dodaj</button>
        </div>
    </form>
</div>
  )
}
