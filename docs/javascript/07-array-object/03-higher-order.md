---
sidebar_position: 3
title: Array Methods Dewa (Map, Filter, Find)
---

# Array Methods "Dewa"

Lupakan `for-loop` manual untuk mengolah data. JavaScript punya metode bawaan yang lebih deklaratif dan rapi.

Mari kita pakai contoh data **Array of Objects** (format data paling umum dari API/Database):

```javascript
const products = [
    { id: 1, name: "Laptop", price: 10000, category: "Elektronik" },
    { id: 2, name: "Mouse", price: 200, category: "Elektronik" },
    { id: 3, name: "Baju", price: 100, category: "Fashion" },
];
```

## 1. `map()` - Mengubah Bentuk

Digunakan untuk mengubah **setiap** elemen array menjadi bentuk baru.

* **Hasil:** Array baru dengan jumlah yang SAMA.
* **Contoh:** Mengambil hanya nama produknya saja.

```javascript
const productNames = products.map((item) => {
    return item.name;
});

console.log(productNames); 
// Output: ["Laptop", "Mouse", "Baju"]
```

:::tip Di React
`map` adalah cara standar untuk mengubah data menjadi elemen HTML (Looping Component).
:::

## 2. `filter()` - Menyaring Data

Digunakan untuk mengambil elemen yang **memenuhi syarat** saja.

* **Hasil:** Array baru (bisa lebih sedikit atau kosong).
* **Contoh:** Ambil barang yang harganya di bawah 1000.

```javascript
const cheapItems = products.filter((item) => {
    return item.price < 1000;
});

console.log(cheapItems);
// Output: [{Mouse...}, {Baju...}] (Laptop hilang karena mahal)
```

## 3. `find()` - Mencari Satu Data

Digunakan untuk mencari **satu** elemen pertama yang cocok.

* **Hasil:** Sebuah Object (bukan Array) atau `undefined` jika tidak ketemu.
* **Contoh:** Cari barang dengan ID 2.

```javascript
const specificItem = products.find((item) => {
    return item.id === 2;
});

console.log(specificItem);
// Output: { id: 2, name: "Mouse", ... }
```

## 4. `reduce()` - Merangkum Data (Advanced)

Digunakan untuk menghitung total atau menggabungkan seluruh array menjadi satu nilai.

```javascript
// Menghitung Total Harga Belanja
const totalPrice = products.reduce((total, item) => {
    return total + item.price;
}, 0); // 0 adalah nilai awal total

console.log(totalPrice); // 10300