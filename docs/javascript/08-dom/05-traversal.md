---
sidebar_position: 5
title: DOM Traversal
---

# DOM Traversal

Terkadang kita tidak memilih elemen secara langsung, tapi "berjalan" dari elemen lain. Misal: Saat tombol "Hapus" diklik, kita ingin menghapus kartu pembungkusnya.

## Silsilah Keluarga

Misalkan struktur HTML:
```html
<div class="card">
    <h2>Judul</h2>
    <p>Isi artikel</p>
    <button class="btn-hapus">Hapus</button>
</div>
```

### 1. Parent (Orang Tua)

Naik ke atas satu tingkat.

```javascript
const tombol = document.querySelector('.btn-hapus');
const kartu = tombol.parentElement; // Mengambil <div class="card">
```

### 2. Children (Anak)

Mengambil elemen di dalamnya.

```javascript
const kartu = document.querySelector('.card');
const anak = kartu.children; // [h2, p, button]
```

### 3. Sibling (Saudara)

Elemen di sebelah-sebelahnya.

* `nextElementSibling`: Saudara setelahnya (adik).
* `previousElementSibling`: Saudara sebelumnya (kakak).

```javascript
const judul = document.querySelector('h2');
const paragraf = judul.nextElementSibling; // Mengambil <p>
