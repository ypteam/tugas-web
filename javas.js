// ini buat navigasi ke halaman lain yak. liat di google karna bingung wak wkwkwk
const buttons = document.querySelectorAll(".link");

buttons.forEach(button => {
    button.addEventListener("click", () => {
    const targetPage = button.getAttribute("data-halaman");
    window.location.href = targetPage;
});
});