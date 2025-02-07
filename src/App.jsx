import "./App.css";
import MyComponent from "./componentes/MyComponent";
import NewComponent from "./componentes/NewComponent";
import OtherComponent from "./componentes/OtherComponent";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
