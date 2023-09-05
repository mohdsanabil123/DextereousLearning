import React from 'react'

const Contact = () => {
  return (
    <div className='container custom-margin'>
      <div className="row">
      <form>
        <div className="mb-5 text-center">
          <h1>Contact Us</h1>
        </div>
        
        <div className="mb-3">
          <input type="text" placeholder='Your Name' className="form-control" />
        </div>
        <div className="mb-3">
          <input type="email" placeholder='Your email' className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
        <textarea className="form-control" placeholder="Message" required ></textarea>
        </div>
        <div className="mb-3">
        <button type="submit" className="form-control btn btn-block btn-primary">Send Now</button>
        </div>
        
      </form>
      </div>
    </div>
  )
}

export default Contact
