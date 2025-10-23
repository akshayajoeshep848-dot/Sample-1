let qrimage = document.getElementById("qr-img");
let qrtext = document.getElementById("qr-text");
let downloadbtn = document.getElementById("download-btn");

function getQR() {
  let text = qrtext.value.trim();
  if (text === "") {
    qrtext.classList.add("shake");
    setTimeout(() => {
      qrtext.classList.remove("shake");
    }, 300);
    return;
  }
  qrimage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(qrtext.value);
  qrimage.style.display = "block";
  downloadbtn.style.display = "block";
  qrtext.value = "";
}

function downloadQR() {
  if (qrimage.src === "" || qrimage.style.display === "none") {
    alert("Please generate the QR code first!");
    return;
  } else {
    // let filename = qrtext.value.trim() || "Qr-code";
    // filename = filename.replace(/\s+/g, "_");
    // let link = document.createElement("a");
    // link.href = qrimage.src;
    // link.download = `${filename}.png`;
    // link.click();

    fetch(qrimage.src)
      .then((response) => response.blob())
      .then((blob) => {
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob); // Create a temporary local URL
        link.download = "Qr-code.png"; // File name
        link.click();
        URL.revokeObjectURL(link.href); // Free up memory
      })
      .catch(() => alert("Failed to download QR code. Try again."));
  }
}
