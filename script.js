function RGB()
{
  var r = Number(document.getElementById("Red").value).toString(16);
  var g = Number(document.getElementById("Green").value).toString(16);
  var b = Number(document.getElementById("Blue").value).toString(16);
  document.body.style.backgroundColor="#"+r+g+b;
}