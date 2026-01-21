---
sidebar_position: 3
title: Break & Continue
---

# Break & Continue

Terkadang kita perlu menghentikan paksa atau melompati satu putaran looping.

## 1. Break (Berhenti Paksa)
Menghentikan looping seketika, meskipun syaratnya masih terpenuhi.
* Contoh: Mencari data. Kalau sudah ketemu, ngapain cari lagi? Stop saja.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Ketemu angka 5! Stop.");
        break; // Loop langsung mati total
    }
    console.log("Cek angka: " + i);
}
```

## 2. Continue (Lompati)

Hanya menghentikan **putaran saat ini**, lalu lanjut ke putaran berikutnya.

* Contoh: Mencetak daftar tamu, tapi lewati nama mantan.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        // Angka 3 dilewati, langsung lanjut ke 4
        continue; 
    }
    console.log("Nomor urut: " + i);
}