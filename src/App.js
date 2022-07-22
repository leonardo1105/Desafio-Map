import React,{Component} from 'react';
import './App.css'
import tommy from './images/Tommys3.webp'
import arthur from './images/arthur.webp'
import john from './images/Johns3.webp'
import michael from './images/michael.webp'
import polly from './images/polly.webp'
import ada from './images/ada.webp'

export default class App extends Component{
  state={
    personagens:[
      {
        id:1,
        nome:'Thomas Shelby',
        descricao:"Thomas Michael 'Tommy' Shelby é filho de Arthur e Mrs. Shelby , irmão de Arthur , John , Ada e Finn Shelby , pai de Charles e Ruby Shelby , além de ser marido de Grace e Lizzie Shelby . Ele é o líder da gangue criminosa de Birmingham, os Peaky Blinders e o patriarca da família Shelby .",
        idade:43,
        imagem:tommy,
        imgAlt:'Foto-Thomas Shelby'
      },
      {
        id:2,
        nome:'Arthur Shelby',
        descricao:'Arthur Shelby é o filho mais velho de Arthur e Mrs Shelby , irmão mais velho de Thomas , John , Ada e Finn Shelby , além de ser o pai de Billy Shelby . Ele foi casado com Linda Shelby , e é um membro forte dos Peaky Blinders . Ele também é vice-presidente adjunto da Shelby Company Limited e membro da ICA, atuando como braço direito de seu irmão. Arthur tem problemas com drogas, que pioram com o tempo.',
        idade:46,
        imagem:arthur,
        imgAlt:'Foto-Arthur Shelby'
      },
      {
        id:3,
        nome:'John Shelby',
        descricao:'John Michael Shelby (também Johnny e John Boy ) era o terceiro filho de Arthur Shelby Sr , irmão de Arthur , Thomas , Ada e Finn Shelby , além de ser marido de Esme Shelby . John tem sete filhos, dois filhos e duas filhas com sua falecida primeira esposa Martha Shelby , e três filhos com Esme, cujos sexos são desconhecidos. Uma de suas filhas se chama Katie Shelby , mas os nomes de seus outros filhos são desconhecidos.',
        idade:30,
        imagem:john,
        imgAlt:'Foto-John Shelby'
      },
      {
        id:4,
        nome:'Michael Gray',
        descricao:'Michael Gray , apresentado na segunda temporada, filho de Polly Shelby , a prima dos irmãos Shelby, e um ex-membro poderoso e de alto escalão dos Peaky Blinders . Ele é o ex-contador-chefe da Shelby Company Limited , uma posição que causa tensões com John Shelby.',
        idade:30,
        imagem:michael,
        imgAlt:'Foto-Michael Gray'
      },
      {
        id:5,
        nome:'Polly Gray',
        descricao:'Elizabeth "Polly" Gray (nascida Shelby) era a mãe de Michael e Anna Gray , tia de Arthur , Thomas , John , Ada e Finn Shelby , além de ser a matriarca da Família Shelby . Ela fazia parte da gangue criminosa de Birmingham, The Peaky Blinders , contadora certificada e tesoureira da Shelby Company Limited .',
        idade:45,
        imagem:polly,
        imgAlt:'Foto-Polly Gray'
      },
      {
        id:6,
        nome:'Ada Thorne',
        descricao:'Ada Thorne (nascida Shelby ) é a quarta e única mulher dos irmãos Shelby e a única irmã inicialmente não envolvida com os Peaky Blinders . No final de 1924, no entanto, Ada assume uma posição de liderança na filial dos Estados Unidos da Shelby Company Limited , lidando apenas com aquisições legais; ao contrário de seus irmãos em Birmingham, Inglaterra.',
        idade:36,
        imagem:ada,
        imgAlt:'Foto-Ada Thorne'
      }
    ]
  }
  render(){
    return(
      <div className='cards'>
      {this.state.personagens.map((item)=>(
        <div key={item.id} className='espacamento'>
          <div className='card'>
            <img src={item.imagem} alt={item.imgAlt}></img>
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
            <p>Idade: {item.idade}</p>
          </div>
        </div>
      ))}
      </div>
    )  
}
}