---
sidebar_position: 3
title: Modern Fetching (React Query)
---

# Modern Fetching (React Query)

Cara manual (useEffect) punya kelemahan:
1.  Harus bikin state loading & error manual terus-menerus.
2.  Tidak ada **Caching** (Data diambil ulang terus setiap pindah halaman).

Solusinya: Gunakan **TanStack Query** (sebelumnya React Query).

## Konsep
Kita tidak perlu lagi bikin `useEffect` dan `useState` manual. Cukup pakai hook `useQuery`.

```tsx
// Contoh Penggunaan (Pseudo-code)
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function App() {
  // Satu baris ajaib!
  // isLoading, error, dan data sudah disediakan otomatis.
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios.get('[https://api.github.com/repos/tannerlinsley/react-query').then(res](https://api.github.com/repos/tannerlinsley/react-query').then(res) => res.data),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}
```

:::info Kenapa ini Populer?
React Query otomatis melakukan:

* **Refetch on Window Focus:** Data otomatis update saat user kembali ke tab browser.
* **Caching:** Data disimpan di memori, jadi halaman terasa instan saat dibuka kembali.
:::