import React from 'react'

const Contact = () => {
  return (
    <div className='container custom-margin'>
      <form>
        <div className="mb-5 text-center">
          <h1>Contact Us</h1>
        </div>
        
        <div className="mb-3">
          <input type="text" placeholder='Your Name' class="form-control" />
        </div>
        <div className="mb-3">
          <input type="email" placeholder='Your email' class="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
        <textarea className="form-control" placeholder="Message" required ></textarea>
        </div>
        <div className="mb-3">
        <button type="submit" class="form-control btn btn-block btn-primary">Send Now</button>
        </div>
        
      </form>
    </div>
  )
}

export default Contact
