---
sidebar_position: 1
title: Access Modifiers (Visibility)
---

# Access Modifiers (Visibility)

TypeScript memberikan kita kontrol penuh atas siapa yang boleh mengakses properti atau method dalam sebuah class. Ada 3 level akses:

## 1. Public (Bebas)
Ini adalah default. Bisa diakses dari mana saja (dalam class, kelas anak, maupun dari luar).

```typescript
class Mobil {
  public merk: string; // Tulis 'public' atau tidak, sama saja

  constructor(merk: string) {
    this.merk = merk;
  }
}

const avanza = new Mobil("Toyota");
console.log(avanza.merk); // ✅ Boleh akses langsung

```

## 2. Private (Rahasia Pribadi)

Hanya bisa diakses di **dalam class itu sendiri**.

* Tidak bisa diakses dari luar.
* Tidak bisa diakses oleh kelas anak (`extends`).

```typescript
class Dompet {
  private saldo: number;

  constructor(saldoAwal: number) {
    this.saldo = saldoAwal;
  }

  cekSaldo() {
    return this.saldo; // ✅ Boleh (masih satu class)
  }
}

const dompetku = new Dompet(50000);
// console.log(dompetku.saldo); // ❌ Error: Property 'saldo' is private

```

## 3. Protected (Warisan Keluarga)

Bisa diakses di **dalam class** dan **kelas anak (turunan)**, tapi tidak bisa dari luar.

```typescript
class OrangTua {
  protected warisan: number = 1000000;
}

class Anak extends OrangTua {
  ambilWarisan() {
    return this.warisan; // ✅ Boleh (karena anak)
  }
}

const bapak = new OrangTua();
// console.log(bapak.warisan); // ❌ Error: Protected cuma buat keluarga

```

## Shortcut Constructor

TS punya cara cepat membuat properti langsung di parameter constructor.

```typescript
// Cara Lama (Ribet)
class User {
  nama: string;
  constructor(nama: string) { this.nama = nama; }
}

// Cara Cepat TS (Langsung jadi properti)
class UserCepat {
  constructor(public nama: string, private umur: number) {}
}