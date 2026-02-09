---
sidebar_position: 4
title: useRef (Reference)
---

# useRef (Reference)

Digunakan untuk merujuk ke elemen HTML asli atau menyimpan nilai yang **tidak memicu render ulang** saat berubah.

## Kasus 1: Akses DOM (Fokus Input)
Mirip `document.getElementById` tapi ala React.

```tsx
import { useRef } from 'react';

export default function FormFokus() {
  const inputRef = useRef<HTMLInputElement>(null);

  const fokuskan = () => {
    // Mengakses elemen asli DOM
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={fokuskan}>Fokus ke Input</button>
    </>
  );
}

```

## Kasus 2: Stopawatch (Variabel Mutabel)

Nilai `ref.current` bisa diubah kapan saja tanpa bikin UI nge-refresh.

```tsx
const timerId = useRef<number>(0);
// timerId.current = 123; (UI tidak akan berubah)
```