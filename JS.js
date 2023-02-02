document.getElementById("tombol").onclick = function() {
    var x = document.getElementById("inputan").value;
    alert(x);
}
document.getElementById("biru").onclick = function(){
    document.getElementById("warna").src="biru.jpg";
}
document.getElementById("merah").onclick = function(){
    document.getElementById("warna").src="merah.jpg";
}
document.getElementById("hitam").onclick = function(){
    document.getElementById("warna").src="hitam.png";
}
document.getElementById("setuju").onclick = function(){
    let barang = document.getElementById("barang").value;
    alert(barang);  
}