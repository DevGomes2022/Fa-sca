const siteLink = "http://127.0.0.1:5500/Fa-sca/noticias/aviaodopresidentelula/aviaodopresidentelula.html#inicio"; // Substitua pelo link do seu site

function toggleShareOptions() {
    const shareOptions = document.getElementById("shareOptions");
    shareOptions.style.display = shareOptions.style.display === "none" ? "block" : "none";
}

function copyLink() {
    navigator.clipboard.writeText(siteLink)
        .then(() => alert("Link copiado!"))
        .catch(err => console.error("Erro ao copiar link:", err));
}

function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: "Confira este site!",
            text: "Dê uma olhada neste site interessante!",
            url: siteLink
        })
        .then(() => console.log("Compartilhamento realizado com sucesso!"))
        .catch(err => console.error("Erro ao compartilhar:", err));
    } else {
        alert("A funcionalidade de compartilhamento não é suportada neste navegador.");
    }
}