---
sidebar_position: 1
title: Images (Gambar)
---

# Menambahkan Gambar
<img 
  src="/img/modul/html/img.jpg" 
  alt="Ilustrasi tag img HTML" 
  style={{ maxWidth: '100%', borderRadius: '8px', margin: '16px 0' }} 
/>
*Sumber: [html.com](https://html.com) -*

Web tanpa gambar akan membosankan. Di HTML, kita menggunakan tag `<img>` untuk menampilkan gambar.

## Sintaks Dasar
<img 
  src="/img/modul/html/img2.avif" 
  alt="Contoh sintaks dasar tag img HTML" 
  style={{ maxWidth: '50%', borderRadius: '8px', margin: '16px 0' }} 
/>
*Sumber: [bikin.website](https://bikin.website) -*
Tag `<img>` adalah *self-closing tag* (tidak memiliki tag penutup `</img>`).

```html
<img src="gambar.jpg" alt="Deskripsi Gambar">
```

### Atribut Wajib
<img 
  src="/img/modul/html/img3.png" 
  alt="Contoh sintaks dasar tag img HTML" 
  style={{ maxWidth: '100%', borderRadius: '8px', margin: '16px 0' }} 
/>
*Sumber: [bikin.website](https://bikin.website) -*

1. **`src` (Source):** Lokasi file gambar. Bisa berupa link online (`https://...`) atau file lokal di komputer.
2. **`alt` (Alternative Text):** Teks pengganti jika gambar gagal dimuat.
* **Fungsi SEO:** Google membaca teks ini untuk memahami isi gambar.
* **Fungsi Aksesibilitas:** Pembaca layar (*screen reader*) akan membacakan teks ini untuk tunanetra.



## Mengatur Ukuran

Gunakan atribut `width` (lebar) atau `height` (tinggi).

* Disarankan hanya mengisi **salah satu** saja (misal `width` saja), agar aspek rasio gambar tetap proporsional dan tidak gepeng.

```html
<img src="logo.png" alt="Logo Perusahaan" width="200">
<img src="banner.jpg" alt="Banner Promo" width="100%">
```

:::warning Hati-hati File Besar
Jangan memasukkan gambar mentah dari kamera (misal 5MB) langsung ke HTML. Ini akan membuat web sangat lambat. Kompres gambar terlebih dahulu menjadi format web-friendly seperti **WebP, JPG, atau PNG** dengan ukuran di bawah 200KB jika memungkinkan.
:::