
const ShowEvent = () => {
    const teste = (e) => {
        console.log(e);
        console.log("Função externa ativada")
    }

  return (
    <div>
        <button 
        style={{backgroundColor: "pink"}}
         onClick={teste}>
            Ativa Função Externa
         </button>
         <button style={{backgroundColor: "lightgreen"}}
         onClick={() => console.log("Função interna ativada")}>
            Ativa Função Interna
         </button>
    </div>
  )
}

export default ShowEvent
