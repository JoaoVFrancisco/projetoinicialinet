// imporntado o useState
import { useState } from "react"

const UseList = () => {
    // criando uma lista com nomes usando o use state
    const [lista] = useState(["Pedro", "Tiago", "João"])

    const [usuarios] = useState([
        {id: 1, nome: "Michael", login: "michael@gmail.com"},
        {id: 2, nome: "Lorenzo", login: "lorenzo@gmail.com"},
        {id: 3, nome: "Cris", login: "cris@gmail.com"}
    ])
  return (
    <div>
        {/* todos o nomes da lista */}
      <p>Nome: {lista[0]}</p>
      <p>Nome: {lista[1]}</p>
      <p>Nome: {lista[2]}</p>

      {/* lista ordenada  */}
      <ul>
        {/* usando o map para ler a lista e crian um li para cada item (obviamente usando o useStates) */}
        {lista.map(
            // para cada item da lista
            (valorItem, numeroIndice) => 
                // mostra o valor do item e o numero do indice
            (<li style={{listStyle: "none"}} key={numeroIndice}>{valorItem}</li>
                
            ))}
      </ul>
        {/* lista de usuarios */}
      <ul>
            {/* está lendo a lista de usuarios e mapeando ela */}
       {usuarios.map((usuarios) => (
        // esta criando um li para cada item da lista a partir do id lido e montando a lista de com os dados
        <li style={{listStyle: "none"}} key={usuarios.id}>
            {/* exibe o nome dos usuarios */}
        <p>nome: {usuarios.nome}</p>
        {/* exibe o login dos usuarios */}
        <p>login: {usuarios.login}</p>
       </li>
    ))}
      </ul>
    </div>
  )
}

export default UseList
