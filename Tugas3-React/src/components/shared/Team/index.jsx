export default function Team(){
    return (

        <>

         <div className="container px-3 py-3 mb-5" style={{ 
    backgroundColor: '#282828', 
    color: '#fefcfcff',          
    padding: '3rem', 
    margin: "3px",          
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
    marginRight: '1.5rem',
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
    marginRight: '1.5rem', 
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
    marginRight: '1.5rem', 
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

        </>
    )
}