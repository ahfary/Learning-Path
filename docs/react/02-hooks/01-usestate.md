---
sidebar_position: 1
title: useState (State)
---

# useState (State)

Digunakan untuk menyimpan data yang **berubah-ubah** dan mempengaruhi tampilan.

## Import
```tsx
import { useState } from 'react';
```

## Cara Pakai

```tsx
const [count, setCount] = useState<number>(0);
```

## Contoh Kasus

Counter sederhana.

```tsx
export default function Counter() {
  const [angka, setAngka] = useState(0);

  return (
    <button onClick={() => setAngka(angka + 1)}>
      Diklik {angka} kali
    </button>
  );
}
```