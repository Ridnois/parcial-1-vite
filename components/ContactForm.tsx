import { useEffect, useRef, useState } from "react"

export default function ContactForm() {
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)

    const handleContactInfo = (f: FormData) => {
        console.log(f)
        const nombre = ((f).get('nombre') as string).trim()
        const email = (f.get('email') as string).trim()
        const telefono = (f.get('telefono') as string).trim()
        const mensaje = (f.get('mensaje') as string).trim()
        const servicio = (f.get('servicio') as string).trim()

        if (!nombre || !email || !telefono || !mensaje || !servicio) {
            console.log('e1')
            setErrorMsg('Por favor, completa todos los campos.');
            setSuccess(false)
            console.log(email)
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log('e2')
            setErrorMsg('Por favor, ingresa un email válido.');
            setSuccess(false)
        }
        else {
            setErrorMsg('')
            setSuccess(true)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleContactInfo(new FormData(e.target))
    }

    return (
        <>
            <h2>Contáctanos</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" required />
                <label htmlFor="email">Email</label>
                <input type="email" autoComplete={'email'} id="email" name="email" />
                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" id="telefono" name="telefono" required />
                <label htmlFor="servicio">Servicio</label>
                <input id="servicio" name="servicio" required />
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" required></textarea>
                <button type="submit" className="btn-main">Enviar</button>
                <div id="form-error" className="form-error"></div>
            </form>
            {/* Mensaje de error */}
            {success && (
                <section>
                    <h3>¡Mensaje enviado exitosamente!</h3>
                </section>
            )}
            {errorMsg !== '' && (
                <section>
                    <h3>{errorMsg}</h3>
                </section>
            )
            }
        </>

    )

}