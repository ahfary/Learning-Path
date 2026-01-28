---
sidebar_position: 1
title: Pengenalan React & JSX
---

# Pengenalan React & JSX

React adalah *library* JavaScript untuk membangun antarmuka pengguna (UI) berbasis **Komponen**.

## 1. Konsep Komponen (LEGO)
Bayangkan website Anda seperti susunan LEGO.
* Ada kepingan "Header".
* Ada kepingan "Tombol".
* Ada kepingan "Sidebar".

Di React, kita membuat kepingan-kepingan kode kecil tersebut, lalu menyusunnya menjadi satu halaman utuh.

## 2. JSX (JavaScript XML)
Ini adalah "Bahasa Alien" yang dipakai React. Terlihat seperti HTML, tapi sebenarnya ini adalah JavaScript!

```tsx
// Ini bukan string HTML biasa, ini JSX!
const elemen = <h1>Halo, Dunia!</h1>;

```

### Aturan JSX

1. **Wajib Satu Induk:** Sebuah komponen harus mengembalikan **satu elemen pembungkus** (biasanya `<div>` atau `<>...</>`).
2. **CamelCase:** Atribut HTML berubah nama. `class` menjadi `className`, `onclick` menjadi `onClick`.
3. **Javascript Expression:** Kita bisa menyisipkan variabel JS di dalam HTML menggunakan kurung kurawal `{}`.

```tsx
const nama = "Faqih";
const elemen = <h1 className="judul">Halo, {nama}</h1>;