import Header from "./components/Header";
 
 function App () {
    return (
        <>
        <Header />
    
    <section className="products">
        <h1>Productos</h1>
        <div className="product-grid">
            <div className="product">
                <img src="https://dojiw2m9tvv09.cloudfront.net/30489/product/gold-standard-whey-5-lb-b-img-opt_2000x4093.png"
                    alt="Producto 1"/>
                <h2>Producto 1</h2>
                <p>$10.00</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="product">
                <img src="https://rimage.ripley.cl/home.ripley/Attachment/MKP/2599/MPM00024115986/full_image-2.png"
                    alt="Producto 2"/>
                <h2>Producto 2</h2>
                <p>$20.00</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="product">
                <img src="https://www.suples.cl/images/productos/17195881553_creatine_monohydrate_creapure_300g_dymatize_1000x1000.jpg"
                    alt="Producto 3"/>
                <h2>Producto 3</h2>
                <p>$30.00</p>
                <button>Añadir al carrito</button>
            </div>
                  </div>
    </section>

    
    <footer>
        <p>&copy; 2024 Mi Tienda Online</p>
    </footer>
    </>
);
    }

    export default App;