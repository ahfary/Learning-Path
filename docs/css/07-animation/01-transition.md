---
sidebar_position: 1
title: CSS Transition
---

# CSS Transition

Secara default, perubahan di CSS itu bersifat **instan** (kaget). Transition memungkinkan perubahan terjadi secara **halus** dalam durasi waktu tertentu.

Biasanya digunakan saat `hover` (mouse di atas elemen).

## Sintaks Dasar
Properti `transition` membutuhkan dua hal wajib:
1.  **Apa yang mau dianimasikan?** (misal: `background`, `width`, atau `all`).
2.  **Berapa lama?** (dalam detik `s` atau milidetik `ms`).

```css
.tombol {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    
    /* "Jika ada yang berubah, lakukan perlahan selama 0.3 detik" */
    transition: all 0.3s;
}

.tombol:hover {
    background-color: red; /* Perubahan ini akan terjadi halus */
    transform: scale(1.1); /* Membesar sedikit */
}
```

## Properti Lengkap

Jika ingin lebih spesifik, kita bisa memecahnya:

```css
.kotak {
    transition-property: width; /* Cuma lebar yang halus, warna kaget */
    transition-duration: 1s;    /* Durasi 1 detik */
    transition-timing-function: ease-in-out; /* Pelan di awal & akhir */
    transition-delay: 0.5s;     /* Tunggu 0.5 detik baru mulai */
}
```

:::tip Kunci Animasi Modern
Gunakan properti `transform` untuk performa terbaik (tidak bikin laptop nge-lag).

* `transform: scale(1.1)` -> Membesar
* `transform: translateY(-5px)` -> Naik sedikit (efek melayang)
* `transform: rotate(45deg)` -> Muter
:::