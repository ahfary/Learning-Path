---
sidebar_position: 2
title: DOM Selection
---

# DOM Selection

Sebelum memanipulasi elemen, kita harus "menangkap"-nya dulu. Ada dua mazhab dalam pemilihan elemen: Cara Lama dan Cara Modern.

## 1. Cara Modern (Rekomendasi)
Metode ini menggunakan selektor CSS (seperti `.class`, `#id`, atau `tag`). Lebih fleksibel dan konsisten.

### `querySelector()`
Memilih **satu** elemen pertama yang ditemukan.
```javascript
// Pilih berdasarkan ID
const judul = document.querySelector('#judul-utama');

// Pilih berdasarkan Class
const tombol = document.querySelector('.btn-primary');

// Pilih berdasarkan Tag
const paragraf = document.querySelector('p');
```

### `querySelectorAll()`

Memilih **semua** elemen yang cocok. Hasilnya berupa `NodeList` (kumpulan node).

```javascript
const semuaList = document.querySelectorAll('li');

// Karena hasilnya banyak, kita harus looping untuk mengubahnya
semuaList.forEach((item) => {
    item.style.color = 'red';
});
```

## 2. Cara Lama (Legacy)

Masih sering ditemukan di tutorial lama. Performanya sedikit lebih cepat tapi kurang fleksibel.

* `document.getElementById('id')` -> Ambil satu via ID.
* `document.getElementsByClassName('class')` -> Ambil banyak via Class.
* `document.getElementsByTagName('tag')` -> Ambil banyak via Tag.