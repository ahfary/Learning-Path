---
sidebar_position: 2
title: Instalasi & Setup
---

# Instalasi & Setup

Ada dua cara utama menggunakan Tailwind.

## 1. Play CDN (Untuk Belajar/Coba-coba)
Cara ini paling cepat, cukup tempel script di `<head>`.
* **Kekurangan:** Tidak bisa fitur canggih (autocomplete, custom config).
* **Jangan dipakai di Production!**

```html
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
    </head>
    <body>
        <h1 class="text-3xl font-bold underline text-blue-600">
            Hello world!
        </h1>
    </body>
</html>
```

## 2. Tailwind CLI (Standar Industri)

Ini cara yang wajib Anda pelajari untuk proyek serius (React, Next.js, Laravel).

1. **Install via Terminal:**
```bash
npm install -D tailwindcss
npx tailwindcss init
```


2. **Konfigurasi `tailwind.config.js`:**
Beri tahu Tailwind di mana file HTML kita berada.
```javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { extend: {} },
  plugins: [],
}
```


3. **Masukkan ke CSS Utama:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```