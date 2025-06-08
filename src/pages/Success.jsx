import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Success() {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/')
  }, 3000)
    return (
        <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-green-600">✅ Opłacenie powiodło się!</h1>
        <p className="mt-4">Czekaj na kontakt z zprzedawcą.</p>
      </div>
    )
}
