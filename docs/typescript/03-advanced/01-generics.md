---
sidebar_position: 1
title: Generics (Tipe Fleksibel)
---

# Generics

Bayangkan Anda ingin membuat fungsi yang bisa menerima tipe data apa saja, tapi tetap aman (bukan `any`).

## Masalah (Tanpa Generics)
Kita terpaksa bikin fungsi dobel atau pakai `any`.

```typescript
function kembalikanAngka(val: number): number {
  return val;
}

function kembalikanKata(val: string): string {
  return val;
}

// Kalau pakai any, kita kehilangan fitur cek error
function kembalikanApaAja(val: any): any {
  return val;
}
```

## Solusi (Pakai Generics `<T>`)

Kita gunakan tanda `<T>` (singkatan dari Type) sebagai placeholder. Nanti TS akan menebak sendiri tipenya saat dipanggil.

```typescript
function kembalikan<T>(val: T): T {
  return val;
}

// Saat dipakai, <T> berubah jadi tipe data aslinya
const data1 = kembalikan<number>(100);  // T jadi number
const data2 = kembalikan<string>("Halo"); // T jadi string
```

## Studi Kasus: React `useState`

Nanti di React, Anda akan sering melihat ini:

```typescript
// State bisa berupa User ATAU null (kosong)
const [user, setUser] = useState<User | null>(null);