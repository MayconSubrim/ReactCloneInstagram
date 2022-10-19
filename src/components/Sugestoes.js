import kempachi from '../Imagens/Kempachi.jpg'
import ikaku from '../Imagens/ikaku.jpeg'
import greenprofile from "../Imagens/grenprofile.jpg"
import halibelpic from "../Imagens/halibelprofile.jpg"
import ramgiku from "../Imagens/rangiku.jpg"

export default function Sugestoes(){

    const sugestions = [

        {
            foto: kempachi,
            nome: "ZarakiDrake"
        },

        {
            foto: ikaku,
            nome: "Ikkaku"
        },

        {
            foto: ramgiku,
            nome: "rangiku"
        },

        {
            foto: halibelpic,
            nome: "Helibel"
        },

        {
            foto: greenprofile,
            nome: "GrimmJow"
        }
    ]

    return(
        <div className="susgestiones">
            <div className="pessoinhas">
                {sugestions.map((Sus) =>{
                    return(
                    <div className="recomend">
                        <img className="img_sugestions" src={Sus.foto} alt=""></img>
                        <div className="people">
                        <p className='nomes_sugestions'>{Sus.nome}</p>
                        <p>Seguido(a) por orihime e mais 7 pessoas</p>
                        </div>
                        <p className="change">Seguir</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}