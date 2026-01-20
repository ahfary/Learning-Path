---
sidebar_position: 2
title: Grouping & Kombinasi
---

# Grouping & Kombinasi

Setelah paham selector dasar, kita bisa menggabungkan mereka untuk kode yang lebih rapi.

## 1. Grouping Selector (Koma `,`)
Jika Anda punya beberapa elemen yang gayanya sama persis, jangan tulis berulang-ulang. Gabungkan saja dengan koma.

**Cara Boros:**
```css
h1 { color: navy; }
h2 { color: navy; }
h3 { color: navy; }
```

**Cara Efisien (Grouping):**

```css
h1, h2, h3 {
    color: navy;
}
```

## 2. Universal Selector (Bintang `*`)

Memilih **seluruh** elemen di halaman. Biasanya digunakan untuk mereset margin/padding bawaan browser.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## 3. Descendant Selector (Spasi)

Memilih elemen yang berada **di dalam** elemen lain.

* **Simbol:** Spasi ( )

Contoh: Kita ingin mengubah warna link `<a>`, tapi **hanya** yang ada di dalam navigasi, bukan di dalam artikel.

```css
/* Baca: Carikan tag <a> yang ada DI DALAM tag <nav> */
nav a {
    color: white;
    text-decoration: none;
}
```

```html
<nav>
    <a href="#">Link ini putih</a> </nav>

<p>
    <a href="#">Link ini standar (biru)</a> </p>
```