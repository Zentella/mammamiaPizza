const formatNumber = (price) => {// recibe como param el precio (numero)
  return price.toLocaleString("de-DE");// metodo javaScript para poner el punto para separar unidad de mil y coma para decimal
};
  
export default { formatNumber };// se puede acceder desde cualquier vista o componente
