---
sidebar_position: 2
title: Menggunakan Axios
---

# Menggunakan Axios

Axios adalah library pihak ketiga yang lebih powerful daripada `fetch`.
Kelebihannya: Otomatis mengubah JSON, handling error lebih baik, dan syntax lebih bersih.

## 1. Instalasi
```bash
npm install axios
```

## 2. Cara Pakai

Perhatikan bedanya dengan `fetch`: Kita tidak perlu `response.json()` lagi.

```tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Axios langsung mengembalikan data di properti .data
    axios.get('[https://api.example.com/products](https://api.example.com/products)')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error woy:", err);
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>Data Loaded!</div>;
}
```

:::tip Best Practice: Service Pattern
Di proyek besar, jangan panggil `axios` langsung di komponen. Buat folder `src/services/api.ts` dan simpan konfigurasi axios di sana.
:::