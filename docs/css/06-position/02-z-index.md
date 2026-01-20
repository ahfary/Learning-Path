---
sidebar_position: 2
title: Z-Index (Tumpukan)
---

# Z-Index (Lapisan Tumpukan)

Saat kita menggunakan `position` (selain static), elemen-elemen bisa saling menumpuk (seperti kertas di atas meja). `z-index` menentukan kertas mana yang ada di paling atas.

## Konsep Lantai
Bayangkan `z-index` adalah nomor lantai sebuah gedung.
* `z-index: 1` = Lantai 1
* `z-index: 99` = Lantai 99 (Paling Atas/Depan)
* `z-index: -1` = Lantai Bawah Tanah (Di belakang elemen normal)

```css
.kotak-merah {
    position: absolute;
    z-index: 1; /* Di bawah */
    background: red;
}

.kotak-biru {
    position: absolute;
    z-index: 2; /* Di atas merah */
    background: blue;
}
```

:::warning Syarat Wajib
`z-index` HANYA berfungsi jika elemen tersebut memiliki `position` (relative, absolute, fixed, atau sticky).
Pada `position: static`, z-index tidak akan berefek apa pun.
:::