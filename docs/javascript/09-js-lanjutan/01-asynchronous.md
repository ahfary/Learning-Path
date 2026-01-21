---
sidebar_position: 1
title: Synchronous vs Asynchronous
---

# Synchronous vs Asynchronous

JavaScript secara bawaan adalah **Single Threaded** (Satu Jalur). Artinya, dia hanya bisa mengerjakan satu tugas dalam satu waktu.

## 1. Synchronous (Antrean Loket)
Kode dijalankan baris demi baris dari atas ke bawah. Baris ke-2 tidak akan jalan sebelum baris ke-1 selesai.

**Masalah:** Jika baris ke-1 butuh waktu 5 detik (misal: download file besar), maka baris ke-2 akan **terblokir** (website macet/hang).

```javascript
console.log("1. Mulai");
alert("Saya menahan proses!"); // Website berhenti di sini sampai OK diklik
console.log("2. Selesai");
```

## 2. Asynchronous (Pesan Makanan)

Kode yang butuh waktu lama akan "dilempar" ke latar belakang (*background*), biarkan kode selanjutnya jalan duluan. Nanti kalau sudah selesai, baru dikabari.

Contoh paling sederhana adalah `setTimeout`.

```javascript
console.log("1. Pesan Makanan");

// Simulasi proses lama (3 detik)
setTimeout(() => {
    console.log("2. Makanan Siap! (Setelah 3 detik)");
}, 3000);

console.log("3. Bayar Kasir"); 
// Output urutan: 1 -> 3 -> 2
```

:::info Kesimpulan
Dengan Asynchronous, website tetap responsif (bisa diklik/discrool) meskipun sedang memuat data berat di latar belakang.
:::