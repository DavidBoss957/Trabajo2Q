import '../app/globals.css'
import '../app/styles/footer.css'

export default function Footer() {

    return(
        <footer id="footer">
            <div className="container text-center py-3 d-flex justify-content-center mt-5">
                <div className="row d-flex">
                   {/* hover con subrayado */}
                   <a className="montserrat-body col mx-3 mb-0 text-muted link-offset-1-hover link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover" href="#">Privacidad</a>
                   {/* sin hover ni subrayado */}
                   <a className="montserrat-body col mx-3 mb-0 text-muted link-offset-1-hover link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover" href="#">Condiciones</a>
                   <a className="montserrat-body col mx-3 mb-0 text-muted link-offset-1-hover link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover" href="#">Accesibilidad</a>
                </div>
            </div>
        </footer>
    )
}