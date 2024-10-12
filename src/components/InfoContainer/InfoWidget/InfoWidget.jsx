import './infoWidget.css'

const InfoWidget = ({ icon, info }) => {
    return (
        <div className="icon-widget">
            <img src={icon} />
            <p>{info}</p>
        </div>
    )
}

export default InfoWidget