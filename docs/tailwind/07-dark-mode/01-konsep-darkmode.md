---
sidebar_position: 1
title: Konsep & Konfigurasi
---

# Konsep & Konfigurasi

Tailwind memiliki varian `dark:` yang memungkinkan kita mengubah gaya elemen saat Mode Gelap aktif.

## Cara Kerja
Sama seperti `hover:` atau `md:`, kita cukup menambahkan prefix `dark:` di depan nama kelas.

```html
<div class="bg-white dark:bg-slate-900 text-black dark:text-white p-4">
  <h1>Halo, Dunia!</h1>
  <p class="text-slate-500 dark:text-slate-400">
    Ini adalah contoh paragraf yang adaptif.
  </p>
</div>
```

## Konfigurasi Wajib

Secara default, Tailwind menggunakan settingan sistem operasi (jika laptop Anda dark mode, website ikut dark mode).
Tapi biasanya kita ingin memberi **Tombol Switch** agar user bisa memilih sendiri.

Untuk itu, kita harus mengubah mode deteksinya menjadi **'class'**.

Buka file `tailwind.config.js` Anda:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tambahkan baris ini:
  darkMode: 'class', 
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

:::info Artinya Apa?
Dengan `darkMode: 'class'`, Tailwind hanya akan mengaktifkan gaya `dark:` JIKA di tag `<html>` ada class `dark`.

* `<html class="dark">` -> Mode Gelap Aktif.
* `<html>` -> Mode Terang Aktif.
:::