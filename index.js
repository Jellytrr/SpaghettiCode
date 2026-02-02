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
