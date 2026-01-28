---
sidebar_position: 1
title: HTML Boilerplate
---

# HTML Boilerplate (Kerangka Wajib)
<img 
  src="/img/modul/html/kerangka.png" 
  alt="Ilustrasi kerangka halaman web head dan body" 
  style={{ maxWidth: '50%', borderRadius: '8px', margin: '16px 0' }} 
/>

*Sumber: [Figma](https://www.figma.com/)*

Setiap file HTML yang valid harus memiliki struktur standar yang disebut *Boilerplate*. Tanpa ini, browser mungkin akan menampilkan halaman dengan mode "Quirks" (mode kompatibilitas jadul) yang bisa merusak tampilan.

## Cara Cepat (VS Code Shortcut)

<img 
  src="/img/modul/html/seru.png" 
  alt="Screenshot VS Code dengan tanda seru ! di file .html" 
  style={{ maxWidth: '100%', borderRadius: '8px', margin: '16px 0' }} 
/>

*Sumber: [StackOverflow](https://stackoverflow.com/)*
Jangan mengetik manual. Di VS Code:
1. Buka file `.html`.
2. Ketik tanda seru `!`.
3. Tekan **Enter** atau **Tab**.

VS Code akan otomatis membuatkan kode berikut:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body></body>
</html>
```

## Bedah Kode (Penjelasan Teknis)

| Elemen | Fungsi Objektif |
| :--- | :--- |
| `<!DOCTYPE html>` | Bukan tag HTML, tapi instruksi ke browser bahwa ini adalah dokumen **HTML5**. |
| `<html lang="en">` | Elemen akar (*root*). Atribut `lang="en"` memberi tahu mesin pencari (Google) bahwa konten berbahasa Inggris. **Ubah ke "id" jika konten Anda bahasa Indonesia.** |
| `<head>` | Area untuk metadata. Isinya **tidak tampil** di halaman web (kecuali judul di tab browser). |
| `<meta charset="UTF-8">` | Memastikan browser bisa menampilkan huruf unik, simbol, dan emoji (encoding standar web). |
| `<body>` | Wadah untuk semua konten yang **tampil** di layar (teks, gambar, tombol). |

<img 
  src="/img/modul/html/salah.webp" 
  alt="Screenshot VS Code dengan tanda seru ! di file .html" 
  style={{ maxWidth: '10%', borderRadius: '8px', margin: '16px 0' }} 
/>

*Sumber: [dreamstime](https://stackoverflow.com/)*

:::danger Kesalahan Pemula
Jangan pernah menulis elemen visual (seperti `<h1>` atau `<p>`) di dalam area `<head>`. Semua konten visual wajib masuk di dalam `<body>`.
:::
