import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto: </h2>
                </div>
                <div className="Information-form">
                    <form action="">
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
                    <div className="Information-back">Regresar</div>
                    <Link to="/checkout/payment">
                        <div className="Information-next">Pagar</div>
                    </Link>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido: </h3>
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>ITEM Name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
