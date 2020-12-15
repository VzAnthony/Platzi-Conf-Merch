import React, { useContext, useRef } from 'react';
import AppContext from '../context/AppContext';
import { Link, useHistory } from 'react-router-dom';
import '../styles/components/Information.css';

const Information = () => {
    const { state: { cart }, addToBuyer } = useContext(AppContext)
    const form = useRef(null);
    const history = useHistory();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'addres': formData.get('addres'),
            'apto':  formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer);
        history.push('/checkout/payment');
    }

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto: </h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" name="name" placeholder="Nombre Completo"/>
                        <input type="text" name="email" placeholder="Correo Electronico"/>
                        <input type="text" name="addres" placeholder="Direccion"/>
                        <input type="text" name="apto" placeholder="apto"/>
                        <input type="text" name="city" placeholder="Ciudad"/>
                        <input type="text" name="country" placeholder="Pais"/>
                        <input type="text" name="state" placeholder="Estado"/>
                        <input type="text" name="cp" placeholder="Codigo Postal"/>
                        <input type="text" name="phone" placeholder="Telefono"/>
                    </form>
                </div>
                <div className="Information-buttons">
                    <Link to="/checkout">
                        <div className="Information-back">Regresar</div>
                    </Link>
                    <Link to="/checkout/payment">
                        <button className="Information-next" type="button" onClick={handleSubmit}>Pagar</button>
                    </Link>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido: </h3>
                    {cart.map((item, index) => (
                        <div className="Information-item" key={`${item.title} + ${index}`}>
                            <div className="Information-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Information;
