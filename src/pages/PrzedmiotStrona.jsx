import { useNavigate, useParams } from 'react-router-dom'
import axios from '../axiosConfig.js'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteItem } from '../redux/itemsSlice.js'
import { toast } from 'react-toastify'
import { addToCart } from '../redux/cartSlice.js'
export default function PrzedmiotStrona() {
    const [item, setItem] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const {message} = useSelector(state => state.items)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handlePrev = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? item.imagesPaths.length - 1 : prev - 1
        )
    }
    const handleNext = () => {
        setCurrentImageIndex((prev) =>
            prev === item.imagesPaths.length - 1 ? 0 : prev + 1
        )
    }
    const addInCart = () => {
        dispatch(addToCart(item))
    }
    const deleteHandler = async () => {
        try {
            dispatch(deleteItem(item._id))
        } catch(err) {
            console.log(err)
        }
    }
    const { id } = useParams()
    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await axios.get(`/${id}`)
                setItem(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchItems()
    }, [id])
    useEffect(() => {
        if(message) {
            toast(message)
            navigate('/')
        }
    }, [message])
    return (
        <div className='strona-flex'>
            <div className="strona-left">
                {
                    item && item.imagesPaths ? (
                        <img src={`http://localhost:5000${item.imagesPaths[currentImageIndex]}`} alt="" />
                    ) : null
                }
                {
                    item && item.imagesPaths.length > 1 ? (
                                        <div className="">
                    <div className="slide-left" onClick={handlePrev}>⬅</div>
                    <div className="slide-right" onClick={handleNext}>⮕</div>
                </div>
                    ) : null
                }
            </div>
            {
                item ? (
                    <div className="strona-right">
                        <div className="text-buttons">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                        <div className="buttons-text">
                            <span>{item.cost}zł</span>
                            <div className="strona-buttons">
                                <button className='delete' onClick={deleteHandler}>Usunąć</button>
                                <button onClick={addInCart}>Do kosza</button>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
