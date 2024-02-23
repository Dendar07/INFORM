function tekan() {
  var nisnstr = document.forms[0].nisn.value;
  var namastr = document.forms[0].nama.value;
  var alamatstr = document.forms[0].alamat.value;
  var belumMenikahChecked = document.forms[0].belum_menikah.checked;
  var sudahMenikahChecked = document.forms[0].sudah_menikah.checked;

  document.forms[0].nis.value = nisnstr;
  document.forms[0].name.value = namastr;
  document.forms[0].address.value = alamatstr;

  document.getElementById("jenis_kelamin_result").innerText =
    document.forms[0].jenis_kelamin.value;
  document.getElementById("agama_result").innerText =
    document.forms[0].agama.value;
  document.forms[0].belum_menikah_result.checked = belumMenikahChecked;
  document.forms[0].sudah_menikah_result.checked = sudahMenikahChecked;
     document.getElementById("jurusan_result").innerText =
       document.forms[0].jurusan.value;
     var ketstr = document.forms[0].Ket.value;
     document.forms[0].Oket.value = ketstr;
}
