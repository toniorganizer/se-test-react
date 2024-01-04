import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
    <Navbar />

    {/* Carousel */}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/image-1.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Kampus impian</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                <p><a href="#" className="btn btn-primary mt-3">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/image-2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Universitas Negeri Yogyakarta</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                <p><a href="#" className="btn btn-primary mt-3">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/image-3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Kampus Pendidikan</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                <p><a href="#" className="btn btn-primary mt-3">Learn More</a></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    <section id="about">
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-6 col-12">
                  <div className="about-text">
                        <h2>Universitas Negeri Yogyakarta <br/> Akan memberikan yang terbaik</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, labore reiciendis. Assumenda eos quod animi! Soluta nesciunt inventore dolores excepturi provident, culpa beatae tempora.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                  <div className="about-img">
                      <img src="img/aboutt.jpg" alt="" className="img-fluid" />
                  </div>
              </div>
          </div>
          </div>
            <div className="container mt-5">
              <div className="bottom">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3 new-menu">
                        <div className="p-3 bg-custom-bottom text-white"><a href='#'><i className="bi bi-laptop"></i> Siakad UNY</a></div>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3 new-menu">
                        <div className="p-3 bg-custom-bottom text-white"><a href='#'><i className="bi bi-envelope-check-fill"></i> WebMail</a></div>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3 new-menu">
                        <div className="p-3 bg-custom-bottom text-white"><a href='#'><i className="bi bi-pc-display"></i> E-learning</a></div>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3 new-menu">
                        <div className="p-3 bg-custom-bottom text-white"><a href='#'><i className="bi bi-mortarboard-fill"></i> Wisuda online</a></div>
                    </div>
                </div>
              </div>
            </div>
      </section>

      <div id="information" className='mb-5'></div>
      <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2 className='mt-5'>Informasi</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Non, quo.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card text-light text-center bg-white pb-2">
                        <div className="card-body text-dark">
                          <div className="img-area mb-4">
                              <img src="img/berita-1.jpg" className="img-fluid" alt="" />
                          </div>
                            <h3 className="card-title">Informasi pertama</h3>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card text-light text-center bg-white pb-2">
                        <div className="card-body text-dark">
                          <div className="img-area mb-4">
                              <img src="img/berita-2.jpg" className="img-fluid" alt="" />
                          </div>
                            <h3 className="card-title">Informasi kedua</h3>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                            <button className="btn btn-primary">learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card text-light text-center bg-white pb-2">
                        <div className="card-body text-dark">
                          <div className="img-area mb-4">
                              <img src="img/berita-3.jpeg" className="img-fluid" alt="" />
                          </div>
                            <h3 className="card-title">Informasi ketiga</h3>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card text-light text-center bg-white pb-2">
                        <div className="card-body text-dark">
                          <div className="img-area mb-4">
                              <img src="img/berita-4.jpeg" className="img-fluid" alt="" />
                          </div>
                            <h3 className="card-title">Informasi keempat</h3>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mt-5">
                  <div className="card bg-color-custom mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Kegiatan 1</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-5">
                  <div className="card bg-color-custom mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Kegiatan 2</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-5">
                  <div className="card bg-color-custom mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Kegiatan 3</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-5">
                  <div className="card bg-color-custom mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Kegiatan 4</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>

        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Universitas Negeri Yogyakarta 2023</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Peraturan</a>
                        <a className="link-dark text-decoration-none" href="#!">Penggunaan</a>
                    </div>
                </div>
            </div>
        </footer>

    </div>
  )
}

export default Home
