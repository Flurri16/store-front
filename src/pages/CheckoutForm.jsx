import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function CheckoutForm() {
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [sername, setSername] = useState('')
  const [phone, setPhone] = useState('')
  const [provincial, setCountry] = useState('')
  const [adress, setAdress] = useState('')
  const { items } = useSelector(state => state.cart)
  const handleCheckout = async (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы
    if (!name || !sername || !phone || !provincial || !adress) {
      alert("Użyj wszystkich inputs.");
      return;
    }
    if (items.length < 1) return toast('Nie można oplacić pusty koszyk.')
    try {
      let message = `<b>Information:</b>\n`
      message += `<b>Name:</b> ${name}\n`
      message += `<b>Sername:</b> ${sername}\n`
      message += `<b>Phone:</b> ${phone}\n`
      message += `<b>Country:</b> ${provincial}\n`
      message += `<b>Adress:</b> ${adress}\n`
      message += `<b>Items:</b>\n`
      items.forEach((item, index) => {
        message += `${index + 1}) ${item.title} --- ${item.cost} * ${item.quantity}\n`
      })
      // message += `<b>Total:</b> ${summ}zł\n`

      const res = await axios.post('https://store-back-production-d6cb.up.railway.app/api/telegram', { message })
      const response = await axios.post('https://store-back-production-d6cb.up.railway.app/api/create-checkout-session', { items })
      window.location.href = response.data.url  // перенаправляем на Stripe Checkout
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  const cofHandler = () => {
    navigate('/')
  }
  return (
    <div>
      <form className='checkout' onSubmit={handleCheckout}>
        <h2>Wprowadź dane dostawy:</h2>

        <div className='checkout-inputs'>
          <div className="label-input">
            <label htmlFor="firstName">Imię</label>
            <input
              type="text"
              name="firstName"
              placeholder="Imię"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="label-input">
            <label htmlFor="sername">Nazwisko</label>
            <input
              type="text"
              name="sername"
              placeholder="Nazwisko"
              onChange={(e) => setSername(e.target.value)}
              value={sername}
              required
            />
          </div>

          <div className="label-input">
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
          </div>

          <div className="label-input">
            <label htmlFor="country">Województwo</label>
            <select
              name="country"
              value={provincial}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">-- Wybierz województwo --</option>
              <option value="dolnośląskie">Dolnośląskie</option>
              <option value="kujawsko-pomorskie">Kujawsko-Pomorskie</option>
              <option value="lubelskie">Lubelskie</option>
              <option value="lubuskie">Lubuskie</option>
              <option value="łódzkie">Łódzkie</option>
              <option value="małopolskie">Małopolskie</option>
              <option value="mazowieckie">Mazowieckie</option>
              <option value="opolskie">Opolskie</option>
              <option value="podkarpackie">Podkarpackie</option>
              <option value="podlaskie">Podlaskie</option>
              <option value="pomorskie">Pomorskie</option>
              <option value="śląskie">Śląskie</option>
              <option value="świętokrzyskie">Świętokrzyskie</option>
              <option value="warmińsko-mazurskie">Warmińsko-Mazurskie</option>
              <option value="wielkopolskie">Wielkopolskie</option>
              <option value="zachodniopomorskie">Zachodniopomorskie</option>
            </select>
          </div>


          <div className="label-input">
            <label htmlFor="address">Adres</label>
            <input
              type="text"
              name="address"
              placeholder="Ulica, dom, mieszkanie"
              onChange={(e) => setAdress(e.target.value)}
              value={adress}
              required
            />
          </div>
        </div>
        <div className="pay-buttons">
          <button onClick={cofHandler}>Na główną</button>
          <button>Zapłacić PayPal</button>
          <button onClick={handleCheckout}>Zapłacić</button>
        </div>
      </form>
    </div>
  );

}
