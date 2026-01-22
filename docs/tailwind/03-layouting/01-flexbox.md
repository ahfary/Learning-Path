---
sidebar_position: 1
title: Flexbox (1 Dimensi)
---

# Flexbox (1 Dimensi)

Flexbox digunakan untuk mengatur elemen dalam **satu baris** atau **satu kolom**. Ini adalah layout paling umum untuk Navbar, Card, dan tombol.

## 1. Mengaktifkan Flex
Cukup tambahkan class `flex`. Secara default, anak-anaknya akan berjejer ke samping (row).

```html
<div class="flex">
  <div class="p-4 bg-red-500">01</div>
  <div class="p-4 bg-blue-500">02</div>
</div>
```

## 2. Flex Direction (Arah)

Mau disusun ke samping atau ke bawah?

* `flex-row`: Ke samping (Default).
* `flex-col`: Ke bawah (Tumpuk).
* `flex-row-reverse`: Ke samping tapi dibalik (Kanan ke Kiri).

```html
<div class="flex flex-col">
  <a href="#">Home</a>
  <a href="#">About</a>
</div>
```

## 3. Justify Content (Sumbu Utama/X)

Mengatur jarak antar elemen secara horizontal (jika `flex-row`).

* `justify-start`: Rata kiri.
* `justify-center`: Rata tengah.
* `justify-end`: Rata kanan.
* `justify-between`: Kiri-Kanan mentok (tengah kosong). Sering dipakai di Navbar!
* `justify-around`: Ada jarak merata di sekitar elemen.

```html
<div class="flex justify-between bg-gray-800 p-4 text-white">
  <div>Logo Brand</div>
  <div>Menu Login</div>
</div>
```

## 4. Align Items (Sumbu Silang/Y)

Mengatur posisi vertikal elemen (misal: biar teks di tengah-tengah kotak tinggi).

* `items-start`: Nempel atas.
* `items-center`: Rata tengah vertikal (Paling sering dipakai).
* `items-end`: Nempel bawah.

```html
<div class="flex h-32 bg-gray-200 items-center justify-center">
  <p>Saya Tepat di Tengah</p>
</div>
```

## 5. Gap (Jarak Antar Anak)

Lupakan `margin-right` manual. Gunakan `gap` untuk memberi jarak otomatis antar elemen flex.

* `gap-4`: Jarak 16px.
* `gap-x-4`: Jarak horizontal saja.
* `gap-y-4`: Jarak vertikal saja.