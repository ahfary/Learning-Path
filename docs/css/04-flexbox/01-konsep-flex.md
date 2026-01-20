---
sidebar_position: 1
title: Pengenalan Flexbox
---

# Pengenalan Flexbox

Flexbox (*Flexible Box*) adalah mode layout satu dimensi yang dirancang untuk mengatur elemen dalam satu baris atau satu kolom.

## Cara Mengaktifkan
Cukup berikan properti `display: flex;` pada elemen pembungkus (Parent).

```css
.container {
    display: flex;
}
```

Maka secara otomatis, semua elemen di dalamnya (Child) akan berjejer **ke samping** (horizontal).

## Flex Direction (Arah)

Kita bisa mengubah arah susunan anak-anaknya menggunakan `flex-direction`.

| Nilai | Fungsi |
| --- | --- |
| `row` (Default) | Menyusun dari **kiri ke kanan**. |
| `column` | Menyusun dari **atas ke bawah**. |
| `row-reverse` | Menyusun dari **kanan ke kiri** (terbalik). |
| `column-reverse` | Menyusun dari **bawah ke atas** (terbalik). |

```css
.container-kolom {
    display: flex;
    flex-direction: column; /* Jadi menumpuk ke bawah */
}