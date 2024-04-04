import '../app/styles/footer.css'

export default function Footer() {

    return(
        <footer>
            <div className="container text-center py-3 d-flex justify-content-center mt-5">
                <div className="row d-flex">
                   {/* hover con subrayado */}
                   <div className="elemento col mx-3 mb-0 text-muted"><a className="link-offset-1-hover link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover" href="#">Privacidad</a></div>
                   {/* sin hover ni subrayado */}
                   <div className="elemento col mx-3 mb-0 text-muted"><a className="link-underline link-underline-opacity-0" href="#">Condiciones</a></div>
                   <div className="elemento col mx-3 mb-0 text-muted"><a className="link-underline link-underline-opacity-0" href="#">Accesibilidad</a></div>
                </div>
            </div>
        </footer>
    )
}