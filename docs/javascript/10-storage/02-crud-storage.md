---
sidebar_position: 2
title: Implementasi Code (CRUD)
---

# Implementasi Code (CRUD)

Cara menggunakan `localStorage` dan `sessionStorage` itu sintaksnya 100% sama. Cukup ganti kata depannya saja.

Kita akan gunakan `localStorage` sebagai contoh utama.

## 1. Menyimpan Data (`setItem`)
Formatnya harus: **Kunci (Key)** dan **Nilai (Value)**.

```javascript
// Menyimpan username
localStorage.setItem('username', 'faqih_abqory');

// Menyimpan setting tema
localStorage.setItem('theme', 'dark');
```

## 2. Mengambil Data (`getItem`)

Data yang diambil selalu bertipe **String**.

```javascript
const user = localStorage.getItem('username');
console.log(user); // Output: "faqih_abqory"

// Cek jika data tidak ada
const token = localStorage.getItem('token_rahasia');
if (!token) {
    console.log("User belum login!");
}
```

## 3. Menghapus Data

```javascript
// Hapus satu item spesifik
localStorage.removeItem('username');

// Hapus SEMUA data (Reset Total)
localStorage.clear();
```

---

## Masalah Object & Array (PENTING!)

Web Storage **HANYA** bisa menyimpan String (Teks). Jika kita memaksa menyimpan Object/Array, hasilnya akan rusak (menjadi `"[object Object]"`).

### Solusi: JSON Stringify & Parse

Kita harus mengubah Object menjadi String dulu sebelum disimpan, dan mengubahnya kembali jadi Object saat diambil.

**Cara Simpan (Object -> String):**

```javascript
const userProfile = {
    id: 1,
    nama: "Faqih",
    hobi: ["Coding", "Futsal"]
};

// Gunakan JSON.stringify()
localStorage.setItem('user_data', JSON.stringify(userProfile));
```

**Cara Ambil (String -> Object):**

```javascript
const dataMentah = localStorage.getItem('user_data');

// Gunakan JSON.parse()
const dataAsli = JSON.parse(dataMentah);

console.log(dataAsli.nama); // Output: "Faqih"
console.log(dataAsli.hobi[0]); // Output: "Coding"