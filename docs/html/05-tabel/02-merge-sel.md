---
sidebar_position: 2
title: Menggabungkan Sel (Merge)
---

# Menggabungkan Sel (Merge)
<img
  src="/img/modul/html/merge.png"
  alt="Contoh Penggabungan Sel Tabel HTML dengan Colspan dan Rowspan"
  style={{ width: '70%', maxWidth: '600px', borderRadius: '8px', margin: '16px auto', display: 'block' }}
/>

<small>
Sumber gambar: learntosap.com – HTML Table Colspan & Rowspan
</small>

Terkadang kita perlu menggabungkan dua sel atau lebih menjadi satu. Di HTML, kita menggunakan atribut **`colspan`** dan **`rowspan`**.

## 1. Colspan (Column Span)
Menggabungkan sel secara **horizontal** (menyamping).
* Contoh: Menggabungkan kolom A dan B.

```html
<table border="1">
  <tr>
    <th colspan="2">Data Peserta</th> </tr>
  <tr>
    <td>Budi</td>
    <td>08123456</td>
  </tr>
</table>
```

**Logika:** Karena baris pertama sudah mengambil jatah 2 kolom (colspan="2"), maka baris di bawahnya **harus** punya 2 sel (`<td>`) agar pas/sejajar.

---

## 2. Rowspan (Row Span)

Menggabungkan sel secara **vertikal** (ke bawah).

* Contoh: Satu nama untuk dua baris data berbeda.

```html
<table border="1">
  <tr>
    <td rowspan="2">Senin</td> <td>Matematika</td>
  </tr>
  <tr>
    <td>Bahasa Inggris</td>
  </tr>
</table>
```

**Logika:** Di baris kedua (`<tr>` kedua), kita **hanya** menulis 1 `<td>` (Mapel), karena kolom harinya sudah "dijajah" oleh sel dari baris pertama.

:::tip Cara Mengingat

* **Col**span = **Col**umn (Kolom) = Menyamping.
* **Row**span = **Row** (Baris) = Ke Bawah.
:::