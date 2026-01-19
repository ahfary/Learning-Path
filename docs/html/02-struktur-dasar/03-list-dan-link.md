---
sidebar_position: 3
title: List & Link
---

# List & Hyperlink

Web tanpa link hanyalah dokumen mati. Di bab ini, kita akan belajar cara menyusun daftar (list) dan menghubungkan halaman web satu sama lain (hyperlink).

## Membuat List (Daftar)

HTML memiliki dua jenis daftar utama: yang urutannya **tidak penting** (bullet points) dan yang **penting** (nomor).

### 1. Unordered List (Bullet Points)
Gunakan tag `<ul>` (*Unordered List*) jika urutan poin tidak mempengaruhi makna. Setiap butir daftar dibungkus dengan tag `<li>` (*List Item*).

```html
<ul>
    <li>HTML (Struktur)</li>
    <li>CSS (Tampilan)</li>
    <li>JavaScript (Interaksi)</li>
</ul>

```

**Hasil:**

* HTML (Struktur)
* CSS (Tampilan)
* JavaScript (Interaksi)

### 2. Ordered List (Nomor)

Gunakan tag `<ol>` (*Ordered List*) jika urutannya adalah langkah-langkah atau prioritas. Browser akan otomatis memberi nomor (1, 2, 3...) secara berurutan.

```html
<ol>
    <li>Buka VS Code</li>
    <li>Tulis Kode</li>
    <li>Simpan File</li>
</ol>

```

**Hasil:**

1. Buka VS Code
2. Tulis Kode
3. Simpan File

:::tip Kombinasi List
Anda bisa memasukkan list di dalam list (Nested List). Contohnya membuat sub-bab di dalam daftar isi.
:::

---

## Hyperlink (Anchor Tag)

Tag `<a>` (*Anchor*) adalah elemen terpenting yang membuat web saling terhubung. Atribut wajibnya adalah `href` (*Hypertext Reference*).

```html
<a href="tujuan-link.html">Teks yang Diklik</a>

```

### 1. Link Eksternal (Ke Website Lain)

Gunakan alamat lengkap (`https://...`) untuk link ke luar website Anda.

```html
<a href="[https://google.com](https://google.com)">Buka Google</a>

<a href="[https://google.com](https://google.com)" target="_blank">Buka Google di Tab Baru</a>

```

:::warning Keamanan Link
Saat menggunakan `target="_blank"`, browser modern sudah otomatis mengamankannya. Namun, praktik terbaik (best practice) lama menyarankan menambahkan `rel="noopener noreferrer"` untuk mencegah celah keamanan pada browser jadul.
:::

### 2. Link Internal (Ke Halaman Sendiri)

Untuk menghubungkan file dalam satu folder project, cukup panggil nama filenya tanpa `https`.

Misal Anda punya file `halaman2.html` di sebelah `index.html`:

```html
<p>
    Ingin lanjut belajar? 
    <a href="halaman2.html">Klik di sini untuk ke Halaman 2</a>
</p>

```

### 3. Link ke Bagian Halaman (Anchor Link)

Anda bisa membuat link yang melompat ke bagian tertentu di halaman yang sama menggunakan **ID**.

```html
<a href="#kontak">Langsung ke Kontak</a>

<h2 id="kontak">Hubungi Kami</h2>
```