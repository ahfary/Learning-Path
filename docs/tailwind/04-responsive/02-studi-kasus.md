---
sidebar_position: 2
title: Studi Kasus Responsif
---

# Studi Kasus Responsif

Mari kita lihat bagaimana Tailwind menangani perubahan layout yang kompleks dengan sangat mudah.

## 1. Grid Card Responsif
Skenario umum:
* Di **HP**: 1 Kolom (Tumpuk).
* Di **Tablet**: 2 Kolom.
* Di **Laptop**: 3 Kolom.
* Di **Monitor Besar**: 4 Kolom.

**Kode Tailwind:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <div class="bg-blue-200 p-4">Kartu 1</div>
    <div class="bg-blue-200 p-4">Kartu 2</div>
    <div class="bg-blue-200 p-4">Kartu 3</div>
    <div class="bg-blue-200 p-4">Kartu 4</div>
</div>
```

## 2. Menyembunyikan Elemen (Navbar)

Skenario: Tombol "Menu Hamburger" (☰) hanya muncul di HP, tapi hilang di Laptop. Sebaliknya, Menu Link muncul di Laptop, hilang di HP.

* `hidden`: Sembunyi (Display: none).
* `block`: Muncul (Display: block).
* `flex`: Muncul (Display: flex).

**Kode:**

```html
<nav class="flex justify-between p-4 bg-gray-800 text-white">
    <div>Logo</div>
    
    <button class="block md:hidden">
        ☰
    </button>
    
    <ul class="hidden md:flex gap-4">
        <li>Home</li>
        <li>About</li>
    </ul>
</nav>
```

## 3. Mengubah Ukuran Teks

Teks judul biasanya besar di Laptop, tapi harus mengecil di HP agar tidak "memakan tempat".

```html
<h1 class="text-xl md:text-3xl lg:text-5xl font-bold">
    Judul Responsif
</h1>