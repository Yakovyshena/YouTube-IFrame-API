import React, { useEffect } from 'react';
import '../css/Donate.css';
import qrcode from "../img/QR-code.png";

function Donate() {
  // Ініціалізація YouTube IFrame API при завантаженні компоненту
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
      new window.YT.Player('youtube-player', {
        height: '480',
        width: '270',
        videoId: 'gqHsfobjjmU',  // ID відео
        events: {
          'onReady': onPlayerReady
        }
      });
    };

    function onPlayerReady(event) {
      event.target.playVideo();
    }
  }, []);

  return (
    <>
    <div className="donate-title">ПІДТРИМАТИ ПРОЄКТ</div>
    <div className="donate-container">
      
      <div id="youtube-player"></div>
      <div className="donate-details">
        <div className="qr-code">
          <img className="qr-code-img" src={qrcode} alt="QR код" />
          <div className="qr-code-text">за QR-кодом</div>
        </div>        
        <div className="payment-details">
          <div className="payment-details-lists-container">
            <ul className="details-titles">
              <li>IBAN</li>
              <li>Назва банку</li>
              <li>ЄДРПОУ</li>
            </ul>
            <ul className="details-values">
              <li>№ UA643052990000026003000105068</li>
              <li>АТ КБ "ПРИВАТБАНК"</li>
              <li>38266276</li>
            </ul>
          </div>            
          <div className="payment-details-text">за реквізитами</div>
        </div>
      </div>        
    </div>
    </>
  );
}

export default Donate;
