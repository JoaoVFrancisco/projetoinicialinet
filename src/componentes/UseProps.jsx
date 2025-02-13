import styles from './UseProps.module.css'

const UseProps = ({id, imagem, titulo, descricao}) => {
    // console.log(props);

  return (
    <div className={styles.card}>
      <img src={imagem} className={styles.img} />
      <h4>{titulo}</h4>
      <p className={styles.p}>{descricao}</p>
      <button>Visualizar</button>
    </div>
  )
}

export default UseProps


// import styles from './UseProps.module.css'

// const UseProps = (props) => {
//     console.log(props);

//   return (
//     <div className={styles.card}>
//       <img src={props.imagem}
//        alt=""
//        className={styles.img} />
//       <h4>{props.titulo}</h4>
//       <p className={styles.p}>{props.descricao}</p>
//       <button>Visualizar</button>
//     </div>
//   )
// }

// export default UseProps
