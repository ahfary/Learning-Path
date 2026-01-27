---
sidebar_position: 2
title: Function Types
---

# Function Types

Fungsi juga butuh tipe data:
1.  Tipe untuk **Parameter** (Input).
2.  Tipe untuk **Return Value** (Output).

## Sintaks Dasar

```typescript
// (input: tipe): tipe_output
function sapa(nama: string): string {
  return `Halo, ${nama}`;
}

const hasil = sapa("Faqih");
```

## Void (Tidak Mengembalikan Apa-apa)

Jika fungsi hanya melakukan `console.log` atau mengubah DOM dan tidak ada kata kunci `return`, gunakan tipe `void`.

```typescript
function cetakPesan(pesan: string): void {
  console.log("Pesan: " + pesan);
  // return pesan; // ❌ Error, karena janjinya void (kosong)
}
```

## Function sebagai Props (React Preview)

Nanti di React, seringkali kita mengoper fungsi sebagai props (misal: `onClick`).

```typescript
interface TombolProps {
  label: string;
  // Fungsi yang tidak menerima argumen dan tidak me-return apa2
  onClick: () => void; 
}