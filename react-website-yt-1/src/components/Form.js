import React from 'react'
import './Form.css'

function Form() {
    return (
        <div className='container'>
            <h1>Thanks for taking the time to reach out. How can I help you today?</h1>
            <div className='form-container'>
                <form>
                    <label>Name: </label>
                    <input type='text' placeholder='Name' name='name'/>
                    <label>Name: </label><input type='text' placeholder='Email' name='email'/>
                    <br/>
                    <label>Name: </label><input type='text' placeholder='Message' name='Message'/>              
                </form>
            </div>
            
        </div>
    )
}

export default Form

