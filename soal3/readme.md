    Fungsi cetakSegitigaSikuSiku:
        Parameter: tinggi (tipe number) yang menentukan jumlah baris segitiga siku-siku.
        Fungsi: Mencetak pola segitiga siku-siku dengan tinggi baris ke konsol.

    Loop For:
        Menggunakan loop for untuk iterasi dari 1 hingga tinggi (inklusif). Setiap iterasi mewakili satu baris dari segitiga.

    Membuat String Spasi:
        let spasi = ' '.repeat(tinggi - i);
        Menghitung jumlah spasi yang diperlukan untuk baris saat ini dengan mengurangi i dari tinggi. repeat() digunakan untuk menghasilkan string dengan jumlah spasi yang sesuai.

    Membuat String Bintang:
        let bintang = '*'.repeat(i);
        Menghasilkan string bintang dengan panjang i, yang bertambah satu bintang per baris.

    Mencetak Baris:
        console.log(spasi + bintang);
        Menggabungkan string spasi dan bintang, kemudian mencetak hasilnya ke konsol.

    Pemanggilan Fungsi:
        cetakSegitigaSikuSiku(10);
        Memanggil fungsi dengan parameter 10, sehingga mencetak segitiga siku-siku dengan 10 baris.