// Menambahkan angka/operator ke layar kalkulator
function insertdata(data) {
    document.form.view.value += data;
}

// Menghapus semua isi kalkulator
function clearData() {
    document.form.view.value = "";
}

// Menghapus satu karakter terakhir
function deleteData() {
    let value = document.form.view.value;
    document.form.view.value = value.slice(0, -1);
}

// Menghitung hasil operasi
function equal() {
    let value = document.form.view.value;

    if (value === "") {
        return;
    }

    try {
        document.form.view.value = eval(value);
    } catch (error) {
        document.form.view.value = "Error";
    }
}
