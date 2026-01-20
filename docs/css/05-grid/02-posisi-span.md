---
sidebar_position: 2
title: Posisi & Span
---

# Menggabungkan Sel (Span)

Kekuatan utama Grid adalah kemampuan elemen anak untuk "melebar" melintasi beberapa kolom atau baris (mirip fitur *Merge Cells* di Tabel/Excel).

## Grid Lines (Garis Grid)
Grid menghitung posisi berdasarkan **Garis**, bukan kolom.
* Jika ada 3 kolom, maka ada **4 garis** (Garis 1, 2, 3, dan 4).



## Grid Column & Row
Kita bisa mengatur elemen mulai dari garis berapa sampai garis berapa.

```css
.header {
    background: red;
    /* Mulai dari garis 1, berakhir di garis 4 (Full lebar 3 kolom) */
    grid-column-start: 1;
    grid-column-end: 4;
    
    /* Cara Singkat (Shorthand): */
    /* grid-column: 1 / 4; */
}

.sidebar {
    background: blue;
    /* Memakan 2 baris ke bawah */
    grid-row: 1 / 3; 
}
```

### Kata Kunci `span`

Agar tidak pusing menghitung garis, gunakan kata kunci `span` (rentang).

```css
.iklan-lebar {
    /* "Saya mau lebar 2 kolom, terserah mulai dari mana" */
    grid-column: span 2;
}
```

:::tip Kapan pakai Flexbox vs Grid?

* **Flexbox:** Jika layoutnya **1 Dimensi** (baris saja ATAU kolom saja). Contoh: Navbar, deretan tombol.
* **Grid:** Jika layoutnya **2 Dimensi** (punya baris DAN kolom yang kompleks). Contoh: Layout utama halaman (Header, Sidebar, Content, Footer).
:::