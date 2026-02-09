---
sidebar_position: 5
title: Custom Hooks
---

# Custom Hooks

Kita bisa membungkus logika yang kompleks menjadi satu fungsi hook sendiri agar kode komponen bersih.
Syarat: Nama fungsi harus diawali **`use`**.

## Contoh: `useToggle`
Hook sederhana untuk Buka/Tutup (Boolean).

```tsx
import { useState } from 'react';

// Definisikan Hook
function useToggle(initialVal: boolean = false) {
  const [state, setState] = useState(initialVal);
  const toggle = () => setState(prev => !prev);
  return [state, toggle] as const;
}

// Cara Pakai di Komponen
export default function App() {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <button onClick={toggleMenu}>
      {isMenuOpen ? "Tutup" : "Buka"}
    </button>
  );
}
```