---
sidebar_position: 2
title: Macam-macam Komponen
---

# Macam-macam Komponen

Dalam perjalanan Anda belajar React, Anda akan menemukan **3 gaya penulisan** komponen. Meskipun hasilnya sama (menampilkan UI), cara tulisnya berbeda.

## 1. Functional Component (Deklarasi)
Ini adalah cara paling klasik dan "aman" untuk pemula. Menggunakan kata kunci `function` biasa.

* **Kelebihan:** Mudah dibaca, mendukung *Hoisting* (bisa dipanggil sebelum didefinisikan).
* **Penggunaan:** Sering dipakai di dokumentasi resmi lama atau tutorial dasar.

```tsx
// src/components/Header.tsx

function Header() {
  return <header>Ini Header Website</header>;
}

export default Header;
```

## 2. Arrow Function Component (Modern)

Ini adalah standar industri saat ini, terutama jika menggunakan **TypeScript**.

* **Kelebihan:** Sintaks lebih ringkas, sangat cocok dikombinasikan dengan definisi tipe data (Interface).
* **Penggunaan:** Hampir 90% proyek React modern (Next.js, Vite) menggunakan gaya ini.

```tsx
// src/components/Footer.tsx

// Variabel const yang berisi fungsi panah (arrow function)
const Footer = () => {
  return <footer>Copyright 2024</footer>;
};

export default Footer;
```

## 3. Class Component (Legacy / Jadul)

Sebelum tahun 2019 (sebelum ada Hooks), inilah satu-satunya cara membuat komponen yang punya *State*. Sekarang sudah jarang dipakai di proyek baru.

* **Ciri Khas:** Menggunakan `class`, `extends Component`, dan wajib punya method `render()`.
* **Wajib Tahu:** Sekadar untuk pengetahuan jika Anda diminta mengurus kode warisan (*Legacy Code*) di kantor.

```tsx
// src/components/Jadul.tsx
import React, { Component } from 'react';

class Jadul extends Component {
  render() {
    return <div>Ini cara lama yang ribet!</div>;
  }
}

export default Jadul;
```

:::tip Mana yang Harus Dipakai?
Gunakan **Arrow Function Component** (Nomor 2) untuk semua proyek baru Anda. Itu lebih modern, ringkas, dan konsisten dengan ekosistem TypeScript.
:::