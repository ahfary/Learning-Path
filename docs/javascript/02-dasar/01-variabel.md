---
sidebar_position: 1
title: Variabel (Wadah Data)
---

# Variabel (Wadah Data)

Variabel adalah tempat untuk menyimpan data agar bisa digunakan lagi nanti. Bayangkan seperti **kardus** yang kita beri label.

Di JavaScript modern (ES6+), ada aturan emas dalam memilih variabel.

## 1. `const` (Konstanta) - Paling Aman
Gunakan ini sebagai **pilihan pertama**.
* **Sifat:** Nilainya **TIDAK BOLEH** diubah setelah dibuat.
* **Kapan dipakai:** Untuk ID elemen, konfigurasi, rumus matematika, atau data yang memang tidak akan berubah.

```javascript
const nama = "Faqih";
const phi = 3.14;

// nama = "Budi"; // ❌ ERROR! Tidak boleh diganti.
```

## 2. `let` (Fleksibel)

Gunakan ini HANYA jika datanya **akan berubah** nanti.

* **Sifat:** Nilainya boleh diubah-ubah (reassign).
* **Kapan dipakai:** Skor game, status loading, counter loop.

```javascript
let skor = 0;
skor = 10; // ✅ Boleh diganti
skor = 20; // ✅ Boleh diganti lagi
```

## 3. `var` (Masa Lalu)

JANGAN GUNAKAN INI di proyek modern.
`var` memiliki masalah "kebocoran" lingkup (*scope*) yang sering menyebabkan bug yang sulit dilacak.

```javascript
// ⛔ HINDARI PENGGUNAAN INI
var umur = 17;
```

:::tip Best Practice
Selalu deklarasikan variabel dengan **`const`** dulu.
Jika nanti di tengah coding kamu sadar nilainya perlu berubah, baru ganti jadi **`let`**.
:::