---
sidebar_position: 2
title: 3 Cara Pasang CSS
---

# 3 Cara Memasang CSS

Ada tiga metode untuk menyisipkan kode CSS ke dalam HTML.

## 1. Inline CSS (Tidak Disarankan)
Menulis CSS langsung di dalam tag HTML.
* **Kekurangan:** Kode jadi kotor dan sulit dirawat. Jangan gunakan ini kecuali terpaksa.

```html
<h1 style="color: blue;">Judul Biru</h1>
```

## 2. Internal CSS (Boleh untuk Latihan)

Menulis CSS di dalam tag `<style>` di bagian `<head>`.

* **Kekurangan:** CSS hanya berlaku untuk satu halaman itu saja.

```html
<head>
    <style>
        h1 { color: green; }
    </style>
</head>
```

## 3. External CSS (Standar Profesional)

Memisahkan kode CSS di file tersendiri (biasanya `style.css`), lalu memanggilnya.

**File: style.css**

```css
h1 {
    color: purple;
}
```

**File: index.html**

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>