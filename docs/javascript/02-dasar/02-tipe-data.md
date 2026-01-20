---
sidebar_position: 2
title: Tipe Data Dasar
---

# Tipe Data Dasar

Di JavaScript, kita tidak perlu menulis tipe datanya secara manual (seperti `int`, `string` di bahasa lain). JavaScript cukup pintar untuk menebaknya.

## 1. String (Teks)
Wajib diapit tanda kutip. Ada 3 cara menulisnya:

```javascript
// 1. Kutip Dua (Standar)
const nama = "Faqih";

// 2. Kutip Satu (Sama saja)
const hobi = 'Coding';

// 3. Backtick / Template Literal (Paling Sakti)
// Bisa menyisipkan variabel di dalamnya pakai ${...}
const sapaan = `Halo, nama saya ${nama} dan hobi saya ${hobi}`;
```

## 2. Number (Angka)

Semua angka, baik bulat (`10`) maupun desimal (`3.14`), dianggap sebagai tipe `Number`.

```javascript
const umur = 17;
const berat = 55.5;
const harga = 15000;

// Bisa dipakai matematika langsung
const total = harga + 2000; 
```

## 3. Boolean (Logika)

Hanya punya dua nilai: **Benar** atau **Salah**. Ini adalah jantung dari pengondisian (If-Else).

```javascript
const isLulus = true;  // Ya
const isGagal = false; // Tidak

// Contoh penggunaan:
if (isLulus) {
  console.log("Selamat!");
}
```

## Cek Tipe Data

Bingung sebuah variabel isinya apa? Gunakan `typeof`.

```javascript
console.log(typeof "Halo"); // Output: "string"
console.log(typeof 100);    // Output: "number"
console.log(typeof true);   // Output: "boolean"