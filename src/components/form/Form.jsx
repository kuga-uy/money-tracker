import React from 'react'

const Form = () => {
  return (
    <>
    <form className="saveing__form">
        <label for="saveing__date" id="saveing_label">Saveing Date</label>
        <input className="mt__option-input" type="date" id="saveing__date"/>
        <label for="saveing__description" id="saveing__label">Saveing Description</label>
        <input className="mt__option-input" type="text" id="saveing__description"/>
        <label for="saveing__amount" id="saveing__label">Saveing Amount</label>
        <input className="mt__option-input" type="number" id="saveing__amount"/>
        <button className="mt_button" id="saveing-button" type="button">Add Saveing</button>  
    </form> 
    </>
  )
}

export {Form}
