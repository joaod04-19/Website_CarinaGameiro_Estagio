document.addEventListener("DOMContentLoaded", function () {

  console.log("JS inicializado");

  // Animação reveal
  const elements = document.querySelectorAll(".reveal");
  elements.forEach(el => {
    el.classList.add("show");
  });

  // Serviços - Mobile
  if (window.innerWidth <= 768) {
    const cards = document.querySelectorAll(".servico-card");

    cards.forEach(card => {
      card.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  }

  // WhatsApp
  const form = document.getElementById("formWhatsapp");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telemovel = document.getElementById("telemovel").value;
      const consulta = document.getElementById("consulta").value;
      const area = document.getElementById("area").value;
      const urgencia = document.getElementById("urgencia").value;
      const mensagem = document.getElementById("mensagem").value;

      const texto = `Olá, o meu nome é ${nome}, gostaria de marcar uma consulta consigo.
        Regime de Consulta: ${consulta}.
        Área de Apoio: ${area}.
        Urgência: ${urgencia}.
        Telemóvel: ${telemovel}.
        Email: ${email}.
        Mensagem: ${mensagem}`;

      const numCarina = "351964360936";
      const url = `https://wa.me/${numCarina}?text=${encodeURIComponent(texto)}`;

      window.open(url, "_blank");
    });
  }

});