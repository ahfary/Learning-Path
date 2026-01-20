---
sidebar_position: 2
title: Box Sizing (Matematika CSS)
---

# Box Sizing

Secara bawaan (*default*), cara CSS menghitung lebar elemen itu sering membingungkan pemula.

## Masalah: Content-Box (Default)
Jika Anda mengatur `width: 200px` dan `padding: 20px`, maka lebar asli elemen di layar **bukan 200px**, melainkan **240px**.

**Rumus Lama:**
> Lebar Asli = Width + Padding Kiri + Padding Kanan + Border Kiri + Border Kanan

Ini membuat tata letak sering "pecah" atau turun ke bawah karena ukurannya lebih besar dari dugaan.

## Solusi: Border-Box (Modern)
Dengan properti `box-sizing: border-box`, lebar elemen akan dikunci total.

Jika Anda set `width: 200px`, maka totalnya tetap **200px**. Browser yang akan otomatis mengecilkan area konten agar padding dan border muat di dalamnya.

```css
/* RESET WAJIB UNTUK PROYEK MODERN */
* {
    box-sizing: border-box;
}

.kotak-modern {
    width: 200px;  /* Lebar total DIJAMIN 200px */
    padding: 20px; /* Tidak akan menambah lebar total */
    border: 5px solid black;
}
```

:::tip Best Practice
Selalu tambahkan kode `* { box-sizing: border-box; }` di baris paling atas file CSS Anda. Ini akan menyelamatkan hidup Anda dari pusing menghitung piksel!
:::