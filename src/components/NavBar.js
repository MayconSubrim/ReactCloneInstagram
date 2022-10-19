import logo from '../Imagens/Instagram_logo.svg.png'
import profile from '../Imagens/ichigo.jpg'
export default function NavBar(){
    return(
        <>

        <nav className="navbar">
            <div className='divlogo'>
            <img className='logo' src={logo} alt="logo"></img>
            </div>
            <div>
                <div className='pesquisa'>
                    <ion-icon name="search-outline"></ion-icon>
                    <input aria-label='Entrada da pesquisa' autoCapitalize='none' className='botao_pesquisa' placeholder='Pesquisar' type={"text"}></input>
                    </div>
            </div>
            <div className='menuzinho'>
                <ion-icon name="home-outline"></ion-icon>
                <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <div>
                    <img className='icone_usuario' src={profile} alt=''></img>
                </div>
            </div>
        </nav>

        </>
    )
}