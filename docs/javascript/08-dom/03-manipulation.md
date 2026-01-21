---
sidebar_position: 3
title: DOM Manipulation
---

# DOM Manipulation

Setelah elemen berhasil ditangkap, kita bisa memanipulasinya sesuka hati.

## 1. Mengubah Isi Konten
* **`element.innerHTML`**: Mengubah isi **termasuk** tag HTML di dalamnya.
* **`element.textContent`**: Mengubah hanya **teks**-nya saja (lebih aman dari hack XSS).

```javascript
const judul = document.querySelector('h1');

judul.textContent = "Judul Baru dari JS"; 
judul.innerHTML = "<em>Judul Miring</em>"; 
```

## 2. Mengubah Style (CSS)

Kita bisa menyuntikkan CSS langsung ke elemen (`inline style`).

* **Aturan:** Properti CSS yang pakai strip (`background-color`) diubah jadi CamelCase (`backgroundColor`).

```javascript
const kotak = document.querySelector('.box');

kotak.style.backgroundColor = 'red';
kotak.style.fontSize = '20px';
kotak.style.display = 'none'; // Menghilangkan elemen
```

## 3. Manipulasi Class (Paling Penting!)

Daripada tulis CSS manual di JS (ribet), lebih baik kita mainkan Class-nya.

```javascript
const body = document.body;

// Menambah Class
body.classList.add('dark-mode');

// Menghapus Class
body.classList.remove('light-mode');

// Toggle (Saklar: Kalau ada dihapus, kalau gak ada ditambah)
body.classList.toggle('active');