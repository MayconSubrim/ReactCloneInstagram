import { useState } from "react";
import parse from "html-react-parser";

export default function Post({post}){

    const [liked, setLiked] = useState(false);

    return(
        <div className="postagem">
            <div className="cabecalho">
                <div className="autor">
                    <img className="picautor" src={post.fotoAutor}></img>
                    <p>{post.autor}</p>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <div className="conteudo">
                <img className="imgcount" src={post.conteudo}></img>
            </div>
            <div className="rodape">
                <div className="interations">
                <div class="curtidas">
                    <ion-icon
                    name={liked === false ? "heart-outline" : "heart"}
                    onClick={() =>{
                        if (liked == false){
                            setLiked(true);
                        }
                        else{
                            setLiked(false);
                        }
                    }}
                    class={liked ? "curtida" : ""}
                    >

                    </ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div className="comentarios">
                    <div className="ComentAmigo">
                        <img src={post.fotoCurtidaAmigo}></img>
                        <p>{parse(post.curtidaAmigo)}</p>
                    </div>
                    <div className="coment">
                        <p><span>{post.autor}</span> {post.descricao}</p>
                        <p>Ver todos comentarios</p>
                        <p><span>{post.amigo}</span> {post.comentario} </p>
                        <p>{post.tempo}</p>
                    </div>
                    <div className="enviarcoment">
                    <div class="subimit">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input placeholder="Adicione um comentario...">
                        </input>
                    </div>
                    <p className="change">Publicar</p>
                    </div>
                </div>
            </div>
        </div>
    )
    }