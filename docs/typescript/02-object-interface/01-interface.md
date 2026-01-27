---
sidebar_position: 1
title: Interface (Kontrak Object)
---

# Interface

Interface adalah cara kita mendefinisikan bentuk (**Shape**) dari sebuah Object. Ini sangat sering dipakai di React untuk mendefinisikan **Props**.

## Membuat Interface
Bayangkan kita punya data Mahasiswa.

```typescript
// Definisi Bentuk Data
interface Mahasiswa {
  nama: string;
  nim: number;
  jurusan: string;
  isLulus?: boolean; // Tanda '?' artinya Opsional (Boleh ada, boleh tidak)
}

// Implementasi
const mhs1: Mahasiswa = {
  nama: "Faqih",
  nim: 12345,
  jurusan: "TI"
  // isLulus tidak wajib diisi
};

// ❌ Error: Property 'jurusan' is missing
/*
const mhsError: Mahasiswa = {
  nama: "Budi",
  nim: 123
};
*/
```

:::tip Type vs Interface
Anda juga akan melihat kata kunci `type`.
`type Mahasiswa = { ... }`
Bedanya tipis. Untuk pemula React, gunakan **Interface** untuk Object, dan **Type** untuk Union/Complex types.
:::