import React from 'react'
import './Form.css'

function Form() {
    return (
        <div className='container'>
           <section className='form-heading'>
                <h1>Mahalo</h1>
                <p>Ohana means family, family means nobody gets left behind!</p>
           </section>
           <section className='form-container'>
               <form className='form'>
                    <div className='form-item'>
                        <div className='item'>
                            <label>Name:</label>
                            <input></input>
                        </div>
                        <div className='item'>
                            <label>Email:</label>
                            <input></input>
                        </div>
                    </div>
                    <div className='form-item'>
                        <div className='item'>
                            <label>MSG:</label>
                            <textarea></textarea>
                        </div>
                    </div>
                </form>
           </section>
            
        </div>
    )
}

export default Form

