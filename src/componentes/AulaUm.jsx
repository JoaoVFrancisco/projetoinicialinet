// Aula 1
import MyComponent from "./MyComponent";
 import NewComponent from "./NewComponent";
 import OtherComponent from "./OtherComponent";

const AulaUm = () => {
  return (
    <div>
     
       {/* Aula 1 */}
      {/* seu compontente deve ser renderizado aqui */}
      <NewComponent />
      <h1>Meu titulo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae
        doloremque cumque natus asperiores exercitationem, dolores, non
        voluptatibus magnam at velit nihil quos sit sequi quas laudantium ea
        obcaecati reprehenderit.
      </p>
      <MyComponent />
      <OtherComponent />
       
    </div>
  )
}

export default AulaUm
