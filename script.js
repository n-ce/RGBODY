if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
    .register("service-worker.js")
    .then(res => console.log("service worker registered"))
    .catch(err => console.log("service worker not registered", err))
  })}
function RGB()
{
  var r = Number(document.getElementById("Red").value).toString(16);
  var g = Number(document.getElementById("Green").value).toString(16);
  var b = Number(document.getElementById("Blue").value).toString(16);
  document.body.style.backgroundColor="#"+r+g+b;
  document.getElementById("code").innerHTML="#"+r+g+b;
}