export default function Hero(){
    return (

        <>

<div className="container my-5"
    style={{ 
    backgroundColor: '#c96666ff', 
    color: '#fefcfcff',          
    padding: '3rem', 
    margin: '0',
    width: '100%',          
    borderRadius: '10px',      
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

    </>


    )
}

   