---
sidebar_position: 2
title: Perbandingan & Logika
---

# Perbandingan & Logika

Operator ini tidak menghasilkan angka, melainkan menghasilkan **Boolean** (`true` atau `false`).

## 1. Operator Perbandingan

| Simbol | Arti | Contoh | Hasil |
| :--- | :--- | :--- | :--- |
| `>` | Lebih Besar | `10 > 5` | `true` |
| `<` | Lebih Kecil | `10 < 5` | `false` |
| `>=` | Lebih Besar Sama Dengan | `8 >= 8` | `true` |
| `<=` | Lebih Kecil Sama Dengan | `5 <= 3` | `false` |

### Hati-hati: `==` vs `===`

* **`==` (Sama Longgar):** Hanya mengecek nilainya, tipe data diabaikan.
* **`===` (Sama Ketat):** Mengecek nilai DAN tipe datanya. **(Gunakan ini selalu!)**

```javascript
const angka = 5;
const teks = "5";

console.log(angka == teks);  // true (Padahal satu angka, satu teks)
console.log(angka === teks); // false (Tipe beda, jadi dianggap beda)
```

---

## 2. Operator Logika (Logic Gate)

Digunakan untuk menggabungkan dua syarat atau lebih.

### AND (`&&`)

Semua syarat harus **BENAR**.

* Contoh: Login berhasil jika (Email Benar) **DAN** (Password Benar).

```javascript
const punyaTiket = true;
const sudahVaksin = true;

// Keduanya harus true agar hasilnya true
const bolehMasuk = punyaTiket && sudahVaksin; 
```

### OR (`||`)

Salah satu syarat saja **BENAR**, maka dianggap benar.

* Contoh: Diskon berlaku jika (Member) **ATAU** (Belanja > 1 Juta).

```javascript
const isMember = false;
const belanjaBanyak = true;

// Salah satu true, hasilnya true
const dapatDiskon = isMember || belanjaBanyak;
```

### NOT (`!`)

Membalikkan nilai (Benar jadi Salah, Salah jadi Benar).

```javascript
const isLapar = true;
const isKenyang = !isLapar; // false