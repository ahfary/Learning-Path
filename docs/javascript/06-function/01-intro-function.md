---
sidebar_position: 1
title: Pengenalan Function
---

# Pengenalan Function

Function adalah blok kode yang dirancang untuk melakukan tugas tertentu. Kita menulisnya sekali, tapi bisa dipanggil berkali-kali kapan pun dibutuhkan.

## Analogi: Blender Jus
* **Input (Parameter):** Buah, Air, Gula.
* **Proses (Function):** Pisau berputar menghancurkan bahan.
* **Output (Return):** Jus segar.

## Sintaks Dasar
Cara klasik membuat fungsi adalah menggunakan kata kunci `function`.

```javascript
// 1. Membuat Fungsi
function sapa(nama) {
    console.log("Halo, " + nama + "!");
}

// 2. Memanggil Fungsi (Invoking)
sapa("Faqih"); // Output: Halo, Faqih!
sapa("Budi");  // Output: Halo, Budi!
```

## Parameter & Argument

* **Parameter:** Variabel yang didefinisikan di dalam kurung fungsi (contoh: `nama`).
* **Argument:** Nilai asli yang dikirim saat fungsi dipanggil (contoh: `"Faqih"`).

## Return Value (Nilai Kembalian)

Fungsi yang baik biasanya **mengembalikan nilai** (`return`), bukan langsung mencetak ke layar (`console.log`). Nilai ini bisa disimpan ke variabel lain.

```javascript
function tambah(a, b) {
    return a + b; // Kembalikan hasil, jangan di-log di sini
}

const hasil = tambah(10, 5); // hasil sekarang bernilai 15
console.log(hasil * 2);      // Bisa diolah lagi: 30
```

:::warning Stop Paksa
Kata kunci `return` akan menghentikan fungsi seketika. Kode di bawah baris `return` tidak akan pernah dijalankan (Unreachable Code).
:::