---
sidebar_position: 2
title: Arrow Function (ES6)
---

# Arrow Function (ES6)

Sejak tahun 2015 (ES6), JavaScript memperkenalkan cara baru menulis fungsi yang lebih singkat menggunakan tanda panah `=>`. Ini sangat populer di framework modern seperti **React**.

## Perbandingan Sintaks

### Cara Lama (Function Declaration)
```javascript
function hitungLuas(p, l) {
    return p * l;
}
```

### Cara Baru (Arrow Function)

Kita menyimpan fungsi ke dalam variabel `const`.

```javascript
const hitungLuas = (p, l) => {
    return p * l;
};
```

## Fitur Spesial: Implicit Return

Jika isi fungsi **hanya satu baris**, kita bisa menghapus kurung kurawal `{}` dan kata kunci `return`. Kodenya jadi super bersih!

```javascript
// Versi super singkat
const hitungLuas = (p, l) => p * l;

console.log(hitungLuas(5, 10)); // 50
```

## Studi Kasus: React Component

Nanti saat belajar React, Anda akan sering melihat kode seperti ini:

```javascript
// Ini adalah komponen React (Fungsi juga!)
const Tombol = () => {
    return <button>Klik Saya</button>;
};
```

:::tip Kapan pakai Arrow Function?
Gunakan **Arrow Function** untuk hampir semua situasi modern, terutama saat membuat *callback* atau coding di React. Gunakan `function` biasa hanya jika Anda butuh fitur spesifik seperti `this` context (yang jarang dipakai pemula).
:::