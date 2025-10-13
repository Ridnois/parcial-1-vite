export default function HomeComponent() {
    return (
        <main>
            {/* Título principal grande centrado  */}
            <div className="titulo-principal">
                <h1>Servicios C&G</h1>
            </div>

            {/* HERO SECTION con imagen grande y botón  */}
            <section className="hero">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Artesanía y diseño para tu espacio</h1>
                        <p>Soluciones modernas y artesanales en muebles, remodelaciones y servicios para tu hogar.</p>
                        <a href="servicios.html" className="btn-main">Ver Servicios</a>
                    </div>
                </div>
            </section>
            {/*  Sección para mostrar el servicio en curso del usuario  */}
            {/* TODO: Mover a components */}
            <section className="servicio-curso-section">
                <h2>Tu servicio en curso</h2>
                <div id="servicio-curso"></div>
                <div id="usuario-datos"></div>
            </section>

            {/*  SERVICIOS DESTACADOS en tarjetas minimalistas  */}
            {/* TODO: Mover a components */}
            <section className="servicios-destacados">
                <h2>Servicios Destacados</h2>
                <div className="servicios-grid">
                    {/*  Tarjeta 1  */}
                    <div className="servicio-card">
                        <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Muebles artesanales" />
                        <h3>Muebles Artesanales</h3>
                        <p>Muebles únicos hechos a mano, con materiales de calidad y diseño personalizado.</p>
                    </div>
                    {/*  Tarjeta 2  */}
                    <div className="servicio-card">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Reparación de muebles" />
                        <h3>Reparación y Mantenimiento</h3>
                        <p>Restauramos y mantenemos tus muebles para que luzcan como nuevos.</p>
                    </div>
                    {/*  Tarjeta 3  */}
                    <div className="servicio-card">
                        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Limpieza de muebles" />
                        <h3>Limpieza de Muebles y Espacios</h3>
                        <p>Limpieza profesional para muebles, casas y oficinas, cuidando cada detalle.</p>
                    </div>
                    {/*  Tarjeta 4  */}
                    <div className="servicio-card">
                        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80" alt="Remodelaciones" />
                        <h3>Remodelaciones en Casas</h3>
                        <p>Gasfitería, carpintería, cerámica, pintura, techumbres, rejas y más.</p>
                    </div>
                </div>
            </section>

            {/*  Apartado de Noticias / Blogs  */}
            {/* TODO: Mover a components */}
            <section className="blogs-section">
                <h2>Noticias y Datos Curiosos</h2>
                <div className="blogs-grid">
                    {/*  Blog 1  */}
                    <div className="blog-card">
                        <a href="blog-detalle1.html">
                            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Madera de calidad" />
                            <h3>Usamos la mejor madera del mercado</h3>
                            <p>Descubre por qué nuestros muebles son tan duraderos y elegantes.</p>
                        </a>
                    </div>
                    {/*  Blog 2  */}
                    <div className="blog-card">
                        <a href="blog-detalle2.html">
                            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Muebles a medida" />
                            <h3>Cada mueble se adapta perfecto a tu hogar</h3>
                            <p>Personalizamos cada pieza para que encaje y luzca única en tu espacio.</p>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}