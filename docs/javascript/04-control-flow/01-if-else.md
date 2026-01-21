---
sidebar_position: 1
title: If, Else If, Else
---

# If, Else If, Else

Percabangan memungkinkan kode kita untuk "berpikir" dan mengambil keputusan berdasarkan syarat tertentu.

## 1. If (Jika)
Kode di dalam blok `if` hanya akan dijalankan jika syaratnya **Benar** (`true`).

```javascript
const nilai = 80;

if (nilai >= 75) {
    console.log("Selamat, Anda Lulus!");
}
```

## 2. Else (Jika Tidak)

Dijalankan jika syarat `if` **Salah** (`false`). Ini adalah "jalan alternatif".

```javascript
const nilai = 50;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Maaf, coba lagi tahun depan.");
}
```

## 3. Else If (Syarat Tambahan)

Jika ada lebih dari dua kemungkinan keputusan.

```javascript
const nilai = 85;

if (nilai >= 90) {
    console.log("Nilai A (Sangat Baik)");
} else if (nilai >= 80) {
    console.log("Nilai B (Baik)");
} else if (nilai >= 70) {
    console.log("Nilai C (Cukup)");
} else {
    console.log("Nilai D (Remidi)");
}
```

:::warning Hati-hati Urutan!
Program membaca dari atas ke bawah. Jika syarat pertama sudah terpenuhi, syarat di bawahnya **tidak akan dicek lagi**.
:::