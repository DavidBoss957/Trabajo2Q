import '../app/styles/mainPage.css'

export default function Navbar() {

    return(
        <div>
            <nav class="main-nav">
                <div class="search-box">
                <input class="search-input" type="text" placeholder="Buscar..."></input>
                </div>
            </nav>
            <nav class="miPerfil">
                <ul class="nav__list">
                <li class="nav__list-item">
                    <a class="nav__link nav__link--btn" href="#">Mi Perfil</a>
                </li>
                <li class="nav__list-item">
                    <a class="nav__link nav__link--btn nav__link--btn--highlight" href="#">Subir Proyecto</a>
                </li>
                </ul>
            </nav>
        </div>
    )
}