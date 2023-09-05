import React from 'react'

const Loader = () => {
    return (
        <div>
            <div class="text-center">
                <div class="spinner-border text-primary" role="status" style={{width: "60px", height: "60px"}}>
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loader
