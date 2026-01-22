---
sidebar_position: 1
title: Warna & Typography
---

# Warna & Typography

Tailwind menyediakan palet warna yang sangat lengkap dan tipografi yang siap pakai.

## 1. Warna (Colors)
Format penulisan warna di Tailwind selalu mengikuti pola:
> **Properti** - **NamaWarna** - **Ketebalan (50-950)**

### Background & Text Color
* `bg-blue-500`: Latar belakang biru standar.
* `text-red-600`: Teks merah agak gelap.
* `border-green-400`: Garis tepi hijau.

```html
<button class="bg-blue-500 text-white border-2 border-blue-700">
  Tombol Biru
</button>
```

### Opacity (Transparansi)

Kita bisa menambah garis miring `/` untuk mengatur transparansi (0-100).

* `bg-black/50`: Hitam transparan (50%).

## 2. Typography (Teks)

Mengatur ukuran, ketebalan, dan perataan teks.

### Ukuran Font (Size)

* `text-xs`: Extra Small (12px)
* `text-sm`: Small (14px)
* `text-base`: Normal (16px) - *Default*
* `text-lg`: Large (18px)
* `text-xl`, `text-2xl`, ... `text-9xl`: Makin besar.

### Ketebalan (Weight)

* `font-light`: Tipis
* `font-normal`: Biasa
* `font-bold`: Tebal
* `font-black`: Sangat Tebal

### Perataan (Align)

* `text-left`, `text-center`, `text-right`, `text-justify`.

```html
<h1 class="text-3xl font-bold text-slate-800 text-center">
  Judul Besar di Tengah
</h1>