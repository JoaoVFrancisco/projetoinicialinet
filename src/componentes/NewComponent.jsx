import "./NewComponent.css";

const NewComponent = () => {

    const isGerente = true; // variavel para verificar se é gerente
  return (
    <div>
        <h1 style={
             isGerente // faz a verificação se é gerente
         ? {color: "pink", backgroundColor: "aquamarine"} //se der verdadeiro
         : {color:"red", backgroundColor: "lightblue"}}//se der falso
         >
            aqui vem uma estlização</h1>
      <p id="Rick">Wubba lubba dub dub</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2O8KFMy-nL09hZikVA_ay_YOHklV2k-tug&s"
        alt="Goat"
      />
      <p style={{color:"green", fontSize:"60px", backgroundColor:"yellow"}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        eum sint assumenda laboriosam ipsam! Sed molestiae illum itaque dolore,
        velit saepe nesciunt magni placeat possimus? Accusantium non deserunt
        nam officia.
      </p>
    </div>
  );
};

export default NewComponent;
