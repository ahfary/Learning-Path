---
sidebar_position: 3
title: Props & TypeScript Interface
---

# Props & Interface

**Props** (Properties) adalah cara komponen induk mengirim data ke komponen anak (mirip atribut HTML).

Karena kita pakai TypeScript, kita wajib mendefinisikan "Bentuk Data" props menggunakan **Interface**.

## Studi Kasus: Kartu Profil

### 1. Buat Interface (Kontrak Data)
Kita tentukan bahwa komponen `Kartu` butuh `nama` (string) dan `umur` (number).

```tsx
interface KartuProps {
  nama: string;
  umur: number;
  pekerjaan?: string; // Opsional
}

```

### 2. Terapkan di Komponen

Gunakan syntax `({ nama, umur }: KartuProps)` untuk langsung memecah data (Destructuring).

```tsx
const Kartu = ({ nama, umur, pekerjaan }: KartuProps) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{nama}</h2>
      <p>Umur: {umur} tahun</p>
      {/* Jika pekerjaan ada, tampilkan. Jika tidak, abaikan. */}
      {pekerjaan && <p>Job: {pekerjaan}</p>}
    </div>
  );
};

```

### 3. Cara Pakai (Aman Terkendali)

TS akan error jika kita lupa mengisi `nama` atau salah mengisi `umur` dengan teks.

```tsx
// ✅ Benar
<Kartu nama="Faqih" umur={25} />

// ❌ Error (Kurang 'umur')
// <Kartu nama="Budi" />

// ❌ Error (Tipe data salah)
// <Kartu nama="Budi" umur="Dua Puluh" />