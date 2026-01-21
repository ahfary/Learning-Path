---
sidebar_position: 1
title: For Loop
---

# For Loop

`For Loop` digunakan ketika kita **sudah tahu pasti** berapa kali perulangan harus dilakukan (misal: 10 kali, 100 kali).

## Sintaks Dasar
Ada 3 komponen utama dalam `for`:
1.  **Start:** Nilai awal hitungan.
2.  **Condition:** Syarat agar looping tetap berjalan.
3.  **Step:** Perubahan nilai setiap putaran (naik/turun).

```javascript
// for (Mulai; Syarat; Langkah)
for (let i = 1; i <= 5; i++) {
    console.log("Putaran ke-" + i);
}
```

**Alur Kerja Komputer:**

1. Set `i = 1`.
2. Cek: Apakah `1 <= 5`? (Ya) -> Jalankan kode.
3. Ubah: `i` ditambah 1 (sekarang jadi 2).
4. Cek: Apakah `2 <= 5`? (Ya) -> Jalankan kode.
5. ... dan seterusnya sampai `i = 6` (Stop).

## Contoh Variasi

### 1. Hitung Mundur

```javascript
for (let i = 10; i >= 1; i--) {
    console.log("Detik ke: " + i);
}
console.log("Happy New Year!");
```

### 2. Angka Genap Saja

Mengubah "Langkah" (*step*) tidak harus tambah 1.

```javascript
// i += 2 artinya i = i + 2
for (let i = 2; i <= 10; i += 2) {
    console.log("Angka Genap: " + i);
}