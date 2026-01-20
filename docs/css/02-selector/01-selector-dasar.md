---
sidebar_position: 1
title: Selector Dasar
---

# Selector Dasar

Agar CSS tahu elemen mana yang harus dipercantik, kita membutuhkan **Selector**.

## 1. Tag Selector (Elemen)
Memilih semua elemen HTML berdasarkan nama tag-nya.
* **Efek:** Semua tag tersebut di seluruh halaman akan berubah.

```css
/* Semua paragraf akan berwarna abu-abu */
p {
    color: gray;
}
```

## 2. Class Selector (`.`)

Memilih elemen yang memiliki atribut `class` tertentu. Ini adalah selector yang **paling sering digunakan** karena bisa dipakai berulang kali.

* **Simbol:** Titik (`.`)

```css
/* Hanya elemen dengan class="tombol" yang punya background biru */
.tombol {
    background-color: blue;
    color: white;
}
```

```html
<button class="tombol">Klik Saya</button>
<a href="#" class="tombol">Link seperti Tombol</a>
```

## 3. ID Selector (`#`)

Memilih **satu** elemen unik yang memiliki atribut `id` tertentu.

* **Aturan:** Satu halaman hanya boleh punya satu ID dengan nama yang sama.
* **Simbol:** Pagar (`#`)

```css
/* Khusus untuk elemen dengan id="header-utama" */
#header-utama {
    background-color: black;
    height: 100px;
}
```

:::tip Kapan pakai Class vs ID?

* Gunakan **Class** jika gayanya ingin dipakai di **banyak** elemen (misal: tombol, kartu artikel).
* Gunakan **ID** jika elemennya cuma ada **satu** (misal: Navbar Utama, Footer, Sidebar).
:::