import './upBtn.css'
import React, { useEffect, useState } from 'react'

const UpBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    const scrollHandler = () => {
        (window.scrollY > 400) ? setShowBtn(true) : setShowBtn(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])


    const clickHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        showBtn && (
            <div className="up-container">
                <button onClick={clickHandler} className="up-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                    </svg>
                </button>
            </div>
        )
    )
}

export default UpBtn