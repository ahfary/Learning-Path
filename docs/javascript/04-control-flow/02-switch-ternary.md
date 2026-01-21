---
sidebar_position: 2
title: Switch & Ternary
---

# Switch & Ternary

Selain `if-else`, JavaScript punya cara lain untuk mengambil keputusan yang lebih ringkas.

## 1. Switch Statement
Cocok digunakan jika kita membandingkan **satu variabel** dengan **banyak nilai pasti** (bukan rentang angka).

```javascript
const hari = "Senin";

switch (hari) {
    case "Senin":
        console.log("Saatnya upacara bendera");
        break; // Wajib pakai break agar tidak bablas ke bawah
    case "Minggu":
        console.log("Waktunya libur!");
        break;
    default: // Mirip 'else'
        console.log("Hari kerja biasa");
}
```

## 2. Ternary Operator (`? :`)

Ini adalah bentuk singkat dari `if-else`. Sangat sering dipakai di **React.js** untuk menampilkan elemen secara kondisional.

**Rumus:**

> `Syarat ? (Jika Benar) : (Jika Salah)`

**Contoh Biasa (If-Else):**

```javascript
let status;
const umur = 18;

if (umur >= 17) {
    status = "Dewasa";
} else {
    status = "Anak-anak";
}
```

**Contoh Ternary (1 Baris):**

```javascript
const umur = 18;
const status = umur >= 17 ? "Dewasa" : "Anak-anak";

console.log(status); // Output: "Dewasa"
```

:::tip Kapan Pakai Ternary?
Gunakan Ternary untuk logika sederhana (A atau B). Jika logikanya rumit dan panjang, tetap gunakan `if-else` biasa agar kode mudah dibaca.
:::