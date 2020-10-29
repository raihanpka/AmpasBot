<h1 align="center">
  <br>
  <a href="https://github.com/lunareixx/AmpasBot"><img src="./data/images/SiAmpas_Title.png"></a>
  <br>
  Astesia
  <br>
</h1>

<h3 align=center>God Servantnya Server ampas.exe</h3>


<div align=center>

  <a href="https://github.com/discordjs">
    <img src="https://img.shields.io/badge/discord.js-v12.3.1-blue.svg?logo=npm" alt="shield.png">
  </a>

  <a href="https://github.com/lunareixx/AmpasBot/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-GNU%20GPL%20v3-green" alt="shield.png">
  </a>

</div>

<p align="center">
  <a href="#about">About</a>
  •
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#setting-up">Setting Up</a>
  •
  <a href="#license">License</a>
  •
  <a href="#credits">Credits</a>
</p>

## About

Si Ampas, God Servantnya Server ampas.exe !

## Features

**100+** commands 

## Installation

** Buat yang mau coba host botnya sendiri **

Clone repo ini dulu
```
git clone https://github.com/lunareixx/AmpasBot.git
```
Setelah cloning, jalankan
```
npm install
```
Tentunya kamu butuh [nodejs](https://nodejs.org/en/) yang sudah diinstal. 

## Setting Up

Setting dulu `config.json` nya, atau tinggal rename aja dari `config.json.contoh`. File nya harus terlihat seperti ini:
```
{
  "token": "token_kamu_disini"
  "ownerId": "ID_kamu_disini",
  "bugReportChannelId": "bug_report_channel_ID_disini",
  "feedbackChannelId": "feedback_channel_ID_disini",
  "serverLogId": "server_log_ID_disini",
  "apiKeys": {
    "catApi": "API_keynya_disini",
    "googleApi": "API_keynya_disini"
  }
}
```
API lainnya bisa didapatkan dari Link dibawah ini :

  * [TheCatAPI](https://thecatapi.com/)
  * [Google APIs](https://console.developers.google.com/apis/)

Setelah `config.json` selesai diatur, **WAJIB** aktifkan `Privileged Intents` di Discord [developer portal](https://discordapp.com/developers/applications/). Bisa ditemukan di bawah kolom "Bot" , dan ada dua opsi yang harus dinyalakan. Info mengenai Gateway Intents, selebihnya [disini](https://discordjs.guide/popular-topics/intents.html#the-intents-bit-field-wrapper).

Setelah selesai, luncurkan `node app.js` atau `nodemon app.js`. Di Linux, bisa gunakan `start.sh` script.

**Tidak disarankan** untuk hosting bot ini di Heroku. Dikarenakan ada batasan yang ditentukan oleh Heroku sehingga database SQL pada bot kamu bisa terhapus tiap 24 jam. Baca selebihnya [disini](https://devcenter.heroku.com/articles/sqlite3).

### Emojis

Ganti Emoji kamu dengan ID sesuai emojinya yang kamu punya di `emojis.json` agar emoji nya muncul. Atau bisa dimodifikasi sesukamu :v

## License

Dirilis dibawah lisensi [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html)

## Credits

Special thanks to :
* **Sebastian Battle** - *Base Code* - [Github](https://github.com/sabattle/calypsobot)
