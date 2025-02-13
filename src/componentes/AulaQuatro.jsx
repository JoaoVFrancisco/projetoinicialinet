import UseProps from "./UseProps"
import styles from './AulaQuatro.module.css'
import { useState } from "react"

const AulaQuatro = () => {
  const imgPadrao ="https://previews.123rf.com/images/liudmilachernetska/liudmilachernetska2209/liudmilachernetska220918231/191827044-homem-com-c%C3%A2mera-tirando-foto-no-fundo-branco-hobby-interessante.jpg"

  const [Cards] = useState([
{id: 1,imagem: "https://pbs.twimg.com/profile_images/1103685673901588480/3fhdOr0o_400x400.jpg", titulo: "Sylas Comunista", descricao: "Sylas O maior comunista de Runeterra"},
{id: 1,imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfD0EIvuNzHjyZlbsDUo8umGVjIdPA_VOSA&s", titulo: "Ben 10", descricao:"O portador do ominitrix"},
{id: 1,imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaI5X46uT9-a7a5neQOpByZrum9uQX26_WBw&s", titulo: "Silver the Headgehog", descricao:"O personagem mais odiado pela SEGA"},
{id: 1,imagem: "https://m.media-amazon.com/images/M/MV5BMjIzMDM1NDk2NF5BMl5BanBnXkFtZTgwMDg2NTc3MjE@._V1_FMjpg_UX1000_.jpg", titulo: "Rendy Cunnighan", descricao:"o grande ninja"}
])

  return (
    
    <div>
      <h1>Cards Incríveis</h1>
    <div className={styles.cardArea}>
      {Cards.map((card) => (
        <UseProps
          key={card.id}
          imagem={card.imagem}
          titulo={card.titulo}
          descricao={card.descricao}
        />
      ))}
    </div>
    </div>
  )
}

export default AulaQuatro
