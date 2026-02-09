---
sidebar_position: 3
title: Dynamic & useNavigate
---

# Dynamic & useNavigate

## 1. Dynamic Route (Parameter URL)
Bagaimana jika kita punya halaman detail produk yang ID-nya beda-beda? (`/produk/1`, `/produk/99`).

### Step A: Setup Route
Gunakan titik dua `:` untuk menandai parameter.
```tsx
<Route path="/produk/:id" element={<DetailProduk />} />
```

### Step B: Tangkap ID (`useParams`)

Di halaman detail, kita ambil ID-nya.

```tsx
import { useParams } from 'react-router-dom';

function DetailProduk() {
  // Ambil parameter 'id' dari URL
  const { id } = useParams();

  return <h1>Ini adalah Produk nomor: {id}</h1>;
}
```

## 2. useNavigate (Pindah Programatik)

Bagaimana jika kita mau pindah halaman **setelah** user login atau klik tombol submit? Kita tidak bisa pakai `<Link>`.
Gunakan hook `useNavigate`.

```tsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Ceritanya proses login sukses...
    
    // Lempar user ke halaman dashboard
    navigate('/dashboard');
    
    // Atau mundur ke halaman sebelumnya
    // navigate(-1); 
  };

  return <button onClick={handleLogin}>Login</button>;
}
```