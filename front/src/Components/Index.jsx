import React from 'react';

function Index() {
  return (
    <div>
      {/* Carrousel de imágenes */}
      <section className="carousel">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="https://img.freepik.com/foto-gratis/bienestar-deportivo-concepto-estilo-vida-activo-sonriendo-linda-chica-asiatica-fitness-ropa-activa-lamiendo-l_1258-111899.jpg?w=1380&t=st=1696129714~exp=1696130314~hmac=64b46823cecf7a03b40a30e485c68288e9235293ef58b4634b05c682be794344" className="d-block w-100" alt="miau" />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-1 fw-holder fw-bold text-uppercase text-custom2">HEALTYNUTRITION</h1>
                <h4 className="mt-5 fs-3 text-uppercase text-center text-custom2">PORQUE TU SALUD ES NUESTRA PRIORIDAD</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://img.freepik.com/foto-gratis/bienestar-deportivo-concepto-estilo-vida-activo-sonriente-linda-chica-asiatica-usando-rastreador-calorias-aplicacion-dieta_1258-109178.jpg?w=1380&t=st=1696128716~exp=1696129316~hmac=20a17441599e119eee5d88fb263f2fb1d455fa9231a236874485cdcec1b33ab1" className="d-block w-100" alt="guau" />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-1 fw-holder fw-bold text-uppercase text-custom2">Tabla nutricional al alcance de tu mano!</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://img.freepik.com/fotos-premium/hombre-usando-cuerdas-gimnasio-desarrollar-fuerza-brazo-ai-generativo_220873-21169.jpg?w=1380" className="d-block w-100" alt="muuu" />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-1 fw-holder fw-bold text-uppercase text-custom2">NO MÁS EXCUSAS</h1>
                <h4 className="mt-5 fs-3 text-uppercase text-center text-custom2">Las excusas son parte del pasado, toma la iniciativa... Regístrate..!</h4>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Sección Slide 1 */}
      <section className="bg-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center">
              <h2 className="py-4">¡LA SALUD ES TU MAYOR RIQUEZA.!</h2>
              <h4>"Invierte en ti mismo todos los días a través del ejercicio y una alimentación saludable."</h4>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                src="https://img.freepik.com/foto-gratis/bolsa-comestibles-espacio-copia_23-2148262102.jpg?w=996&t=st=1696123504~exp=1696124104~hmac=1a8213e36405fc50ff961ccb719ebec2e6465d382081d87bfe237b5172b12e21"
                alt="Imagen de la sección 1"
                className="img-fluid rounded-circle"
                style={{ width: '300px', height: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Slide 2 */}
      <section className="bg-custom text-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center">
              <img
                src="https://img.freepik.com/foto-gratis/gente-haciendo-ciclismo-indoor_23-2149270221.jpg?w=996&t=st=1696125374~exp=1696125974~hmac=3530cb7a3a1570f68322c4f10a919e3a23deac34045c7e54474085c44d2603c3"
                alt="Imagen de la sección 2"
                className="img-fluid rounded-circle"
                style={{ width: '300px', height: '300px' }}
              />
            </div>
            <div className="col-12 col-md-6 text-center">
              <h2 className="py-4">¡EL DOLOR DE LA DISCIPLINA ES TEMPORAL!</h2>
              <h4>Pero los beneficios de la salud y la felicidad que genera en tu vida va a perdurar..!</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Slide 3 */}
      <section className="bg-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center">
              <h2 className="py-4">¡EL DEPORTE NO SOLO TRANSFORMA TU MENTE!</h2>
              <h4>También fortalece tu espíritu. ¡No subestimes su poder!</h4>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                src="https://img.freepik.com/foto-gratis/mancuernas-botella-agua-cinta-metrica-manzana-sobre-fondo-rosa_23-2147924593.jpg?w=996&t=st=1696124152~exp=1696124752~hmac=a7603ceaaa1109363ca67e002486c192407e6fbe65973741e16560b3f3337bad"
                alt="Imagen de la sección 1"
                className="img-fluid rounded-circle"
                style={{ width: '300px', height: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Slide 4 */}
      <section className="bg-custom text-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center">
              <img
                src="https://img.freepik.com/foto-gratis/vista-angulo-hombre-musculoso-irreconocible-preparandose-levantar-barra-club-salud_637285-2497.jpg?w=996&t=st=1696124832~exp=1696125432~hmac=fd65884194a9b8119bdceaf383a5fd1bcf6e3d03506f7a02c6924b889e35d812"
                alt="Imagen de la sección 2"
                className="img-fluid rounded-circle"
                style={{ width: '300px', height: '300px' }}
              />
            </div>
            <div className="col-12 col-md-6 text-center">
              <h2 className="py-4">¡LA MENTE DETERMINA LO QUE PUEDES LOGRAR!</h2>
              <h4>Cree en ti mismo y alcanzarás tus metas en la salud y el deporte</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
