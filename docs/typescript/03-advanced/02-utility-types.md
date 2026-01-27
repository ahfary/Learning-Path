---
sidebar_position: 2
title: Utility Types (Alat Bantu)
---

# Utility Types

TypeScript menyediakan alat bantu untuk mengubah-ubah Interface dengan cepat. Ini sangat sering dipakai untuk **Props** di React.

Misal kita punya Interface dasar:
```typescript
interface User {
  id: number;
  nama: string;
  email: string;
}
```

## 1. `Partial<T>` (Jadi Opsional Semua)

Mengubah semua properti menjadi boleh kosong (`?`).

* **Kegunaan:** Saat update data profil (tidak harus update semua kolom).

```typescript
// Sekarang id, nama, & email boleh kosong
const updateData: Partial<User> = {
  nama: "Faqih Baru" 
  // id & email tidak diisi tidak error
};
```

## 2. `Required<T>` (Jadi Wajib Semua)

Kebalikan dari Partial. Mengubah yang tadinya opsional (`?`) menjadi wajib diisi.

## 3. `Omit<T, K>` (Buang Sebagian)

Mengambil semua properti, **KECUALI** yang kita sebutkan.

* **Kegunaan:** Saat menampilkan data ke user (Password/ID tidak boleh ditampilkan).

```typescript
// Buat tipe baru tanpa 'email'
type UserTanpaEmail = Omit<User, "email">;

const tamu: UserTanpaEmail = {
  id: 1,
  nama: "Budi"
  // email: "budi@mail.com" // ❌ Error kalau maksa diisi
};
```

## 4. `Pick<T, K>` (Ambil Sebagian)

Kebalikan dari Omit. Kita cuma mengambil yang kita butuhkan saja.

```typescript
// Cuma butuh email saja
type HanyaEmail = Pick<User, "email">;