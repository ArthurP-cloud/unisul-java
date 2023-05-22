
function fatorial(valor) {
  if (valor<2) return valor;
  return valor*fatorial(valor-1);
  }
  function controlador(vl_valor) {
  return document.form.txt_fatorial.value=fatorial(vl_valor);
  }