// Import necessary modules
import React, { useState } from 'react';

// Define the functional component
const Home = () => {
    const [currentButton, setCurrentButton] = useState(1);

    const nextButton = () => {
        if (currentButton < 5) {
            setCurrentButton(currentButton + 1);
        }
    };

    const showMessage = () => {
        setCurrentButton(5); // Go directly to the message
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', backgroundColor: '#ffe4e1', fontFamily: 'Arial, sans-serif', margin: 0 }}>
            <div id="button-container">
                <button className={`button ${currentButton === 1 ? '' : 'hidden'}`} onClick={nextButton}>Jangan tekan aku</button>
                <button className={`button ${currentButton === 2 ? '' : 'hidden'}`} onClick={nextButton}>Kok tekan aku? penasaran yaa?</button>
                <button className={`button ${currentButton === 3 ? '' : 'hidden'}`} onClick={nextButton}>Bjir beneran penasaran dong</button>
                <button className={`button ${currentButton === 4 ? '' : 'hidden'}`} onClick={nextButton}>Kasih tau g yh</button>
                <button className={`button ${currentButton === 5 ? '' : 'hidden'}`} onClick={showMessage}>Yaudah deh nih</button>
            </div>

            <div className={`message ${currentButton === 5 ? '' : 'hidden'}`} id="finalMessage">
                Fey, sebenernya aku dari awal kenal sama kamu aslinya kamu orang yang ceria sama asik buat diajak ngobrol.. Jadi aku kepikiran dari saat awal kita kenal sampai kemarin kerja kelompok.. Mau ga Fey kamu sama aku official? :)
            </div>

            <style jsx>{`
                .button {
                    padding: 15px 30px;
                    font-size: 16px;
                    margin: 10px;
                    cursor: pointer;
                    border: none;
                    border-radius: 5px;
                    background-color: #ff69b4; /* Hot pink */
                    color: white;
                    transition: background-color 0.3s, transform 0.3s;
                }
                .button:hover {
                    background-color: #ff1493; /* Deeper pink on hover */
                    transform: scale(1.05);
                }
                .hidden {
                    display: none;
                }
                .message {
                    margin-top: 20px;
                    font-size: 20px;
                    text-align: center;
                    color: #d5006d; /* Darker pink for the message */
                }
            `}</style>
        </div>
    );
};

// Export the component
export default Home;
