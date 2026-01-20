---
sidebar_position: 2
title: Cara Pasang JS
---

# Cara Memasang JavaScript

Ada 3 cara menyisipkan kode JS ke dalam HTML.

## 1. Inline JS (Jarang Dipakai)
Menulis langsung di dalam atribut HTML.
```html
<button onclick="alert('Hello!')">Klik Saya</button>

```

## 2. Internal JS (Untuk Latihan)

Menulis di dalam tag `<script>` di file HTML yang sama.

* **Posisi Terbaik:** Letakkan **sebelum tag penutup `</body>**` (paling bawah), agar HTML selesai dimuat dulu baru skrip dijalankan.

```html
<body>
    <h1>Judul Website</h1>
    
    <script>
        console.log("Skrip dijalankan!");
    </script>
</body>

```

## 3. External JS (Standar Profesional)

Memisahkan kode di file `.js` tersendiri.

**File: script.js**

```javascript
console.log("Halo dari file eksternal");
```

**File: index.html**

```html
<body>
    <script src="script.js"></script>
</body>