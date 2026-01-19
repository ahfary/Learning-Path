---
sidebar_position: 2
title: Elemen Layout Utama
---

# Elemen Layout Utama

Berikut adalah diagram standar struktur halaman web modern menggunakan HTML5.

## Daftar Tag Semantik

| Tag | Fungsi Objektif |
| :--- | :--- |
| `<header>` | Wadah untuk konten pengantar atau navigasi (biasanya berisi Logo, Judul, Navigasi Utama). |
| `<nav>` | Wadah khusus untuk **link navigasi** (menu utama). Tidak semua link harus pakai `<nav>`, hanya yang utama saja. |
| `<main>` | Wadah untuk **konten utama** halaman. **Hanya boleh ada satu `<main>` per halaman.** |
| `<section>` | Wadah untuk mengelompokkan konten yang satu tema (seperti "Bab 1", "Bab 2", atau "Bagian Testimoni"). |
| `<article>` | Wadah untuk konten yang **berdiri sendiri** dan masuk akal jika dipisah dari webnya (seperti satu postingan blog atau satu kartu berita). |
| `<aside>` | Wadah untuk konten pendamping yang tidak terlalu penting (seperti Sidebar, Iklan, atau "Baca Juga"). |
| `<footer>` | Wadah untuk kaki halaman (biasanya berisi Copyright, Peta Situs, Kontak). |

## Contoh Struktur Kode Penuh

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <title>Blog Belajar HTML</title>
</head>
<body>
    <header>
        <h1>Website Belajar Coding</h1>
        <nav>
            <a href="/">Beranda</a> | <a href="/tentang">Tentang</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Belajar HTML Semantik</h2>
            <p>Hari ini kita belajar tentang tag layout...</p>
        </article>

        <section>
            <h3>Komentar</h3>
            <p>Komentar 1: Wah bagus sekali...</p>
        </section>
    </main>

    <aside>
        <h3>Iklan</h3>
        <p>Beli kopi di sini!</p>
    </aside>

    <footer>
        <p>&copy; 2024 Unicode Team.</p>
    </footer>
</body>
</html>
```

:::tip Kapan pakai `<section>` vs `<div>`?
Gunakan `<section>` jika isinya punya judul (heading) dan temanya spesifik.
Gunakan `<div>` jika tujuannya murni hanya untuk **styling** (misal: membungkus dua elemen agar bisa di-flexbox dengan CSS).
:::