---
sidebar_position: 2
title: Abstract & Implements
---

# Abstract & Implements

## 1. Abstract Class (Konsep Abstrak)
Abstract Class adalah class yang "setengah jadi". Ia tidak bisa dibuat langsung menjadi object (`new`), tapi hanya bisa dijadikan induk (parent) untuk class lain.

Gunakan ini jika Anda ingin memastikan semua kelas anak **wajib** memiliki method tertentu.

```typescript
abstract class Hewan {
  constructor(public nama: string) {}

  // Method biasa (sudah ada isinya)
  makan() {
    console.log("Nyam nyam...");
  }

  // Method Abstrak (Anak WAJIB bikin isinya sendiri)
  abstract bergerak(): void;
}

class Burung extends Hewan {
  // Wajib ada karena Induknya minta
  bergerak() {
    console.log("Terbang");
  }
}

// const h = new Hewan("Aneh"); // ❌ Error: Cannot create instance of abstract class
const b = new Burung("Pipit"); // ✅ Aman
```

## 2. Implements (Menuruti Interface)

Jika `extends` itu mewarisi sifat, `implements` itu **mematuhi kontrak**.
Class yang meng-implementasikan sebuah Interface **wajib** memiliki semua properti yang diminta Interface tersebut.

```typescript
interface PemutarMusik {
  lagu: string;
  play(): void;
}

class Spotify implements PemutarMusik {
  lagu: string;

  constructor(lagu: string) {
    this.lagu = lagu;
  }

  // Wajib ada method play
  play() {
    console.log("Memutar: " + this.lagu);
  }
}