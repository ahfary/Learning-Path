---
sidebar_position: 1
title: LocalStorage vs SessionStorage
---

# LocalStorage vs SessionStorage

Selama ini kita menyimpan data di variabel. Masalahnya, saat halaman di-refresh, variabel akan **reset/hilang**.

Untuk menyimpan data agar "awet" di browser pengguna (tanpa Database), kita menggunakan **Web Storage API**.

## Perbedaan Utama

| Fitur | **LocalStorage** | **SessionStorage** |
| :--- | :--- | :--- |
| **Ketahanan** | **Permanen** (Data tidak hilang walau browser ditutup/komputer mati). | **Sementara** (Data hilang begitu tab/browser ditutup). |
| **Scope** | Bisa diakses di semua tab pada domain yang sama. | Hanya bisa diakses di tab yang sedang terbuka saja. |
| **Kapasitas** | Sekitar 5MB - 10MB. | Sekitar 5MB. |
| **Penggunaan** | Simpan tema (Dark Mode), Token Login, Keranjang Belanja. | Simpan data formulir sementara, filter pencarian. |

:::info Tidak Aman
Jangan pernah menyimpan data sensitif seperti **Password** atau **PIN ATM** di Web Storage, karena data ini bisa diintip dengan mudah lewat *Inspect Element*.
:::