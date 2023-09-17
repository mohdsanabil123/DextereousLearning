import React from 'react'

const Pricing = () => {

  return (
    <main className="container-xxl" style={{ color: "#000", backgroundColor: "#f3f2f2" }}>
    <div className='container'>
      <section className="">
        <h2 className="pt-5 text-center"><strong>Pricing</strong></h2>

        <div className="mt-5 mb-5 text-center" role="group" aria-label="Basic example">
          <h6 className="border rounded border-info bg-info p-2 text-white">Monthly billing - choose a plan</h6>
        </div>

        <div className="row gx-lg-5">

          <div className="col-lg-3 col-md-6 mb-4">

            <div className="card border border-success">

              <div className="card-header bg-white py-3">
                <p className="text-uppercase small mb-2"><strong>Free</strong></p>
                <h5 className="mb-0">Free</h5>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                </ul>
              </div>

              <div className="card-footer bg-white py-3">
                <button type="button" className="btn btn-success btn-sm">Get it</button>
              </div>

            </div>

          </div>

          <div className="col-lg-3 col-md-6 mb-4">

            <div className="card border border-primary">

              <div className="card-header bg-white py-3">
                <p className="text-uppercase small mb-2"><strong>Essential</strong></p>
                <h5 className="mb-0">$19/month</h5>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                </ul>
              </div>

              <div className="card-footer bg-white py-3">
                <button type="button" className="btn btn-primary btn-sm">Buy now</button>
              </div>

            </div>

          </div>
          <div className="col-lg-3 col-md-6 mb-4">

            <div className="card">

              <div className="card-header bg-white py-3">
                <p className="text-uppercase small mb-2"><strong>Advanced</strong></p>
                <h5 className="mb-0">$49/month</h5>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                </ul>
              </div>

              <div className="card-footer bg-white py-3">
                <button type="button" className="btn btn-info btn-sm">Buy now</button>
              </div>

            </div>          

          </div>

          <div className="col-lg-3 col-md-6 mb-4">

            <div className="card">

              <div className="card-header bg-white py-3">
                <p className="text-uppercase small mb-2"><strong>Enterprise</strong></p>
                <h5 className="mb-0">$189/month</h5>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                </ul>
              </div>

              <div className="card-footer bg-white py-3">
                <button type="button" className="btn btn-info btn-sm">Buy now</button>
              </div>

            </div>
            
          </div>
          
        </div>
      </section>
    </div>
  </main>
  )
}

export default Pricing
