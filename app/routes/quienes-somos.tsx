export default function QuienesSomosPage(){
    return (
        <main>
        <section className="quienes-somos-section">
            <h2>Quiénes somos</h2>
            <p>
                Somos C&G, especialistas en muebles artesanales y servicios integrales para el hogar. Nuestro equipo combina experiencia, pasión y creatividad para transformar espacios con calidad y diseño.
            </p>
            <img src="https://tse2.mm.bing.net/th/id/OIP.r_dJTra_ceN9S7wrOWre5AHaEc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
        </section>

        {/*  Tarjetas de integrantes  */}
        <section className="integrantes-section">
            <h2>Integrantes de la compañía</h2>
            <div className="integrantes-grid">
                <div className="integrante-card">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Carlos Fernandois" className="integrante-img" />
                    <h3>Carlos Fernandois</h3>
                    <p className="cargo">Profesional de terreno</p>
                    <p className="desc">
                        Especialista en obras civiles y construcción, con más de 15 años de experiencia liderando proyectos residenciales y comerciales. Destaca por su versatilidad y dominio en todas las áreas de la mano de obra, asegurando resultados de alta calidad y eficiencia.
                    </p>
                </div>
                <div className="integrante-card">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Gloria Riffo" className="integrante-img"/>
                    <h3>Gloria Riffo</h3>
                    <p className="cargo">Encargada de decoración y limpieza de hogar</p>
                    <p className="desc">
                        Profesional en diseño de interiores y gestión de espacios, experta en crear ambientes funcionales y estéticos. Garantiza hogares armoniosos, organizados y con un alto estándar de higiene.
                    </p>
                </div>
                <div className="integrante-card">
                    <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Marco Maldonado" className="integrante-img"/>
                    <h3>Marco Maldonado</h3>
                    <p className="cargo">Ingeniero a cargo de servicios web</p>
                    <p className="desc">
                        Ingeniero en informática especializado en desarrollo y gestión de plataformas digitales. Lidera la implementación de soluciones web, asegurando tecnología moderna, seguridad y una experiencia digital eficiente para nuestros clientes.
                    </p>
                </div>
            </div>
        </section>
    </main>
    )
}