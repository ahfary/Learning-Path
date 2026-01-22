---
sidebar_position: 2
title: Disabled & Struktur List
---

# Disabled & Struktur List

Selain interaksi mouse, Tailwind juga punya state berdasarkan **Kondisi Elemen** dan **Posisi Elemen**.

## 1. Disabled (`disabled:`)
Gaya ini aktif saat elemen memiliki atribut HTML `disabled`.
* Sangat penting untuk memberi tahu user bahwa tombol **tidak bisa diklik**.

```html
<button 
  class="bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-2 rounded"
  disabled
>
  Processing...
</button>

```

## 2. First & Last Child

Berguna jika kita ingin memberi gaya khusus HANYA pada elemen **pertama** atau **terakhir**.

* `first:` -> Elemen paling atas/kiri.
* `last:` -> Elemen paling bawah/kanan.

Contoh kasus: Memberi garis pembatas antar item, tapi item terakhir tidak perlu garis.

```html
<ul class="border rounded p-4">
  <li class="border-b border-gray-200 py-2">Item 1</li>
  
  <li class="border-b border-gray-200 py-2">Item 2</li>
  
  <li class="border-b last:border-none border-gray-200 py-2">Item 3</li>
</ul>

```

## 3. Odd & Even (Zebra Striping)

Sangat berguna untuk **Tabel** agar data mudah dibaca (belang-belang).

* `odd:` -> Baris Ganjil (1, 3, 5...)
* `even:` -> Baris Genap (2, 4, 6...)

```html
<table>
  <tbody>
    <tr class="odd:bg-white even:bg-gray-100">
      <td class="p-2">Data 1</td>
    </tr>
    <tr class="odd:bg-white even:bg-gray-100">
      <td class="p-2">Data 2</td>
    </tr>
    <tr class="odd:bg-white even:bg-gray-100">
      <td class="p-2">Data 3</td>
    </tr>
  </tbody>
</table>