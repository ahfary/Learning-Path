---
sidebar_position: 1
title: Pohon Hirarki & Node
---

# Pohon Hirarki & Node

Saat browser memuat halaman web, browser akan membuat **DOM (Document Object Model)** dari halaman tersebut.

DOM memandang dokumen HTML sebagai sebuah **Pohon (Tree)** yang terdiri dari ranting dan daun. Setiap bagian dari HTML (tag, teks, atribut) disebut sebagai **Node**.



## Struktur Hirarki (Tree)
Bayangkan silsilah keluarga:
1.  **Root (Akar):** Element tertinggi, yaitu `<html>`.
2.  **Parent (Orang Tua):** Element yang membungkus element lain. Contoh: `<body>` adalah parent dari `<h1>`.
3.  **Child (Anak):** Element yang ada di dalam parent.
4.  **Sibling (Saudara):** Element yang sejajar dalam satu parent yang sama.

## Jenis-Jenis Node
Di dalam DOM, semuanya adalah Node, tapi tipenya beda-beda:

1.  **Element Node:** Tag HTML itu sendiri (contoh: `<div>`, `<p>`, `<body>`).
2.  **Text Node:** Tulisan yang ada di dalam tag.
3.  **Attribute Node:** Atribut milik tag (contoh: `href`, `class`, `src`).

```javascript
// Kita bisa mengakses seluruh struktur ini lewat object 'document'
console.log(document); // Menampilkan seluruh isi HTML
console.log(document.title); // Mengambil judul tab browser
console.log(document.body); // Mengambil elemen body