---
sidebar_position: 2
title: While & Do While
---

# While & Do While

Jika `For Loop` fokus pada **jumlah**, maka `While Loop` fokus pada **kondisi**.

## 1. While Loop
Prinsip: "Selama syaratnya BENAR, jalankan terus."
* Cocok jika kita **tidak tahu** berapa kali looping akan terjadi (misal: menunggu data loading selesai).

```javascript
let nyawa = 3;

while (nyawa > 0) {
    console.log("Masih hidup! Nyawa sisa: " + nyawa);
    nyawa--; // PENTING: Harus ada pengurangan agar tidak looping selamanya!
}

console.log("Game Over");
```

:::danger Hati-hati Infinite Loop!
Jika Anda lupa menulis `nyawa--` (pengubah kondisi), komputer akan terjebak dalam lingkaran setan selamanya dan browser Anda akan *hang* (macet).
:::

## 2. Do While Loop

Mirip `while`, tapi pengecekan syarat dilakukan **di akhir**.

* **Efek:** Kode DIJAMIN berjalan **minimal 1 kali**, meskipun syaratnya salah dari awal.

```javascript
let i = 100;

do {
    console.log("Saya pasti muncul sekali, walau i sudah 100");
    i++;
} while (i < 5);