---
sidebar_position: 1
title: 5 Jenis Position
---

# 5 Jenis Property Position

Secara default, elemen HTML itu "sopan". Mereka antre satu per satu dari atas ke bawah. Properti `position` mengizinkan kita untuk membuat elemen menjadi "pemberontak".

## 1. Static (Default)
Posisi bawaan. Elemen mengikuti aturan normal. Properti `top`, `left`, `right`, `bottom` **tidak akan berfungsi**.

```css
.kotak {
    position: static;
}
```

## 2. Relative (Si Pemalas)

Elemen ini bisa digeser, tapi **tempat aslinya tetap dipesan** (tidak diisi elemen lain).

* Fungsi Utama: Biasanya digunakan pada **Parent** (Induk) untuk menjadi patokan bagi anak yang `absolute`.

```css
.induk {
    position: relative;
    top: 20px; /* Geser ke bawah 20px dari posisi normalnya */
}
```

## 3. Absolute (Si Bebas)

Elemen ini keluar dari antrean normal. Dia bebas bergerak ke mana saja.

* **Patokan:** Dia akan memosisikan diri berdasarkan **Induk terdekat** yang memiliki posisi `relative`.
* Jika tidak ada induk `relative`, dia akan nempel ke `body` (layar browser).

```css
.anak-nakal {
    position: absolute;
    top: 0;
    right: 0; /* Nempel di pojok kanan atas Induknya */
}
```

## 4. Fixed (Si Keras Kepala)

Elemen ini menempel pada **Layar Browser** (Viewport).

* Efek: Walaupun halaman di-scroll, dia **tidak ikut bergerak**.
* Contoh: Tombol "Chat WA", Navbar, atau Iklan yang mengganggu.

```css
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
}
```

## 5. Sticky (Si Bunglon)

Gabungan antara `relative` dan `fixed`.

* Saat awal, dia diam di posisinya.
* Saat di-scroll dan menyentuh batas tertentu, dia berubah jadi `fixed` (nempel).

```css
.header-tabel {
    position: sticky;
    top: 0; /* Akan nempel pas scroll mencapai titik 0 */
}