import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Cancel() {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/')
  }, 3000)
    return (
        <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">❌ Opłacenie nie powiodło się.</h1>
        <p className="mt-4">Spróbuj jeszcze raz, lub skontaktuj się z nami.</p>
      </div>
    )
}
