    Fungsi hitungRataRataDanGrade:
        Parameter:
            nilaiWeb: Nilai mata pelajaran Web Programming.
            nilaiKomputer: Nilai mata pelajaran Computer Programming.
            nilaiStatistika: Nilai mata pelajaran Statistics.
            nilaiSistemBasisData: Nilai mata pelajaran Database Systems.
        Fungsi: Menghitung rata-rata nilai dari keempat mata pelajaran dan menentukan grade berdasarkan rata-rata tersebut.

    Validasi Nilai:
        Memeriksa apakah semua nilai berada dalam rentang 0 hingga 100.
        Jika ada nilai yang tidak valid, menampilkan pesan kesalahan dan menghentikan eksekusi fungsi dengan return.

    Menghitung Rata-Rata:
        const totalNilai = nilaiWeb + nilaiKomputer + nilaiStatistika + nilaiSistemBasisData;
        Menjumlahkan semua nilai.
        const rataRata = totalNilai / 4;
        Menghitung rata-rata dengan membagi total nilai dengan 4.

    Menentukan Grade:
        Menggunakan serangkaian if-else untuk menentukan grade berdasarkan rata-rata:
            A untuk rata-rata ≥ 90.
            B untuk rata-rata ≥ 80 tetapi < 90.
            C untuk rata-rata ≥ 70 tetapi < 80.
            D untuk rata-rata ≥ 60 tetapi < 70.
            E untuk rata-rata < 60.

    Menampilkan Hasil:
        console.log(Rata-rata nilai: ${rataRata.toFixed(2)});
        Menampilkan rata-rata nilai dengan dua angka di belakang koma.
        console.log(Grade: ${grade});
        Menampilkan grade yang ditentukan.

    Pemanggilan Fungsi:
        Menginisialisasi nilai untuk masing-masing mata pelajaran.
        Memanggil fungsi hitungRataRataDanGrade dengan nilai yang telah ditentukan.