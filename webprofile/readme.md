#penjelasan index.html#

    <head> Section:
        Meta Tags: Mengatur charset, kompatibilitas browser, dan viewport untuk tampilan responsif.
        Title: Judul halaman yang ditampilkan di tab browser.
        Stylesheet Links: Menghubungkan file CSS eksternal (style.css) dan font ikon dari Boxicons.
        Internal CSS: Mengatur scroll-behavior: smooth untuk efek scrolling yang halus saat navigasi ke bagian halaman.

    <body> Section:
        Header: Berisi logo dan navigasi utama. Logo mengarah ke halaman utama, dan menu navigasi memiliki tautan ke berbagai bagian halaman dan kontak.
        Main Content:
            Home Section: Menampilkan nama, deskripsi singkat, dan tombol untuk menghubungi atau melihat portofolio. Juga terdapat gambar profil.
            Aside Section: Ikon sosial media dengan tautan ke berbagai platform.
            About Section: Memperkenalkan diri dengan gambar dan informasi latar belakang, keterampilan, prestasi, dan kepentingan pribadi.
            Hobbi Section: Menampilkan hobi dengan ikon dan deskripsi singkat.
        Footer: Menyediakan informasi kontak tambahan dan hak cipta.

    Elements and Attributes:
        <a> tags: Untuk membuat tautan.
        <i> tags: Digunakan untuk menampilkan ikon dari Boxicons.
        <section>, <div>, <figure>, <article>: Digunakan untuk menyusun dan mengelompokkan konten.

    External Resources:
        Boxicons: Menyediakan ikon sosial media dan hobi.

Secara keseluruhan, kode ini membangun struktur dasar untuk sebuah website portofolio pribadi dengan navigasi, informasi pribadi, hobi, dan ikon sosial media.




#penjelasan style.css#

    Global Styles:
        Universal Selector (*): Mengatur margin, padding, dan box-sizing untuk semua elemen. Mengatur font default menggunakan font 'Poppins'.
        body: Mengatur latar belakang halaman, warna teks, dan efek scroll-behavior yang halus.

    Header:
        header: Posisi tetap di bagian atas halaman dengan latar belakang gelap. Menggunakan Flexbox untuk menyusun logo dan navigasi.
        .logo: Mengatur ukuran font, warna, dan gaya untuk logo.
        nav: Menyusun tautan navigasi dengan ukuran font besar dan margin kiri.
        nav a: Mengatur tampilan tautan navigasi dengan efek transisi warna pada hover dan aktif.

    Home Section:
        section#home: Mengatur tampilan background gambar, ukuran dan posisi konten, serta padding.
        .home-content: Mengatur lebar maksimum konten di dalam bagian home.
        .btn-box: Menyusun tombol dengan desain yang konsisten, termasuk efek hover dengan perubahan warna latar belakang.
        .home-sci: Menampilkan ikon media sosial dengan efek hover yang mengubah warna latar belakang.

    About Section:
        section#about: Mengatur latar belakang gelap, warna teks, dan padding.
        .about-content: Menyusun konten dengan Flexbox agar gambar dan teks dapat disejajarkan dengan baik.
        .about-img: Mengatur tampilan gambar dengan ukuran maksimum dan efek pada gambar.
        .about-text: Mengatur teks dengan warna, ukuran, dan efek hover pada tautan.

    Hobi Section:
        section#hobi: Mengatur latar belakang dan padding.
        .hobi-content: Menyusun konten hobi dengan teks yang terpusat.
        .hobi-grid: Menggunakan grid untuk menata item hobi dengan jarak antar kolom.
        .hobi-item: Mengatur gaya kotak item hobi dengan border, shadow, dan padding.

    Footer:
        footer: Mengatur latar belakang footer, warna teks, teks yang terpusat, dan ukuran font.
        .social a: Mengatur tampilan tautan sosial media dengan warna putih dan margin.

    Animation:
        @keyframes showRight: Definisi animasi, meskipun tidak digunakan dalam kode yang ada. Ini mengatur lebar dari elemen dari 100% ke 0.

Secara keseluruhan, CSS ini mengatur desain dan tata letak halaman web dengan fokus pada tampilan responsif, interaksi pengguna, dan estetika visual yang konsisten.