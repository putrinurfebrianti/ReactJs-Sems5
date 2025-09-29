export default function Contact(){
    return (

        <>

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

</>

    )
}