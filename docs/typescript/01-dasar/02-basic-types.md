---
sidebar_position: 2
title: Tipe Data Primitif
---

# Tipe Data Primitif

Cara mendeklarasikan variabel di TS adalah dengan titik dua `:` diikuti tipe datanya.

## 1. String, Number, Boolean
Tiga tipe paling dasar.

```typescript
let nama: string = "Faqih";
let umur: number = 25;
let isLapar: boolean = true;

// ❌ Error: Gak boleh ganti tipe
// nama = 100; 
```

## 2. Any (Jalan Pintas / "Dosa")

`any` artinya "Terserah". Ini mematikan fitur pengecekan TS.

* **Gunakan:** Hanya saat kepepet atau migrasi dari JS lama.
* **Hindari:** Di kode baru, karena sama aja balik jadi JS biasa.

```typescript
let dataAcak: any = "Halo";
dataAcak = 100; // Boleh (karena any)
dataAcak = true; // Boleh
```

## 3. Union Type (Gabungan)

Sebuah variabel bisa menerima lebih dari satu tipe. Gunakan tanda pipa `|`.

```typescript
let idUser: string | number;

idUser = 101;       // Boleh
idUser = "USR-101"; // Boleh
// idUser = true;   // Error
```

## 4. Array

Kita harus tentukan isi array-nya tipe apa.

```typescript
// Cara 1: Tipe[]
let hobi: string[] = ["Coding", "Gaming"];

// Cara 2: Array<Tipe>
let nilai: Array<number> = [80, 90, 100];

// ❌ Error
// hobi.push(10); // Gak boleh masukin angka ke array string
```