---
sidebar_position: 2
title: Mengatur Posisi (Justify & Align)
---

# Mengatur Posisi (Justify & Align)

Di Flexbox, kita memiliki dua sumbu untuk mengatur posisi anak:
1.  **Main Axis (Sumbu Utama):** Searah dengan `flex-direction` (biasanya horizontal/mendatar).
2.  **Cross Axis (Sumbu Silang):** Tegak lurus dengan sumbu utama (biasanya vertikal/tegak).

## 1. Justify Content (Main Axis)
Mengatur posisi anak secara **mendatar** (jika `flex-direction: row`).

```css
.container {
    display: flex;
    justify-content: center; /* Pilihan: flex-start, center, flex-end, space-between */
}
```

* `flex-start`: Rata kiri (default).
* `center`: Rata tengah.
* `flex-end`: Rata kanan.
* `space-between`: Anak pertama di ujung kiri, anak terakhir di ujung kanan, sisanya menyebar rata.

## 2. Align Items (Cross Axis)

Mengatur posisi anak secara **vertikal** (jika `flex-direction: row`).

```css
.container {
    display: flex;
    height: 300px; /* Wadah harus punya tinggi agar terlihat efeknya */
    align-items: center; /* Pilihan: stretch, flex-start, center, flex-end */
}
```

* `stretch`: Menarik anak agar setinggi wadahnya (default).
* `center`: Rata tengah vertikal.
* `flex-start`: Nempel di atas.

:::tip Rumus "The Holy Grail" (Tengah Sempurna)
Ingin membuat sebuah kotak berada persis di tengah-tengah layar? Gunakan kombinasi maut ini:

```css
.wadah-tengah {
    display: flex;
    justify-content: center; /* Tengah Kiri-Kanan */
    align-items: center;     /* Tengah Atas-Bawah */
    height: 100vh;           /* Full Layar */
}