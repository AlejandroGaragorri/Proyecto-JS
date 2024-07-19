const ValorProducto = parseInt(prompt("ingresá el monto del producto"))

  let Cuotas= prompt(
    "Seleccione la cantidad de Cuotas: 2 3 4 5 o 6"
  )


function EnCuantasCuotas() {
if (Cuotas >6) {
  alert("no se puede en más de 6 cuotas")
}
else if(Cuotas <2)
  alert("En ese caso no necesitas cuotas")
else if(Cuotas >= 2 && Cuotas <=6)
  alert("Usted debera pagar " + ValorProducto / Cuotas + " en " + Cuotas + " cuotas")
else if(Cuotas === 0)
  alert("ERROR")
} 

EnCuantasCuotas()
   
