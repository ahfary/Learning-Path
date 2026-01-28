---
sidebar_position: 2
title: Heading & Paragraf
---

# Heading & Paragraf
<img 
  src="/img/modul/html/h.jpg" 
  alt="Icon teks, dokumen, atau tumpukan paragraf" 
  style={{ maxWidth: '100%', borderRadius: '8px', margin: '16px 0' }} 
/>
*Sumber: [Unsplash](https://unsplash.com/) - 

HTML menyediakan elemen khusus untuk menyusun teks. Penting untuk menggunakan elemen ini sesuai **maknanya (semantik)**, bukan sekadar untuk mengatur ukuran huruf.

## Heading (Judul)

<img 
  src="/img/modul/html/he.jpeg" 
  alt="Diagram hierarki heading H1 sampai H6" 
  style={{ maxWidth: '100%', borderRadius: '8px', margin: '16px 0' }} 
/>
*Sumber: [Pixabay](https://pixabay.com/) - 

Heading digunakan untuk membuat judul bab atau sub-bab. Ada 6 level, dari `<h1>` (terbesar) sampai `<h6>` (terkecil).

```html
<h1>Ini Judul Utama (H1)</h1>
<h2>Ini Sub-judul (H2)</h2>
<h3>Ini Sub-sub-judul (H3)</h3>
<h4>Level 4</h4>
<h5>Level 5</h5>
<h6>Level 6</h6>
```

:::info Aturan SEO (Search Engine Optimization)
Secara teknis, Anda *bisa* membuat banyak H1. Namun, praktik terbaik Google menyarankan **hanya ada satu `<h1>` per halaman**, yang mewakili topik utama halaman tersebut. Gunakan `<h2>` dst untuk sub-topik.
:::

---

## Paragraf

Untuk teks biasa atau deskripsi, gunakan tag `<p>`. Browser akan otomatis memberikan jarak (margin) sebelum dan sesudah elemen paragraf agar teks tidak menumpuk.

```html
<p>Ini adalah paragraf pertama. Browser akan otomatis memberikan jarak (margin) sebelum dan sesudahnya.</p>

<p>Ini adalah paragraf kedua.</p>
```

:::tip Trik VS Code: Lorem Ipsum
Bingung mau nulis apa buat contoh? Di VS Code, ketik `lorem` lalu tekan **Enter**.
VS Code akan otomatis membuatkan satu paragraf teks bahasa latin (*dummy text*) untuk Anda.
:::

---

## Formatting Teks (Semantik vs Visual)

<img 
  src="/img/modul/html/formating.jpg" 
  alt="Diagram hierarki heading H1 sampai H6" 
  style={{ maxWidth: '100%', borderRadius: '8px', margin: '16px 0' }} 
/>
*Sumber: [Pixabay](https://pixabay.com/) - 

Di HTML modern (HTML5), kita membedakan antara tag untuk **gaya** (tampilan) dan tag untuk **makna** (struktur).

| Tampilan | Tag Lama (Visual) | Tag Baru (Semantik) | Kapan Dipakai? |
| --- | --- | --- | --- |
| **Tebal** | `<b>` | `<strong>` | Gunakan `<strong>` jika teks tersebut **penting**. |
| *Miring* | `<i>` | `<em>` | Gunakan `<em>` untuk penekanan kata dalam kalimat. |
| <u>Garis Bawah</u> | `<u>` | `<ins>` | `<u>` jarang dipakai karena mirip link. |
| ~~Coret~~ | `<s>` | `<del>` | Gunakan `<del>` untuk data yang sudah dihapus. |

### Contoh Penggunaan

<img 
  src="/img/modul/html/contoh.png" 
  alt="Diagram hierarki heading H1 sampai H6" 
  style={{ maxWidth: '100%', borderRadius: '8px', margin: '16px 0' }} 
/>
*Sumber: [Pixabay](https://pixabay.com/) - 

```html
<p>
  <strong>PERHATIAN:</strong> Jangan lupa mengerjakan PR Matematika.
  Saya baru saja membaca novel <i>Harry Potter</i>.
</p>

<p>
  Harga: <del>Rp 100.000</del> <strong>Rp 50.000</strong>
</p>
```

---

## Elemen Pendukung Lainnya

### 1. Baris Baru (`<br>`)

Jika Anda ingin memaksa teks turun ke baris baru *di dalam* sebuah paragraf (tanpa membuat jarak paragraf baru), gunakan tag `<br>` (*Break*).

```html
<p>
  Jl. Sudirman No. 10<br>
  Jakarta Pusat<br>
  Indonesia
</p>
```

### 2. Garis Horizontal (`<hr>`)

Tag `<hr>` (*Horizontal Rule*) digunakan untuk membuat garis pemisah antar topik.

```html
<h2>Bab 1</h2>
<p>Isi bab satu...</p>

<hr>

<h2>Bab 2</h2>
<p>Isi bab dua...</p>
```