---
sidebar_position: 2
title: Fitur Modern (Spread & Destructuring)
---

# Fitur Modern (ES6+)

JavaScript modern (ES6) memperkenalkan cara memanipulasi Array dan Object yang sangat ringkas. Anda akan menggunakan ini setiap hari di **React**.

## 1. Spread Operator (`...`)
Digunakan untuk "mengkopi" atau "menggabungkan" data.
* **Simbol:** Tiga titik `...`

### Menggabungkan Array
```javascript
const buahLokal = ["Mangga", "Pisang"];
const buahImpor = ["Apel", "Anggur"];

// Menggabungkan jadi satu list baru
const semuaBuah = [...buahLokal, ...buahImpor]; 
// Hasil: ["Mangga", "Pisang", "Apel", "Anggur"]
```

### Mengkopi Object (Immutability)

Di React, kita dilarang mengubah data secara langsung. Kita harus membuat kopiannya dulu.

```javascript
const userLama = { nama: "Faqih", role: "User" };

// Bikin user baru, copy data lama, TAPI ganti role-nya
const userBaru = { ...userLama, role: "Admin" };

console.log(userBaru); // { nama: "Faqih", role: "Admin" }
```

## 2. Destructuring (Bongkar Muat)

Cara cepat mengambil isi Array/Object tanpa mengetik ulang berulang kali.

### Destructuring Object

**Cara Lama (Ribet):**

```javascript
const mhs = { nama: "Budi", ipk: 3.5 };
const nama = mhs.nama;
const ipk = mhs.ipk;
```

**Cara Modern:**

```javascript
const mhs = { nama: "Budi", ipk: 3.5 };

// Ambil properti 'nama' dan 'ipk' lalu jadikan variabel
const { nama, ipk } = mhs; 

console.log(nama); // "Budi"
```

### Destructuring Array

```javascript
const warna = ["Merah", "Kuning", "Hijau"];

// Urutan menentukan nama variabel
const [merah, kuning, hijau] = warna;

console.log(merah); // "Merah"