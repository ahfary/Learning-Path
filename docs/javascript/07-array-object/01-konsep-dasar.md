---
sidebar_position: 1
title: Konsep Array & Object
---

# Konsep Array & Object

Variabel biasa (`const nama = "Budi"`) hanya bisa menyimpan satu data. Bagaimana jika kita punya 1000 data? Kita butuh wadah yang lebih canggih.

## 1. Array (Daftar/List)
Array digunakan untuk menyimpan banyak data secara **berurutan**.
* **Ciri:** Menggunakan kurung siku `[]`.
* **Akses:** Menggunakan **Index** (dimulai dari 0).

```javascript
// Membuat Array
const hobi = ["Coding", "Gaming", "Reading"];

// Mengakses Data
console.log(hobi[0]); // Output: "Coding"
console.log(hobi[2]); // Output: "Reading"

// Mengubah Data
hobi[1] = "Sleeping"; // "Gaming" diganti "Sleeping"
```

### Method Dasar Array

* `push()`: Menambah data di **akhir**.
* `pop()`: Menghapus data di **akhir**.
* `unshift()`: Menambah data di **depan** (geser index).
* `shift()`: Menghapus data di **depan**.

```javascript
const angka = [1, 2, 3];
angka.push(4);    // [1, 2, 3, 4]
angka.pop();      // [1, 2, 3]
```

## 2. Object (Kamus/Dictionary)

Object digunakan untuk menyimpan data yang memiliki **label** (properti). Urutan tidak penting di sini.

* **Ciri:** Menggunakan kurung kurawal `{}`.
* **Akses:** Menggunakan **Key** (kunci).

```javascript
// Membuat Object
const user = {
    nama: "Faqih",
    umur: 24,
    isMember: true,
    alamat: { // Nested Object (Object di dalam Object)
        kota: "Jakarta",
        negara: "Indonesia"
    }
};

// Mengakses Data
console.log(user.nama);       // Cara Dot (Paling umum)
console.log(user["umur"]);    // Cara Bracket (Jika key ada spasi/dinamis)
console.log(user.alamat.kota); // Akses nested: "Jakarta"
```

### Method: `this` Keyword

Object bisa punya function di dalamnya (disebut *Method*). `this` mengacu pada object itu sendiri.

```javascript
const robot = {
    nama: "Terminator",
    sapa: function() {
        // 'this.nama' mengambil data dari robot ini
        return "Halo, saya " + this.nama;
    }
};

console.log(robot.sapa()); // "Halo, saya Terminator"