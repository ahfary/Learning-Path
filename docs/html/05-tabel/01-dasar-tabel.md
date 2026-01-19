---
sidebar_position: 1
title: Dasar Tabel
---

# Dasar Membuat Tabel

Tag `<table>` digunakan untuk menyajikan data tabular (data yang memiliki baris dan kolom).

:::warning Jangan Gunakan untuk Layout
Di tahun 2000-an, tabel sering dipakai untuk mengatur tata letak web (misal: membagi kiri dan kanan). **Ini adalah praktik kuno yang buruk.** Untuk tata letak, selalu gunakan CSS (Flexbox/Grid). Gunakan `<table>` hanya untuk data.
:::

## Struktur Utama

Tabel dibentuk row-by-row (baris demi baris).
1.  `<tr>` (*Table Row*): Membungkus satu baris.
2.  `<th>` (*Table Header*): Judul kolom (teks otomatis tebal & tengah).
3.  `<td>` (*Table Data*): Isi data sel biasa.

### Contoh Kode

```html
<table border="1">
  <tr>
    <th>No</th>
    <th>Nama Barang</th>
    <th>Harga</th>
  </tr>

  <tr>
    <td>1</td>
    <td>Laptop</td>
    <td>Rp 5.000.000</td>
  </tr>

  <tr>
    <td>2</td>
    <td>Mouse</td>
    <td>Rp 150.000</td>
  </tr>
</table>
```

### Penjelasan Atribut `border="1"`

Secara bawaan, tabel HTML tidak memiliki garis. Kita menambahkan `border="1"` hanya untuk tujuan **belajar** agar strukturnya terlihat.

* **Realita Modern:** Di proyek asli, kita akan menghapus atribut `border="1"` dan menggantinya dengan gaya CSS (`border: 1px solid black;`) agar lebih rapi.