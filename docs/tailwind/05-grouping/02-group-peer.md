---
sidebar_position: 2
title: Group & Peer
---

# Group & Peer

Secara standar, `hover` hanya bekerja pada elemen itu sendiri.
Tapi bagaimana jika kita ingin: **"Saat Kotak di-hover, ubah warna Teks di dalamnya"**?

## 1. Group (Parent ke Child)
Digunakan untuk menargetkan elemen anak berdasarkan state elemen induk (bapaknya).

* Tambahkan class `group` pada **Parent** (Induk).
* Tambahkan class `group-hover:...` pada **Child** (Anak).

```html
<div class="group bg-white p-6 hover:bg-blue-500 cursor-pointer">
  
  <h3 class="text-black group-hover:text-white font-bold">
    Judul Artikel
  </h3>
  
  <p class="text-gray-500 group-hover:text-blue-100">
    Deskripsi ini akan berubah warna saat kotaknya disentuh.
  </p>
  
</div>
```

**Penjelasan:**
Saat `div` luar disentuh mouse, `h3` akan berubah jadi putih dan `p` jadi biru muda.

## 2. Peer (Sibling / Saudara)

Digunakan untuk menargetkan elemen berdasarkan state elemen di sebelahnya (saudaranya). Sering dipakai untuk pesan error di form.

* Tambahkan class `peer` pada elemen pemicu (biasanya Input).
* Tambahkan class `peer-invalid:...` pada elemen yang bereaksi.

```html
<form>
  <label class="block">Email:</label>
  
  <input type="email" class="peer border p-2 rounded" required />
  
  <p class="mt-2 text-red-500 invisible peer-invalid:visible">
    Format email salah, woy!
  </p>
</form>
```

**Penjelasan:**
Teks error secara default `invisible` (tidak terlihat). Tapi saat input emailnya salah (`peer-invalid`), teksnya berubah jadi `visible`.