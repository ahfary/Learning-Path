---
sidebar_position: 1
title: Struktur Dasar Form
---

# Struktur Dasar Form

Formulir digunakan untuk mengumpulkan data dari pengguna.


## Tag `<form>`
Semua elemen input harus dibungkus dalam tag `<form>`.

```html
<form action="/proses-data" method="POST">
    {label & input formulir}
</form>
```

### Atribut Penting pada `<form>`
<img 
  src="/img/modul/html/atribut.png" 
  alt="Contoh atribut penting pada form HTML"
  style={{ width: '50%', maxWidth: '600px', borderRadius: '8px', margin: '16px 0' }}
/>
*Sumber: [phptutorial.net](https://www.phptutorial.net/php-tutorial/php-prg/) -*

1. **`action`**: Tujuan data dikirim (URL Backend/API). Jika dikosongkan, data akan dikirim ke halaman itu sendiri.
2. **`method`**: Cara data dikirim.
* `GET`: Data terlihat di URL (misal: pencarian Google). **Jangan gunakan untuk password!**
* `POST`: Data tersembunyi (aman untuk login/register).



:::danger Realita Teknis
HTML hanyalah **tampilan** (Frontend). Agar formulir benar-benar bisa berfungsi (misal: mengirim email atau menyimpan ke database), Anda memerlukan bahasa pemrograman **Backend** (seperti PHP, Python, atau Node.js) untuk memproses atribut `action` tersebut.
:::


## Label & Input (Pasangan Wajib)

Setiap kolom input **wajib** memiliki label agar aksesibel (bisa dibaca screen reader) dan mudah diklik.

Gunakan atribut `for` pada label yang nilainya **sama persis** dengan `id` pada input.

```html
<label for="username">Nama Pengguna:</label>
<input type="text" id="username" name="username">
```

* **Coba klik teks "Nama Pengguna":** Kursor akan otomatis fokus ke kolom input. Ini sangat membantu pengguna HP (layar sentuh).