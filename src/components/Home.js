const  Home = () => {
    return(
        <section>
        <div className="container-fluid">
          <div className="row"><h1>Home</h1></div>
          <div className="row">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.hitek.fr/img/42/ill_m/1693687145/onepiecelafindumangadici4ou5ans.jpeg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h2><i><u>One Piece</u></i></h2>
        <p>Suivez Luffy et ses compagnons dans sa quête pour devenir le Roi des pirates. Mais la route de Grand Line est parsemée d'embûches. L'équipage au Chapeau de pailles parviendra-t-il à se défaire de la Marine et des Empereurs ?</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.sortiraparis.com/images/1001/1460/86424-sugar-man.jpg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h2><i><u>Sugar Man</u></i></h2>
        <p>Ce documentaire, oscarisé en 2013, retrace l'histoire d'une enquête incroyable. Celle menant sur la trace d'un chanteur américain méconnu et dont l'oeuvre fut pourtant d'une influence capitale dans la contre-culture d'un pays inattendu : l'Afrique du Sud. </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.sudouest.fr/6804746/1200x750/tconvfimg-comment-sexplique-limprobable-succes-de-squid-game-170124.jpg?v=1635931150" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h2><u><i>Squid Game</i></u></h2>
        <p>Retour sur l'immense carton Netflix de cette année. Quand la corée critique les dérives du capitalisme, elle le fait en comptant les morts.</p>
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
            <div className="col-12 col-md-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis commodo ante auctor sodales. Praesent maximus condimentum molestie. Duis sit amet eros id justo sodales suscipit. Pellentesque interdum tempus viverra. Sed ut nunc felis. Cras dapibus orci sem, in porta purus rutrum et. Donec neque turpis, vehicula fermentum velit quis, facilisis varius est. Aliquam semper eleifend viverra. Nulla et odio lorem. Pellentesque eget nibh mi. Praesent ornare odio velit, sed luctus ligula auctor eget. Ut ut purus sed neque tincidunt tempor et eget nibh. Suspendisse cursus rhoncus finibus. Quisque quam diam, finibus ut leo ut, rutrum tempor nisl.</div>
          </div>
        </div>
      </section>
    )
}

export default Home