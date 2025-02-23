function hitungRataRataDanGrade(nilaiWeb: number, nilaiKomputer: number, nilaiStatistika: number, nilaiSistemBasisData: number): void {
    
    if (
        nilaiWeb < 0 || nilaiWeb > 100 ||
        nilaiKomputer < 0 || nilaiKomputer > 100 ||
        nilaiStatistika < 0 || nilaiStatistika > 100 ||
        nilaiSistemBasisData < 0 || nilaiSistemBasisData > 100
    ) {
        console.log("Semua nilai harus di antara 0 dan 100.");
        return;
    }

    
    const totalNilai = nilaiWeb + nilaiKomputer + nilaiStatistika + nilaiSistemBasisData;
    const rataRata = totalNilai / 4;

    
    let grade: string;
    if (rataRata >= 90) {
        grade = "A";
    } else if (rataRata >= 80) {
        grade = "B";
    } else if (rataRata >= 70) {
        grade = "C";
    } else if (rataRata >= 60) {
        grade = "D";
    } else {
        grade = "E";
    }

    
    console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}


const nilaiPemrogramanWeb = 70; 
const nilaiPemrogramanKomputer = 80; 
const nilaiStatistika = 75; 
const nilaiSistemBasisData = 90; 

hitungRataRataDanGrade(nilaiPemrogramanWeb, nilaiPemrogramanKomputer, nilaiStatistika, nilaiSistemBasisData);