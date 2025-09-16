/* representa la "Home" o la vista inicial cuando se navega a esa ruta específica.
Es la primera página que los usuarios ven al acceder a la aplicación.
 */

// IMPORTACIONES NECESARIAS
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

//Data -> sirve para traer datos de un archivo externo
import Products from './../../data/Product.json';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Index() {
  // Componente Index
  // Este componente representa la página de inicio de la aplicación.
  // Aquí se pueden incluir elementos como banners, promociones o información destacada.

  const [filterSortOption, setFilterSortOption] = useState('all');

  const navigate = useNavigate();

  const addToWishlist = (product) => {
    const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!existing.some((p) => p.id === product.id)) {
      const updated = [...existing, product];
      localStorage.setItem('wishlist', JSON.stringify(updated));
      window.dispatchEvent(new Event('wishlistUpdated'));
      toast.success(`${product.Productname} added to Your wishlist`);
    } else {
      toast.info(`${product.Productname} is already in your wishlist`);
    }
  };

  const addToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const alreadyInCart = existing.find((p) => p.id === product.id);

    if (!alreadyInCart) {
      const updatedProduct = { ...product, quantity: 1 };
      const updatedCart = [...existing, updatedProduct];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      window.dispatchEvent(new Event('cartUpdated'));
      toast.success(`${product.Productname} added to Your Cart!`);
    } else {
      toast.info(`${product.Productname} is already in your Cart!`);
    }
  };

  return (
    <>
      {/*Hero*/}{' '}
      {/* Hero: es la sección principal de la página de inicio, generalmente contiene un banner o un carrusel de imágenes destacado. */}
      {/* Meter un carrusel de imágenes en la seccion principal*/}
      <div className="hero">
        <Swiper // Componente Swiper para crear un carrusel de imágenes (popular librería para crear carruseles de imágenes o contenido.)
          slidesPerView={1} // Número de diapositivas visibles en la vista (1 en este caso).
          spaceBetween={0} // Espacio entre las diapositivas (0 en este caso).
          modules={[Autoplay, EffectFade]} // Módulos de Swiper que se están utilizando, Autoplay para la reproducción automática y EffectFade para el efecto de desvanecimiento entre diapositivas.
          effect="fade" // Efecto de transición entre diapositivas (desvanecimiento en este caso).
          loop={true} // Habilita el bucle infinito del carrusel.
          autoplay={{
            // Configuración de la reproducción automática.
            delay: 3000, // Tiempo en milisegundos entre cada transición automática.
          }}
        >
          <SwiperSlide>
            {' '}
            {/* Cada SwiperSlide representa una diapositiva en el carrusel */}
            <div className="hero-wrap hero-wrap1">
              <div className="hero-content">
                <h5>-Productos escenciales-</h5>
                <h1>
                  Chaleco Salvavidas <br />
                  Aquafloat
                </h1>
                <p className="my-3">Todos los talles disponibles </p>
                <a href="#" className="btn hero-btn mt-3">
                  Comprar Ahora
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap2">
              <div className="hero-content">
                <h5>-Productos escenciales-</h5>
                <h1>
                  Palas de fibra
                  <br />
                  Weir
                </h1>
                <p className="my-3">Diferentes colores disponibles </p>
                <a href="#" className="btn hero-btn mt-3">
                  Comprar Ahora
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap3">
              <div className="hero-content">
                <h5>-Productos escenciales-</h5>
                <h1>Kayaks</h1>
                <p className="my-3">Variedad en colores</p>
                <a href="#" className="btn hero-btn mt-3">
                  Comprar Ahora
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*Products*/}{' '}
      {/* Products: sección que muestra una selección de productos destacados o populares. */}
      <div className="product-container py-5 my-5">
        <div className="container position-relative">
          <div className="row">
            <div className="secction-title mb-5 product-title text-center">
              <h2 className="fw-semibold fs-1 ">
                Nuestros productos seleccionados
              </h2>
              <p className="text-muted">Equipate para disfrutar del rio </p>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: '.product-swiper-next',
              prevEl: '.product-swiper-prev',
            }}
            breakpoints={{
              1399: { slidesPerView: 4 },
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              767: { slidesPerView: 1.5 },
              0: { slidesPerView: 1 },
            }}
            className="mt-4 swiper position-relative"
          >
            {Products.filter(
              (product) => product.id >= 1 && product.id <= 6
            ).map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-item text-center position-relative">
                  <div className="product-image w-100 position-relative overflow-hidden">
                    <img src={product.image} className="img-fluid" alt="" />
                    <img
                      src={product.secondImage}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="product-icons gap-3">
                      <div
                        className="product-icon"
                        title="Agregar a Favoritos"
                        onClick={() => addToWishlist(product)}
                      >
                        <i className="bi bi-heart fs-5"></i>
                      </div>
                      <div
                        className="product-icon"
                        title="Agregar al carrito"
                        onClick={() => addToCart(product)}
                      >
                        <i className="bi bi-cart3 fs-5"></i>
                      </div>
                    </div>
                    <span
                      className={`tag badge text-white ${
                        product.tag === 'New' ? 'bg-danger' : 'bg-success'
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none text-black"
                  >
                    <div className="product-content pt-3">
                      <span className="price text-decoration-none">
                        {product.price}
                      </span>
                      <h3 className="title pt-1">{product.Productname}</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
      />
    </>
  );
}

export default Index;
