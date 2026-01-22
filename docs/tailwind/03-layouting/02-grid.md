---
sidebar_position: 2
title: Grid System (2 Dimensi)
---

# Grid System (2 Dimensi)

Jika Flexbox untuk 1 baris, Grid digunakan untuk mengatur layout **2 dimensi** (Baris & Kolom) secara bersamaan. Sangat cocok untuk Galeri Foto, Dashboard, atau Kartu Produk.



## 1. Konsep Kolom (`grid-cols`)
Pertama, aktifkan dengan `grid`, lalu tentukan mau dibagi berapa kolom.

* `grid-cols-1`: 1 Kolom (Tumpuk ke bawah).
* `grid-cols-2`: 2 Kolom.
* `grid-cols-3`: 3 Kolom.
* ... sampai `grid-cols-12`.

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-red-200 p-4">1</div>
  <div class="bg-red-200 p-4">2</div>
  <div class="bg-red-200 p-4">3</div>
  <div class="bg-red-200 p-4">4 (Otomatis turun ke baris baru)</div>
</div>
```

## 2. Col Span (Menggabungkan Kolom)

Bagaimana jika satu elemen ingin mengambil lebar 2 kolom sekaligus? Gunakan `col-span`.

* `col-span-2`: Memakan 2 slot kolom.
* `col-span-full`: Memakan semua slot (lebar penuh).

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500 col-span-3 p-4">Header (Full Width)</div>
  
  <div class="bg-green-500 col-span-1 p-4">Sidebar</div>
  
  <div class="bg-yellow-500 col-span-2 p-4">Main Content</div>
</div>
```

## 3. Row Span (Menggabungkan Baris)

Sama seperti col-span, tapi ini menggabungkan ke bawah (vertikal).

* `row-span-2`: Memakan 2 baris ke bawah.

```html
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 bg-purple-500">Gambar Besar Kiri</div>
  <div class="col-span-2 bg-pink-500">Judul Kanan</div>
  <div class="row-span-2 col-span-2 bg-pink-300">Deskripsi Kanan</div>
</div>
```

:::tip Flex vs Grid

* Gunakan **Flexbox** untuk komponen kecil (Tombol + Ikon, Navbar, Menu).
* Gunakan **Grid** untuk kerangka halaman besar (Layout Dashboard, Galeri Produk).
:::