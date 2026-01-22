---
sidebar_position: 1
title: "@apply Directive (Ringkas Kode)"
---

# @apply Directive

Salah satu kritik utama Tailwind adalah kode HTML menjadi kotor dan sangat panjang.
Fitur `@apply` memungkinkan kita membuat **Custom Class** sendiri di file CSS, tapi tetap menggunakan kekuatan utility Tailwind.

## Masalah: Class Terlalu Panjang
Misalkan kita punya tombol yang dipakai di banyak tempat:

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Tombol Login
</button>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Tombol Register
</button>
```

## Solusi: Ekstrak ke CSS

Buka file CSS utama Anda (tempat Anda menaruh `@tailwind base`), lalu tambahkan kode ini:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Class Baru */
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}
```

## Hasil: HTML Bersih

Sekarang di HTML, Anda cukup memanggil nama kelas barunya.

```html
<button class="btn-primary">
  Tombol Login
</button>

<button class="btn-primary">
  Tombol Register
</button>
```

:::warning Jangan Berlebihan
Jangan gunakan `@apply` untuk **setiap** elemen. Gunakan hanya untuk komponen yang benar-benar sering dipakai berulang (seperti Tombol, Input Form, atau Card).
Jika dipakai berlebihan, Anda malah kembali ke cara lama (CSS Tradisional) dan kehilangan fleksibilitas Tailwind.
:::