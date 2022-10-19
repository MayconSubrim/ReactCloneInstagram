import ichigo from '../Imagens/ichigo.jpg'
import Sugestoes from './Sugestoes'

export default function Usuario(){
    return(

    <div className="espaçousuario">
        <div className="User">
            <div class="Pic"><img className="PicUser" src={ichigo} alt=""></img></div>
            <div className="Usuarios">
                <div class="informations">

                <sapan>

                    <p className="nomezin">Ichigo Kurosaki</p>

                </sapan>

                <span>

                    <p className="aroba">Kurosaki Ichicgo</p>

                </span>

                </div>

                <span className="mudar">
                    <p className="change">Mudar</p>
                </span>

            </div>
        </div>
        <span className="sugestoes">
            <p>Sugestões para você</p>
            <p>Ver tudo</p>
        </span>
        <Sugestoes></Sugestoes>
        <span className="direitos"><p><span>Sobre</span> - <span>Ajuda</span> - <span>Imprensa</span> - <span>API</span> - <span>Carreiras</span> - <span>Privacida</span> - <span>Termos</span> - <span>Localizações</span> - Idioma
        </p>
        <p>
        © 2022 INSTAGRAM FROM META
        </p>
        </span>
    
    </div>
        
    )
}