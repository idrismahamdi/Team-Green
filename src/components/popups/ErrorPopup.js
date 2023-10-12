import React, { useEffect } from 'react';
import '../../css/errorPopup.css';

const ErrorPopup = ({ errorHeader, errorBody, closeFunc }) => {
    return (
        <>
            <div className="PopupBackground" id="popupBackground" onClick={() => closeFunc()}></div>
            <div className="Popup">
                <h3>{errorHeader}</h3>
                <p>{errorBody}</p>
                <button id="closeButton" onClick={() => closeFunc()}>Close</button>
            </div>
        </>
    )
}

export default ErrorPopup