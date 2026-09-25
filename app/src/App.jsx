import { useState } from 'react'
import './App.css'
import Poke from './assets/Pokes.png'
import Pokedex from './assets/Pokedex.png'
import Item from './assets/MasterBall.png'
import Tipo from './assets/Grassicon.png'
import Insing from './assets/Volcano_Badge.png'
import Meta from './assets/Metapod.png'
import Pedraev from './assets/Pedra_trovao.png'
import Rota from './assets/Rota1.png'
import Sprite from './assets/missingno_sprite.png'
import RareC from './assets/Rare_Candy_Sprite.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="Cabesalho">
        <div className="div1">
          <a href="#sobrePagina" className="item-topo">Sobre a página</a>
          <img src={Poke} className="imagem"/>
          <a href="#sobrePokemon" className="item-topo">Oque é Pokemon?</a>
        </div>
      </section>


      <section id="Corpo">
      <hr className="linha-divisoria" />
        <div className="menu-grid">
          <a href="#Pokedex" className="item-menu">
            <img src={Pokedex} alt="" className="icone-item" />
            <span>Pokédex</span>
          </a>

          <a href="#Insignias" className="item-menu">
            <img src={Insing} alt="" className="icone-item" />
            <span>Insignias</span>
          </a>

          <a href="#PedrasEv" className="item-menu">
            <img src={Pedraev} alt="" className="icone-item" />
            <span>Pedras Evolutivas</span>
          </a>

          <a href="#Itens" className="item-menu">
            <img src={Item} alt="" className="icone-item" />
            <span>Itens</span>
          </a>

          <a href="#Moves" className="item-menu">
            <img src={Meta} alt="" className="icone-item" />
            <span>Moves</span>
          </a>

          <a href="#Habilidades" className="item-menu">
            <img src={RareC} alt="" className="icone-item" />
            <span>Habilidades</span>
          </a>

          <a href="#Tipos" className="item-menu">
            <img src={Tipo} alt="" className="icone-item" />
            <span>Tipos</span>
          </a>

          <a href="#Rotas" className="item-menu">
            <img src={Rota} alt="" className="icone-item" />
            <span>Rotas</span>
          </a>

          <a href="#Sprites" className="item-menu">
            <img src={Sprite} alt="" className="icone-item" />
            <span>Sprites</span>
          </a>

          </div>
      <hr className="linha-divisoria" />
      </section>
    </>
  )
}

export default App
