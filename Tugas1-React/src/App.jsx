
function App() {
  
  
  return (
    
    <>

     {/* header */}

    <div className="container"
    style={{ 
    backgroundColor: '#282828', 
    color: '#fefcfcff',          
    padding: '3rem',           
    borderRadius: '10px'      
    }}
    
    > <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
    <div className="col-md-3 mb-2 mb-md-0"> 
    <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
    <i className="fa-solid fa-headphones fa-beat-fade fa-2xl" style={{color:"#c96666ff"}}
    ></i> 
    <span className="ms-2 fs-4" style={{color:"#c96666ff"}}>Headphones Store</span>
    </a> </div> <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
    <li><a href="#" className="nav-link px-2" style={{color:"#c96666ff"}}>Home</a></li> 
    <li><a href="#" className="nav-link px-2" style={{color:"#c96666ff"}}>Product</a></li> 
    <li><a href="#" className="nav-link px-2" style={{color:"#c96666ff"}}>Team</a></li> 
    <li><a href="#" className="nav-link px-2" style={{color:"#c96666ff"}}>Contact</a></li> 
    </ul> <div className="col-md-3 text-end"> 
    <button type="button" className="btn btn-danger me-2">Login</button> <button type="button" className="btn btn-danger">Register</button> 
    </div> </header> </div>

    {/* Heroes */}
    <div className="container my-5"
    style={{ 
    backgroundColor: '#c96666ff', 
    color: '#fefcfcff',          
    padding: '3rem',           
    borderRadius: '10px'      
    }}
    > 
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"> 
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3"> 
      <h1 
      className="display-4 fw-bold lh-1"
      style={{ color: '#eac9c9ff' }} 
    >
      Modern sophisticated headphones
    </h1>
    <p className="lead">Headphones canggih masa kini adalah perpaduan sempurna antara kualitas audio premium dan teknologi pintar yang dirancang untuk memberikan pengalaman mendengarkan yang benar-benar imersif, personal, dan bebas batas. Perangkat audio nirkabel ini telah bertransformasi dari sekadar alat mendengarkan musik menjadi asisten pribadi yang terintegrasi penuh dengan gaya hidup modern Anda.</p> 
    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"> 
    <button type="button" className="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Buy Now</button> 
    <button type="button" className="btn btn-danger btn-lg px-4">Learn More</button> </div> 
    </div> <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden justify-content-end"> 
    <img 
      className="rounded-lg-3" 
      src="https://cdn.pixabay.com/photo/2020/04/19/16/33/headphones-5064411_640.jpg" 
      alt="" 
      width="390"/> 
    </div>
    </div>
    </div>

    {/* Product List */}
    <section className="py-5 text-center container"
    style={{ 
    backgroundColor: '#282828', 
    color: '#fefcfcff',          
    padding: '3rem',           
    borderRadius: '10px'      
    }}
    
    > 
    <div className="row py-lg-5"> <div className="col-lg-6 col-md-8 mx-auto"> 
    <h1 className="fw-light"  style={{ color: '#eac9c9ff' }}  >Explore Our World of Sound</h1> <p className="lead"  style={{ color: '#eac9c9ff' }} >Step into our product gallery. Here, every unit is a masterpiece. Scroll down and discover your next audio experience</p> 
    <p> <a href="#" className="btn btn-danger me-2">VIEW COLLECTION</a> 
    <a href="#" className="btn btn-danger me-2">SHOP ACCESSORIES</a> 
    </p> 
    </div> 
    </div> 
    </section> 
    <div className="album py-5 bg-body-tertiary"> 
    <div className="container"
    style={{ 
    backgroundColor: '#c96666ff', 
    color: '#fefcfcff',          
    padding: '3rem',           
    borderRadius: '10px'      
    }}
    
    > 
    {/* Product 1 */}
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
    <div className="col"> <div className="card shadow-sm"> 
    <img 
                src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Headphones"  
                className="bd-placeholder-img card-img-top" 
                style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
            />
    <div className="card-body"> <p className="card-text">The 'Aura'
    "Desain premium tenun yang sangat nyaman untuk pemakaian sepanjang hari. Suara murni dengan tampilan stylish dan earthy. Kenyamanan tanpa batas."</p> 
    <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> 
    <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
    
    </div> <small className="text-body-secondary">9 mins</small> 
    </div> 
    </div> 
    </div> 
    </div>
    {/* Product 2 */} 
    <div className="col"> <div className="card shadow-sm"> 
    <img 
                src="https://cdn.head-acoustics.com/_processed_/2/8/csm_CL_II.1_c272319049.jpg" 
                alt="Headphones"  
                className="bd-placeholder-img card-img-top" 
                style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
            />
    <div className="card-body"> <p className="card-text"> The 'Gamer Pro X'
    "Audio eSports-grade dengan nirkabel ultra-low latency. Dilengkapi mikrofon noise-cancelling yang dapat dilepas. Keunggulan kompetitif Anda."</p> 
    <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> 
    <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
    
    </div> <small className="text-body-secondary">9 mins</small> 
    </div> </div> </div> </div> 
    {/* Product 3 */}
    <div className="col"> 
    <div className="card shadow-sm product-card"> <img 
                src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Headphones"  
                className=" bd-placeholder-img card-img-top" 
                style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
            />
    <div className="card-body"> <p className="card-text">The 'ZenFlow'
    "Fitur Active Noise Cancellation (ANC) terdepan di industri. Ringan dan memiliki baterai 40 jam. Sempurna untuk fokus tanpa gangguan."</p> <div className="d-flex justify-content-between align-items-center"> 
    <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
    </div> 
    <small className="text-body-secondary">9 mins</small> </div> </div> </div> </div> 
    {/* Product 4 */}
    <div className="col"> 
    <div className="card shadow-sm"> <img 
                src="https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Headphones"  
                className="bd-placeholder-img card-img-top" 
                style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
            />
    <div className="card-body"> <p className="card-text">The 'Commuter Lite'
    "Dibuat untuk perjalanan harian. Sangat ringan, dapat dilipat, dan tahan air IPX4. Nikmati bass kuat dalam paket yang ringkas dan portable."</p> 
    <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> 
    <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
    </div> 
    <small className="text-body-secondary">9 mins</small> </div> </div> </div> </div> 
    {/* Product 5 */}
    <div className="col"> 
    <div className="card shadow-sm"> <img 
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Headphones"  
                className="bd-placeholder-img card-img-top" 
                style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
            />
    <div className="card-body"> <p className="card-text">The 'Studio Reference'
    "Menggunakan planar magnetic drivers untuk suara yang sangat akurat dan uncolored. Audio berkualitas studio bagi audiophile dan produser."</p> <div className="d-flex justify-content-between align-items-center"> 
    <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
    </div> <small className="text-body-secondary">9 mins</small> 
    </div> </div> </div> </div> 
    {/* Product 6 */}
    <div className="col"> 
    <div className="card shadow-sm"> <img 
                src="https://images.unsplash.com/photo-1700087151960-178ea946e608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" 
                alt="Headphones"  
                className="bd-placeholder-img card-img-top" 
                style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
            />
    <div className="card-body"> <p className="card-text">The 'Bold Beat'
    "Bass ekstra menggelegar yang memacu semangat Anda. Tampilan dua warna yang mencolok dengan desain yang secure untuk gaya hidup aktif."</p> 
    <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
    </div> <small className="text-body-secondary">9 mins</small> 
    </div> </div> </div> </div> 
    {/* Product 7 */}
    <div className="col"> <div className="card shadow-sm"> <img 
                src="https://images.unsplash.com/photo-1679210208075-e70610a78080?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Headphones"  
                className="bd-placeholder-img card-img-top" 
                style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
            /><div className="card-body"> 
    <p className="card-text"> The 'Eternity'
    "Baterai revolusioner dengan 70+ jam pemutaran non-stop. Jangkauan Bluetooth diperluas. Kebebasan nirkabel sejati tanpa perlu sering mengisi daya."</p> 
    <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
    
    </div> <small className="text-body-secondary">9 mins</small> </div> </div> </div> </div> 
    {/* Product 8 */}
    <div className="col"> <div className="card shadow-sm"> 
    <img 
                src="https://images.unsplash.com/photo-1737291937135-3a0fcb5e0c44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" 
                alt="Headphones"  
                className="bd-placeholder-img card-img-top" 
                style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
            />
    <div className="card-body"> <p className="card-text">The 'Retro Vibe'
    "Estetika klasik dengan bingkai logam dan earpad beludru. Menggabungkan gaya vintage dengan teknologi Bluetooth 5.0 yang jernih."</p> 
    <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> 
    <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
    
    </div> <small className="text-body-secondary">9 mins</small> </div> </div> </div> </div>
    {/* Product 9 */} 
    <div className="col"> <div className="card shadow-sm"> <img 
                src="https://images.unsplash.com/photo-1655628143766-172ca2198096?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" 
                alt="Headphones"  
                className="bd-placeholder-img card-img-top" 
                style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
            />
    <div className="card-body"> <p className="card-text">The 'Fitness Endurance'
    "Direkayasa untuk aktivitas intens. Tahan air penuh (IPX7) dengan earpad yang tetap dingin. Rekan workout paling andal yang tidak akan lepas."</p> 
    <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> 
    <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
    </div> <small className="text-body-secondary">9 mins</small> 
    </div> </div> </div> </div> </div> </div> </div> 


    {/* Team */}

  <div className="container px-3 py-3 mb-5" style={{ 
    backgroundColor: '#282828', 
    color: '#fefcfcff',          
    padding: '3rem',           
    borderRadius: '10px'      
    }} id="featured-3">
  <h2 className="pb-2 border-bottom">Team</h2>
  <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">


    {/* Team 1 */}

    <div className="col">
    <div
    style={{
    backgroundColor: '#c96666ff',
    color: '#fefcfcff',
    padding: '3rem',
    borderRadius: '10px',
    textAlign: 'center',
    marginRight: '1.5rem', /* Added margin for spacing */
    }}
      >
    <img
    src="https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGUlMjBpY29ufGVufDB8fDB8fHww"
    alt="Putri Nur Febrianti"
    style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }}
    />
    <h3 className="fs-2 text-body-emphasis">Putri Nur Febrianti</h3>
    <p>Three minds, one heart, and an unstoppable spirit to build this company from the ground up. Their commitment is your guarantee of quality and integrity.
    </p>
    </div>
    </div>

   {/* Team 2 */}

    <div className="col">
    <div
    style={{
    backgroundColor: '#c96666ff',
    color: '#fefcfcff',
    padding: '3rem',
    borderRadius: '10px',
    textAlign: 'center',
    marginRight: '1.5rem', /* Added margin for spacing */
    }}
      >
    <img
    src="https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGUlMjBpY29ufGVufDB8fDB8fHww"
    alt="Aditya Febriadi"
    style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }}
    />
    <h3 className="fs-2 text-body-emphasis">Aditya Febriadi</h3>
    <p>Three minds, one heart, and an unstoppable spirit to build this company from the ground up. Their commitment is your guarantee of quality and integrity.
    </p>
    </div>
    </div>

    {/* Team 3 */}

    <div className="col">
    <div
    style={{
    backgroundColor: '#c96666ff',
    color: '#fefcfcff',
    padding: '3rem',
    borderRadius: '10px',
    textAlign: 'center',
    marginRight: '1.5rem', /* Added margin for spacing */
    }}
      >
    <img
    src="https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGUlMjBpY29ufGVufDB8fDB8fHww"
    alt="Syafa Khairunizza"
    style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }}
    />
    <h3 className="fs-2 text-body-emphasis">Syafa Khairunizza</h3>
    <p>Three minds, one heart, and an unstoppable spirit to build this company from the ground up. Their commitment is your guarantee of quality and integrity.
    </p>
    </div>
    </div>

    </div>
    </div>


    {/* Contact */}

    <div className="container py-5 mb-5"
    style={{
    backgroundColor: '#c96666ff',
    color: '#fefcfcff',
    }}
    
    > 
    <div className="row justify-content-center">
    
    <div className="col-12 col-lg-6"> 
      
      <h2 className="mb-4 text-center">Contact Us</h2>
      
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input 
          type="email" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="name@gmail.com" 
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea 
          className="form-control" 
          id="exampleFormControlTextarea1" 
          rows="5" 
          placeholder="Write your message here..."
        ></textarea>
      </div>
      
      <div className="d-grid">
        <button type="submit" className="btn btn-danger btn-lg">
          Send Message
        </button>
      </div>

    </div> 
    
  </div> 
  
</div>


    {/* Footer */}
    <div classNameName="container"
    style={{ 
    backgroundColor: '#282828', 
    color: '#fefcfcff',          
    padding: '3rem',           
    borderRadius: '10px'      
    }}
    > 
    <footer className="py-3 my-4"> <ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
    <li><a href="#" className="nav-link px-2" style={{color:"#c96666ff"}}>Home</a></li> 
    <li><a href="#" className="nav-link px-2" style={{color:"#c96666ff"}}>Product</a></li> 
    <li><a href="#" className="nav-link px-2" style={{color:"#c96666ff"}}>Team</a></li> 
    <li><a href="#" className="nav-link px-2" style={{color:"#c96666ff"}}>Contact</a></li>  </ul> 
    <p className="text-center " style={{color:"#c96666ff"}}>&copy; 2025 Putri Nur Febrianti</p> </footer> </div> <div class="b-example-divider"></div>
    </>
   
    
  );
}


export default App
