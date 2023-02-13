# Tugas Pekanan 3 - Javascript

Sebelum memulai tugas, terlebih dahulu untuk menginstalll beberapa yang software dan jangan lupa untuk save di Repository Gitlab :
1. Buka akun Gitlab, buat repo baru, ceklis readmee.md untuk menulisakan step by step yang akan dijalankan dan klik save.
3. Klik clone url lalu buaka Vcode, open new window klik clone lalu paste url di gitlab nya, enter.
4. Maka akan tampil apa yang ada di gitlab nya.
5. Kemudian ketik di terminal "npm init" lalu enter sampai ketemu (yes), lalu lihat apakah di gotlabnya sudah berubah
6. lalu ketik di terminal "npm install"
7. lalu ketik di terminal "npm install --save prompt-sync", dan hsil nya seperti ini
8. jika sudah kita coba untul commit ke dalam git dengan cara klik CTRL+Sift+G icon ke tiga dari atas, lalu buat tickate name misal "add package json", klik commit klik yes
10. atau bisa dengan cara :
    - git add .
    - git commit -m "add package json"
    - git push origin main
11. Membuat branch lewat Vcode :
    - klik icon main bwah pojok kiri
    - pilih branch ketikkan nama branch, enter

Untuk tugas yang ada :
1. Soal1.js  untuk membuat akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
- Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
- Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
Hint : gunakan rumus sqrt(x)
Untuk menjalankan soal1.js tinggal ketikkan node soal1.js
maka hasilnya seperti ini 
1. jika memasukkan bilangan genap misal 20 maka akan menghasilkan akar dari 20=4.72
<img width="575" alt="image" src="https://user-images.githubusercontent.com/19841139/218313920-fd632007-cb84-4ccc-b335-99379f25bb61.png">
2. jika memasukkan bilangan ganjil misal 25 maka hasilnya "Tidak bisa input bilangan ganjil"
<img width="566" alt="image" src="https://user-images.githubusercontent.com/19841139/218314366-a04bf38a-8981-46cd-82df-d8b2c51f7c38.png">
3. jika memasukkan bilangan <dari 0 maka hasilnya "Tidak bisa input bilagan negatif"
<img width="541" alt="image" src="https://user-images.githubusercontent.com/19841139/218314461-05bff713-9cf3-4174-9a39-792dd68ad084.png">

2. Soal2.js Buatlah sebuah program javascript untuk menjumlahkan quantity dari semua storageId untuk produk tersebut 
 Untuk mengambil total dari Quantity pada productCode tinggal menggunakan reduce karena menurut saya ini alur yang sangat simple. tinggal dipanggil saja function sampai ketemu ketiga quantity dan akan muncul totalnya seperti berikut : 
 <img width="755" alt="image" src="https://user-images.githubusercontent.com/19841139/218484667-d7d7d356-b854-4a41-9611-2904115cb8b2.png">




