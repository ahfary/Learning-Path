---
sidebar_position: 1
title: Apa itu TypeScript?
---

# Apa itu TypeScript?

JavaScript (JS) itu bahasa yang "bebas" dan "liar".
* Anda bisa memasukkan angka ke variabel teks.
* Anda bisa mengakses properti yang tidak ada.
* Browser baru akan error saat kode **sudah dijalankan** (Runtime Error).

**TypeScript (TS)** hadir sebagai "Polisi" atau "Superset" dari JS.
* TS menambahkan **Static Typing** (Pengecekan Tipe).
* Error akan muncul saat **coding (sebelum dijalankan)**.
* Kode TS akan diubah (*compile/transpile*) menjadi JS biasa agar bisa dibaca browser.

## Contoh Kasus: Penjumlahan
### Di JavaScript (Bahaya)
```javascript
function tambah(a, b) {
  return a + b;
}

// Tidak error, tapi hasilnya kacau ("105" karena string digabung)
console.log(tambah("10", 5)); 
```

### Di TypeScript (Aman)

Kita wajib memberi tahu tipe datanya apa.

```typescript
function tambah(a: number, b: number): number {
  return a + b;
}

// ❌ ERROR MERAH: Argument of type 'string' is not assignable to 'number'.
// console.log(tambah("10", 5)); 

// ✅ BENAR
console.log(tambah(10, 5)); 