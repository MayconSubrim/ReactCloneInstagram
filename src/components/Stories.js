// import back from '../Imagens/stories_background.jpg'
import byakua from '../Imagens/bayakuia.jpg'
import orihime from '../Imagens/orihime.jpg'
import renji from '../Imagens/renji.jpg'
import yamamoto from '../Imagens/yamamoto.jpg'
import Rukia from '../Imagens/Rukia.jpg'
import uryu from '../Imagens/uryu.jpg'
import yasutora from '../Imagens/yasutora.jpg'
import urohara from '../Imagens/urohara.jpg'


export default function Stories(){
    const Stories = [
        
        {
            foto: byakua,
            nome: "Byakua"
        },

        {
            foto: orihime,
            nome: "Oirhime"
        },

        {
            foto: renji,
            nome: "Renji"
        },

        {
            foto: Rukia,
            nome: 'Rukia'
        },

        {
            foto: urohara,
            nome: "Urohara"
        },

        {
            foto: uryu,
            nome: "Uryu"
        },

        {
            foto: yamamoto,
            nome: 'Yamamoto'
        },

        {
            foto: yasutora,
            nome: 'Yasutora'
        },

    ];

    return(
        <div className="Stories">
            <div className="Wrap_Stories">
                {Stories.map((S) =>{
                    return(
                        <div className="wrap_pic">
                            <div className="Stories_item">
                                <img className="img_stories" src={S.foto} alt=""></img>
                                <p className='nomes'>{S.nome}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
        <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="btn">

        <path
        d="M0 13C0 20.1794 5.82062 26 13 26C20.1794 26 26 20.1794 26 13C26 5.82062 20.1794 0 13 0C5.82062 0 0 5.82062 0 13ZM16.0856 13L10.7931 7.70687C10.6135 7.51781 10.5148 7.26606 10.5182 7.0053C10.5215 6.74454 10.6266 6.4954 10.811 6.311C10.9954 6.1266 11.2445 6.02152 11.5053 6.01819C11.7661 6.01485 12.0178 6.11351 12.2069 6.29313L18.2069 12.2931C18.3943 12.4806 18.4995 12.7349 18.4995 13C18.4995 13.2651 18.3943 13.5194 18.2069 13.7069L12.2069 19.7069C12.0178 19.8865 11.7661 19.9852 11.5053 19.9818C11.2445 19.9785 10.9954 19.8734 10.811 19.689C10.6266 19.5046 10.5215 19.2555 10.5182 18.9947C10.5148 18.7339 10.6135 18.4822 10.7931 18.2931L16.0856 13Z"
        fill="white"/>

        </svg>
        </div>
    )
}