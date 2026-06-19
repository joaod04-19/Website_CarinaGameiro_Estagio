/* ===========================================
  FORMULÁRIO DE WHATSAPP (atendimento.html)
============================================== */
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formWhatsapp");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const consultation = document.getElementById("consultation").value;
      const area = document.getElementById("area").value;
      const urgency = document.getElementById("urgency").value;
      const message = document.getElementById("message").value;

      const text = `Olá, o meu nome é ${name}, gostaria de marcar uma consulta consigo.
        Regime de Consulta: ${consultation}.
        Área de Apoio: ${area}.
        Urgência: ${urgency}.
        Telemóvel: ${phone}.
        Email: ${email}.
        Mensagem: ${message}`;

      const numCarina = "351964360936";
      const url = `https://wa.me/${numCarina}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");
    });
  }

});