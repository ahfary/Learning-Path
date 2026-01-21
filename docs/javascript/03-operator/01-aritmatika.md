---
sidebar_position: 1
title: Aritmatika (Matematika)
---

# Operator Aritmatika

Ini adalah simbol matematika dasar yang digunakan untuk menghitung angka.

## Simbol Dasar

| Simbol | Fungsi | Contoh | Hasil |
| :--- | :--- | :--- | :--- |
| `+` | Tambah | `10 + 5` | `15` |
| `-` | Kurang | `10 - 5` | `5` |
| `*` | Kali | `10 * 5` | `50` |
| `/` | Bagi | `10 / 2` | `5` |
| `**` | Pangkat | `2 ** 3` | `8` (2x2x2) |

## Operator Unik

### 1. Modulo (`%`) - Sisa Bagi
Simbol persen **bukan** untuk menghitung persentase, melainkan **Sisa Bagi**.
Sering dipakai untuk menentukan ganjil/genap.

```javascript
console.log(10 % 3); 
// Hasil: 1 
// (Karena 10 dibagi 3 dapat 3, sisanya 1)

console.log(4 % 2); 
// Hasil: 0 
// (Habis dibagi, berarti Genap)
```

### 2. Increment (`++`) & Decrement (`--`)

Jalan pintas untuk menambah atau mengurangi 1 angka.

```javascript
let skor = 0;

skor++; // Artinya: skor = skor + 1
console.log(skor); // 1

skor--; // Artinya: skor = skor - 1
console.log(skor); // 0