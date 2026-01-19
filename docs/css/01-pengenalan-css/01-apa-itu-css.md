---
sidebar_position: 1
title: Apa itu CSS?
---

# Apa itu CSS?

**CSS** (*Cascading Style Sheets*) adalah bahasa yang digunakan untuk menghias halaman web.

Jika HTML adalah **kerangka/tulang** manusia, maka CSS adalah **kulit dan pakaiannya**. HTML mengurus "apa isinya", sedangkan CSS mengurus "bagaimana tampilannya".

## Sintaks Dasar
CSS memiliki aturan penulisan yang berbeda dengan HTML. CSS tidak menggunakan tag `< >`, melainkan menggunakan kurung kurawal `{ }`.

```css
selector {
    properti: nilai;
}

Selector: Bagian mana yang ingin dihias (misal: h1, p, atau .tombol).

Properti: Apa yang ingin diubah (misal: color, font-size).

Nilai: Seberapa besar perubahannya (misal: red, 20px).

Contoh Nyata
CSS
/* Mengubah semua judul h1 menjadi merah */
h1 {
    color: red;
    font-size: 30px;
}