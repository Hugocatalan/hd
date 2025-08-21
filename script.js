// === CONTADOR (evento en 2 días desde ahora) ===
const fechaEvento = new Date();
fechaEvento.setDate(fechaEvento.getDate() + 2);

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento.getTime() - ahora;

  if (diferencia > 0) {
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
      `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  } else {
    document.getElementById("contador").innerHTML = "🎉 ¡El evento ha comenzado!";
  }
}, 1000);

// === SUBIR LOGO ===
const uploadInput = document.getElementById("uploadLogo");
const logoImg = document.getElementById("logo");

uploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      logoImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
