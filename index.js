const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){ 
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if ((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") 
    && !isNaN(op1) && !isNaN(op2)  //aca pido que se validen esas operaciones
    ){
        let resultado;
        switch(operacion){ //este me corta las operaciones
            case "+":
                resultado = op1 + op2
                break;
                case "-":
                resultado = op1 - op2
                break;
                case "*":
                resultado = op1 * op2
                break;
                case "/":
                resultado = op1 / op2
                break;
        }
      pResultado.innerText = "El resultado es = " + resultado
    } else {
        pResultado.innerText = "Calculo incorrecto"
    }
}
