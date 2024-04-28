fetch("https://api.apispreadsheets.com/data/9jBeZfSmkF1aCPze/", {
	method: "POST",
	body: JSON.stringify({"data": {"Nama":"value","Kelas":"value","Tanggal":"value","Keterangan":"value"}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})