function validasiForm() {

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var telepon = document.getElementById("telepon").value;
    var pesan = document.getElementById("pesan").value;

    if (nama == "" || email == "" ||
        telepon == "" || pesan == "") {

        alert("Yuk, lengkapi semua kolom terlebih dahulu!");
        return false;
    }

    var polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email)) {
        alert("Masukkan alamat email yang benar ya!");
        return false;
    }

    var polaTelepon = /^[0-9]{10,15}$/;

    if (!polaTelepon.test(telepon)) {
        alert("Nomor telepon harus 10 sampai 15 angka!");
        return false;
    }

    document.getElementById("hasil").innerHTML =
    "Terima kasih " + nama +
    "! Pesan kamu berhasil divalidasi. ??";

    alert("Pesan berhasil divalidasi. Terima kasih!");

    return false;
}// JavaScript Document