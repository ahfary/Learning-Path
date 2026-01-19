---
sidebar_position: 2
title: Jenis-Jenis Input
---

# Jenis-Jenis Input

Tag `<input>` adalah elemen paling fleksibel di HTML karena bentuknya bisa berubah-ubah tergantung atribut `type`-nya.

## Input Teks Populer

| Tipe | Fungsi | Contoh Kode |
| :--- | :--- | :--- |
| `text` | Teks pendek satu baris (Nama, Kota). | `<input type="text">` |
| `password` | Karakter disensor jadi titik/bintang. | `<input type="password">` |
| `email` | Memvalidasi format email (wajib ada @). | `<input type="email">` |
| `number` | Hanya menerima angka. | `<input type="number">` |
| `date` | Memunculkan kalender (date picker). | `<input type="date">` |

## Pilihan (Selection)

### 1. Radio Button (Pilih Satu)
Gunakan jika pengguna hanya boleh memilih **satu** opsi dari beberapa pilihan (misal: Jenis Kelamin).
* **Wajib:** Nilai atribut `name` harus **sama** agar mereka menjadi satu grup (tidak bisa dicentang dua-duanya).

```html
<p>Jenis Kelamin:</p>
<input type="radio" id="pria" name="gender" value="pria">
<label for="pria">Pria</label>

<input type="radio" id="wanita" name="gender" value="wanita">
<label for="wanita">Wanita</label>
```

### 2. Checkbox (Pilih Banyak)

Gunakan jika pengguna boleh memilih lebih dari satu opsi (misal: Hobi).

```html
<p>Hobi:</p>
<input type="checkbox" id="coding" name="hobi1" value="coding">
<label for="coding">Coding</label>

<input type="checkbox" id="desain" name="hobi2" value="desain">
<label for="desain">Desain</label>
```

### 3. Dropdown (Select)

Gunakan untuk menghemat tempat jika pilihannya banyak (misal: Daftar Provinsi).

```html
<label for="kota">Pilih Kota:</label>
<select id="kota" name="kota">
    <option value="jkt">Jakarta</option>
    <option value="bdg">Bandung</option>
    <option value="sby">Surabaya</option>
</select>
```

---

## Input Teks Panjang (`textarea`)

Untuk pesan, alamat, atau komentar, jangan pakai `input type="text"`, tapi gunakan `<textarea>`.

```html
<label for="pesan">Pesan Anda:</label><br>
<textarea id="pesan" name="pesan" rows="4" cols="50"></textarea>
```

---

## Tombol Submit

Tanpa tombol ini, form tidak bisa dikirim.

```html
<button type="submit">Kirim Data</button>
```

:::tip Validasi Otomatis
Tambahkan atribut `required` pada input yang tidak boleh kosong. Browser akan otomatis menolak pengiriman form jika kolom tersebut belum diisi.
Contoh: `<input type="text" required>`
:::


### Cek Hasilnya
Setelah ini disimpan:
1.  Buka browser.
2.  Coba tes input `type="email"` dengan memasukkan teks asal (tanpa @), lalu tekan tombol submit. Browser modern akan memunculkan pesan error otomatis.

Selanjutnya, apakah Anda ingin masuk ke **Table (Tabel Data)**, atau langsung penutup HTML Semantic (Header, Footer, Nav)?