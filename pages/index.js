<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Transisi</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #ffe4e1; /* Soft pink background */
            font-family: Arial, sans-serif;
            margin: 0;
        }
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
    </style>
</head>
<body>

    <div id="button-container">
        <button class="button" id="button1" onclick="nextButton()">Jangan tekan aku</button>
        <button class="button hidden" id="button2" onclick="nextButton()">Kok tekan aku? penasaran yaa?</button>
        <button class="button hidden" id="button3" onclick="nextButton()">Bjir beneran penasaran dong</button>
        <button class="button hidden" id="button4" onclick="nextButton()">Kasih tau g yh</button>
        <button class="button hidden" id="button5" onclick="showMessage()">Yaudah deh nih</button>
    </div>

    <div class="message hidden" id="finalMessage">
        Fey, sebenernya aku dari awal kenal sama kamu aslinya kamu orang yang ceria sama asik buat diajak ngobrol.. Jadi aku kepikiran dari saat awal kita kenal sampai kemarin kerja kelompok.. Mau ga Fey kamu sama aku official? :)
    </div>

    <script>
        // Proper JavaScript syntax starts here
        let currentButton = 1;

        function nextButton() {
            if (currentButton < 5) {
                document.getElementById(`button${currentButton}`).classList.add('hidden');
                currentButton++;
                document.getElementById(`button${currentButton}`).classList.remove('hidden');
            }
        }

        function showMessage() {
            document.getElementById(`button${currentButton}`).classList.add('hidden');
            document.getElementById('finalMessage').classList.remove('hidden');
        }
    </script>

</body>
</html>
