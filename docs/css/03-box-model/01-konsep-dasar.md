---
sidebar_position: 1
title: Konsep Box Model
---

# Konsep CSS Box Model

Di mata CSS, **semua** elemen HTML (mulai dari `<h1>` sampai `<img>`) dianggap sebagai sebuah **kotak** (box).

Kotak ini memiliki 4 lapisan utama, seperti lukisan yang dibingkai.

## 4 Lapisan Box Model

1.  **Content (Isi):** Bagian terdalam, berisi teks atau gambar.
2.  **Padding (Bantalan):** Jarak antara isi dan garis tepi (border). Area ini transparan.
3.  **Border (Bingkai):** Garis tepi yang mengelilingi padding dan isi.
4.  **Margin (Jarak Luar):** Jarak antara elemen ini dengan elemen lain di sekitarnya.

### Analogi Lukisan
* **Content:** Kanvas lukisannya.
* **Padding:** Paspartu (kertas putih kosong di sekeliling lukisan sebelum bingkai).
* **Border:** Bingkai kayunya.
* **Margin:** Jarak antara lukisan ini dengan lukisan lain di dinding.

### Contoh Kode Lengkap

```css
.kotak {
    /* 1. Content */
    width: 200px;
    height: 100px;
    background-color: lightblue;

    /* 2. Padding (Jarak dalam) */
    padding: 20px;

    /* 3. Border (Garis tepi) */
    border: 5px solid black;

    /* 4. Margin (Jarak luar) */
    margin: 30px;
}
```
:::info Tips Menghafal

Padding = Menggemukkan diri (isi makin luas).

Margin = Menjauhkan diri (mendorong tetangga).
:::