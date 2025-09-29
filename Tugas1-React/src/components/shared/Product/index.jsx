export default function Product(){
    return (

        <> 
        
        <section className="py-5 text-center container"
    style={{ 
    backgroundColor: '#282828', 
    color: '#fefcfcff',          
    padding: '4rem',
    margin: '3px',           
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

        
        </>


    )
}