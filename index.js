class Karakter {
  constructor(nama, hp, damage) {
    this.nama = nama;
    this.hp = hp;
    this.damage = damage;
  }

  serang(target) {
    target.hp -= this.damage;
    console.log(
      this.nama + " menyerang " + target.nama + 
      "! Sisa HP " + target.nama + ": " + target.hp
    );
  }
}

// Contoh penggunaan
const player = new Karakter("Arthur", 1200, 150);
const enemy = new Karakter("Dragon", 2000, 50);

player.serang(enemy);
// Output: Arthur menyerang Dragon, Sisa HP Dragon: 1850


// Jawaban Nomor 4 : Dengan menggunakan method diatas, code bisa dibuat reuseable karena satu method bisa dipakai di semua karakter tanpa perlu menulis ulang atau copy paste
// Jawaban Nomor 4 : Dengan menggunakan method diatas, kode juga jadi lebih rapih dan terstruktur karena setiap logic menempel ke objek yang sama
// Jawaban Nomor 4 : Dengan menggunakan method diatas, kode juga jadi lebih mudah dikembangkan karena jika ada perubahan logic, kita hanya perlu mengubah di satu tempat saja yaitu di method tersebut
