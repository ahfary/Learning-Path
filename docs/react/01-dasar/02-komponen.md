---
sidebar_position: 2
title: Functional Component
---

# Functional Component

Di React modern, komponen hanyalah sebuah **Fungsi JavaScript** yang mengembalikan JSX.

## Membuat Komponen
Nama fungsi **WAJIB** diawali huruf **Kapital** (contoh: `Tombol`, bukan `tombol`).

```tsx
// src/components/Tombol.tsx

// 1. Definisikan Fungsi
function Tombol() {
  return (
    <button className="bg-blue-500 text-white p-2 rounded">
      Klik Saya
    </button>
  );
}

// 2. Export agar bisa dipakai di file lain
export default Tombol;
```

## Menggunakan Komponen

Kita memanggilnya seperti tag HTML biasa.

```tsx
// src/App.tsx
import Tombol from './components/Tombol';

function App() {
  return (
    <div>
      <h1>Selamat Datang</h1>
      {/* Memanggil komponen Tombol */}
      <Tombol />
      <Tombol />
    </div>
  );
}