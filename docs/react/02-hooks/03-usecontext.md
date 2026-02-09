---
sidebar_position: 3
title: useContext (Global Data)
---

# useContext (Context)

Digunakan untuk mengakses data global tanpa oper props manual berjenjang (*Prop Drilling*). Cocok untuk: Tema (Dark Mode), User Login, Bahasa.

## 1. Buat Context (Di file terpisah)
```tsx
import { createContext } from 'react';

// Nilai default: 'light'
export const ThemeContext = createContext('light');
```

## 2. Sediakan Provider (Di Induk)

```tsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

## 3. Pakai di Anak/Cucu (`useContext`)

```tsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Tombol() {
  const tema = useContext(ThemeContext);
  
  return <button className={tema}>Tombol Saya</button>;
}
```