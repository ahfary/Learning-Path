---
sidebar_position: 2
title: Routes & Link
---

# Routes & Link

## 1. Mendaftarkan Route
Di file `App.tsx`, kita tentukan URL mana membuka komponen apa.

```tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      {/* Jika buka [website.com/](https://website.com/) maka buka Home */}
      <Route path="/" element={<Home />} />
      
      {/* Jika buka [website.com/about](https://website.com/about) maka buka About */}
      <Route path="/about" element={<About />} />
      
      {/* Halaman 404 (Jika URL ngawur) */}
      <Route path="*" element={<h1>Halaman Tidak Ditemukan</h1>} />
    </Routes>
  );
}
```

## 2. Navigasi (Link)

**PENTING:** Jangan pernah pakai tag `<a>` untuk navigasi internal! Itu akan me-refresh halaman.
Gunakan komponen `<Link>`.

```tsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      {/* ❌ JANGAN PAKAI INI (Bikin reload) */}
      {/* <a href="/about">About</a> */}

      {/* ✅ PAKAI INI (Pindah instan) */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```