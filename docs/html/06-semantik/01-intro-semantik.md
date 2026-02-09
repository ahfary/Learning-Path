---
sidebar_position: 1
title: Apa itu Semantik?
---

# Apa itu HTML Semantik?

Secara bahasa, **Semantik** berarti "ilmu tentang makna".

Dalam HTML, *Semantic Elements* adalah elemen yang **menjelaskan isinya** kepada browser dan pengembang.

## Non-Semantik vs Semantik

Perhatikan perbandingan dua kode di bawah ini yang secara visual (tampilan) mungkin terlihat sama persis di layar, tetapi berbeda maknanya bagi mesin.

### 1. Non-Semantik (Cara Lama/Buruk)
<img
  src="/img/modul/html/non-semantik.png"
  alt="Struktur HTML Non-Semantik Menggunakan Div"
  style={{ width: '70%', maxWidth: '600px', borderRadius: '8px', margin: '16px auto', display: 'block' }}
/>

<small>
Struktur HTML non-semantik (menggunakan &lt;div&gt;)
</small>
Menggunakan tag generik `<div>` untuk segalanya. Browser tidak tahu mana yang judul, mana yang konten, mana yang menu.

```html
<div id="header"> Judul Website </div>
<div id="menu"> Link 1 | Link 2 </div>
<div id="content"> Isi artikel... </div>
<div id="footer"> Copyright 2024 </div>
```

### 2. Semantik (Standar HTML5)
<img
src="/img/modul/html/semantik.jpg"
alt="Struktur HTML Semantik HTML5"
style={{ width: '70%', maxWidth: '600px', borderRadius: '8px', margin: '16px auto', display: 'block' }}
/>

<small> Struktur HTML semantik (HTML5) </small>

Menggunakan tag khusus yang memiliki arti.

```html
<header> Judul Website </header>
<nav> Link 1 | Link 2 </nav>
<main> Isi artikel... </main>
<footer> Copyright 2024 </footer>
```

## Mengapa Harus Semantik?

1. **SEO (Search Engine Optimization):** Google memberi nilai lebih pada konten di dalam `<main>` atau `<article>` daripada sekadar di dalam `<div>`.
2. **Aksesibilitas:** Pembaca layar (*screen reader*) untuk tunanetra bisa langsung melompat ke bagian "Navigasi" atau "Konten Utama" tanpa harus membaca seluruh kode.
3. **Keterbacaan Kode:** Programmer lain lebih mudah memahami struktur kode Anda.