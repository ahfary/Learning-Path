---
sidebar_position: 2
title: CSS Keyframes Animation
---

# CSS Keyframes Animation

Untuk animasi yang kompleks dan berjalan otomatis (tanpa perlu di-klik/hover), kita menggunakan `@keyframes`.

## Langkah 1: Bikin Skenario (@keyframes)
Kita harus menentukan apa yang terjadi di awal (`0%`) dan di akhir (`100%`).

```css
@keyframes putar-kotak {
    0% {
        transform: rotate(0deg);
        background-color: red;
    }
    50% {
        transform: rotate(180deg); /* Setengah jalan muter */
        background-color: yellow;
    }
    100% {
        transform: rotate(360deg); /* Balik ke posisi awal */
        background-color: red;
    }
}
```

## Langkah 2: Panggil di Elemen

Tempelkan nama animasi tadi ke elemen yang diinginkan.

```css
.loading {
    width: 50px;
    height: 50px;
    background-color: red;
    
    /* Panggil Animasinya */
    animation-name: putar-kotak;
    animation-duration: 2s;
    animation-iteration-count: infinite; /* Ulang terus selamanya */
    animation-timing-function: linear; /* Kecepatan rata (robot) */
}
```

## Studi Kasus: Efek Berdenyut (Pulse)

Sering dipakai untuk tombol "Beli Sekarang" agar menarik perhatian.

```css
@keyframes denyut {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.tombol-promo {
    animation: denyut 1.5s infinite ease-in-out;
}