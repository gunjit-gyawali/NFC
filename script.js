document.getElementById("save-contact").addEventListener("click", function () {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Gunjit D. Gyawali
TEL:+9779866131668
EMAIL:gunjitgyawali1@gmail.com
END:VCARD
  `;

  const blob = new Blob([vCardData], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Gunjit_D_Gyawali.vcf";
  link.click();

  URL.revokeObjectURL(url);
});


document.getElementById("call").addEventListener("click", function () {
  window.location.href = "tel:+9779866131668";
});


document.getElementById("view-profile").addEventListener("click", function () {
  window.open("https://gunjitgyawali.github.io/.com", "_blank");
});
