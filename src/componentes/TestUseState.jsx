// importando o useState
import {useState} from "react";


const TestUseState = () => {
    // criando uma variavel com um numero fixo
    let numero = 10;
    // exibe o numero no console
    console.log(numero);

    // uso efetivo do useState criando uma variavel com um numero fixo
    const [number, setNumber] = useState(11);

  return (
    <div>
        {/* demosntração de uma troca de numero sem o uso do useState */}
      <h2>Teste de troca de número sem useState</h2>
      {/* exibe o valor do atual */}
      <h3>Valor atual {numero}</h3>
      {/* o botão para trocar o valor com uma estilizção */}
      <button style={{backgroundColor:"red", color: "white"}}
    //   era para mudar o numero para 20, mas não funcionou
       onClick={() => (numero = 20)}>
        Trocar
        </button>

        {/* Usando o useState para mudar os numeros de forma correta  */}
        <h2>Teste de troca de número com useState</h2>
        {/* exibe o numero atual */}
        <h3>Valor Atual {number}</h3>
        {/* o botão de subtração com uma estilizção */}
        <button style={{backgroundColor:"purple", color: "yellow",  marginRight: '5px'}}
        // usamos o useState para diminuir o numero a parti do numero padrão
        onClick={() => {setNumber(number - 1)}}>
            -
        </button>
        {/* o botão de adicionar com uma estilizção */}
        <button style={{backgroundColor:"purple", color: "yellow",  marginRight: '5px'}}
        // usamos o useState para aumentar o numero a parti do numero padrão
        onClick={() => {setNumber(number + 1)}}>
            +
        </button>
        {/* o botão de reset com uma estilizção */}
        <button style={{backgroundColor:"purple", color: "yellow",  marginRight: '5px'}}
        // usamos o useState para resetar o numero para o numero padão valor 11
        onClick={() => {setNumber(11)}}>
            Resetar
        </button>
    </div>
  )
}

export default TestUseState
