import './infoContainer.css'

import InfoWidget from './InfoWidget/InfoWidget'

const InfoContainer = () => {

    return (
        <div className="info-container">
            <div>
                <InfoWidget icon={"https://img.icons8.com/dotty/110/knitting-ball.png"} info={"Diseños a disponibilidad"}/>
            </div>
            <div>
                <InfoWidget icon={"https://img.icons8.com/dotty/125/credit-card-front.png"} info={"Aceptamos todos los medios de pago"}/>
            </div>
            <div>
                <InfoWidget icon={"https://img.icons8.com/ios/100/shipped.png"} info={"Envios a todo el país"}/>
            </div>
        </div>

        /* PROBAR ANIMACIONES EN LOS ICONOS */
    )
}

export default InfoContainer