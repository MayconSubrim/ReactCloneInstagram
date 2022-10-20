import Stories from "./Stories";
import Usuario from "./Usuario";
import Post from "./Post";
import green from "../Imagens/grenjow.jpg"
import greenprofile from "../Imagens/grenprofile.jpg"
import halibelpic from "../Imagens/halibelprofile.jpg"
import aizen from "../Imagens/Ainzen.jpg"
import aizenprofile from "../Imagens/aizenprofile.jpg"
import urohara from '../Imagens/urohara.jpg'
import uryu from '../Imagens/uryu.jpg'
import yasutora from '../Imagens/yasutora.jpg'
import yasu from '../Imagens/yasu.jpg'

export default function Feed(){
    const posts = [

        {
        autor: "GrimmJow",
        fotoAutor: greenprofile,
        tipoConteudo: "imagem",
        conteudo: green,
        descricao: "Not all those who wander are lost.",
        amigo: "Halibel",
        curtidaAmigo: "Curtido por <span>Halibel</span> e outras pessoas",
        fotoCurtidaAmigo: halibelpic,
        comentario: "ele possui o dripe 🥶",
        tempo: "HÁ 10 DIAS",
        
        },

        {
        autor: "Yoruichi",
        fotoAutor: aizenprofile,
        tipoConteudo: "imagem",
        conteudo: aizen,
        descricao: "Segura o look da mãe 😎.",
        amigo: "Urohara",
        curtidaAmigo: "Curtido por <span>Urohara</span> e <span>outras pessoas<span>",
        fotoCurtidaAmigo: urohara,
        comentario: "Minha gatinha <3",
        tempo: "HÁ 13 DIAS"

        },

        {
        autor: "Yasutora",
        fotoAutor: yasutora,
        tipoConteudo: "imagem",
        conteudo: yasu,
        descricao: "Never stop get me up.",
        amigo: "Uryu",
        curtidaAmigo: "Curtido por <span>Uryu</span> e <span>outras pessoas<span>",
        fotoCurtidaAmigo: uryu,
        comentario: "O mais brabo de todos.",
        tempo: "HÁ 13 DIAS"
        },

    ]
    return(
        <main className="corpo">
            <div className="conteudo">
            <Stories></Stories>
            {posts.map(post => <Post post={post}/>)}
            </div>
            <Usuario></Usuario>
        </main>
    );
}