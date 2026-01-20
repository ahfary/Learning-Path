---
sidebar_position: 3
title: Flex Wrap & Gap
---

# Flex Wrap & Gap

Secara default, Flexbox akan memaksa semua anak (`child`) untuk antre dalam **satu baris saja**. Jika layar sempit, anak-anaknya akan mengecil (gepeng) atau bahkan keluar jalur.

## 1. Flex Wrap (Baris Baru)
Properti `flex-wrap` mengizinkan elemen untuk turun ke baris baru jika wadah (`container`) sudah tidak muat.

```css
.container {
    display: flex;
    flex-wrap: wrap; /* Pilihan: nowrap (default), wrap, wrap-reverse */
}
```

* **`nowrap`**: Memaksa satu baris (bisa bikin elemen gepeng).
* **`wrap`**: Jika mentok kanan, elemen berikutnya turun ke bawah.
* **`wrap-reverse`**: Turun ke baris baru, tapi arahnya ke atas.

## 2. Gap (Jarak Antar Elemen)

Di masa lalu, kita pakai `margin` untuk memberi jarak, tapi itu ribet (elemen paling pinggir harus di-reset margin-nya).
Sekarang, gunakan properti **`gap`**.

```css
.container {
    display: flex;
    gap: 20px; /* Memberi jarak 20px antar kolom DAN baris */
    
    /* Atau bisa spesifik: */
    /* row-gap: 20px; */
    /* column-gap: 50px; */
}
```

### Studi Kasus: Kartu Galeri Responsif

Ini adalah pola yang paling sering dipakai untuk membuat galeri foto atau daftar produk.

```css
.galeri {
    display: flex;
    flex-wrap: wrap;     /* Boleh turun baris */
    gap: 15px;           /* Jarak aman */
    justify-content: center; /* Rata tengah */
}

.foto {
    width: 200px;        /* Lebar dasar */
    height: 200px;
    background: gray;
}