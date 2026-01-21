---
sidebar_position: 2
title: Promise & Async/Await
---

# Promise & Async/Await

Dulu kita menangani proses async menggunakan *Callback*, tapi itu membuat kode jadi berantakan (*Callback Hell*). Sekarang kita pakai **Promise**.

## 1. Konsep Promise (Janji)
Sebuah fungsi yang berjanji akan memberikan data di masa depan.
Statusnya ada 3:
* **Pending:** Sedang diproses.
* **Fulfilled (Resolved):** Berhasil.
* **Rejected:** Gagal (Error).

## 2. Async / Await (Cara Modern)
Sejak ES2017, kita bisa menulis kode Asynchronous tapi terlihat rapi seperti Synchronous.

* **`async`**: Memberi tahu bahwa fungsi ini ada proses async-nya.
* **`await`**: "Tunggu sebentar sampai proses ini selesai, baru lanjut ke bawah."

```javascript
// Simulasi request data ke server
const ambilData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data User: Faqih");
        }, 2000);
    });
};

// Cara Pakai (Modern)
const jalankan = async () => {
    console.log("Loading...");
    
    // Tunggu 2 detik di sini, tanpa memblokir browser
    const hasil = await ambilData(); 
    
    console.log(hasil); // "Data User: Faqih"
    console.log("Selesai");
};

jalankan();
```

:::tip Wajib Tahu
Di React dan Next.js, Anda akan menggunakan `async/await` hampir setiap hari untuk mengambil data dari Database atau API.
:::