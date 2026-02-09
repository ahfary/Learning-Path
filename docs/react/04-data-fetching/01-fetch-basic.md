---
sidebar_position: 1
title: Fetch API (Manual)
---

# Fetch API (Manual)

Cara paling dasar mengambil data adalah menggunakan `fetch` di dalam `useEffect`.

## Pola Standar
Saat mengambil data, kita hampir selalu membutuhkan 3 state ini:

1.  **Data:** Untuk menyimpan hasil.
2.  **Loading:** Untuk menampilkan spinner saat menunggu.
3.  **Error:** Untuk menampilkan pesan jika gagal.

```tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fungsi async di dalam useEffect
    const ambilData = async () => {
      try {
        const response = await fetch('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)');
        
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        
        const hasil = await response.json();
        setUsers(hasil);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false); // Selesai loading (baik sukses maupun gagal)
      }
    };

    ambilData();
  }, []);

  // Tampilan Kondisional
  if (loading) return <p>Sedang memuat data...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```