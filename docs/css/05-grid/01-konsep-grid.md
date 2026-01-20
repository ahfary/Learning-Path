---
sidebar_position: 1
title: Konsep Dasar Grid
---

# Konsep Dasar CSS Grid

CSS Grid memungkinkan kita membagi halaman menjadi kolom dan baris, seperti papan catur atau Excel.

## Cara Mengaktifkan
Berikan properti `display: grid;` pada elemen wadah (Parent).

```css
.container {
    display: grid;
    /* Membuat 3 kolom dengan lebar yang sama */
    grid-template-columns: auto auto auto;
}
```

## Mengatur Kolom & Baris

Kita menggunakan `grid-template-columns` (lebar kolom) dan `grid-template-rows` (tinggi baris).

### Satuan `fr` (Fraction)

Di Grid, hindari pakai `%` atau `px` jika ingin responsif. Gunakan **`fr`** (bagian dari sisa ruang).

```css
.layout-website {
    display: grid;
    /* Kolom 1: 1 bagian, Kolom 2: 2 bagian (lebih lebar) */
    grid-template-columns: 1fr 2fr; 
    gap: 20px; /* Jarak antar kotak */
}_category_.json
```

### Fungsi `repeat()`

Jika Anda malas menulis `1fr 1fr 1fr 1fr`, gunakan fungsi `repeat()`.

```css
.gallery {
    display: grid;
    /* Membuat 4 kolom yang sama persis */
    grid-template-columns: repeat(4, 1fr);
}