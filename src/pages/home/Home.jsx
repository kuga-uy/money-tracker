import React from 'react'
import './home.scss'


const Home = () => {
  return (
    <>
    <body className="mt__body">
    <section className="grid__split-container">
        <aside className="mt__options">
            <form className="saveing__form">
                <label for="saveing__date" id="saveing_label">Saveing Date</label>
                <input className="mt__option-input" type="date" id="saveing__date"/>
                <label for="saveing__description" id="saveing__label">Saveing Description</label>
                <input className="mt__option-input" type="text" id="saveing__description"/>
                <label for="saveing__amount" id="saveing__label">Saveing Amount</label>
                <input className="mt__option-input" type="number" id="saveing__amount"/>
                <button className="mt_button" id="saveing-button" type="button">Add Saveing</button>  
            </form> 

            <form className="income__form">
                <label for="income__date" id="income_label">Income Date</label>
                <input className="mt__option-input" type="date" id="income__date"/>
                <label for="income__description" id="income__label">Income Description</label>
                <input className="mt__option-input" type="text" id="income__description"/>
                <label for="income__amount" id="income__label">Income Amount</label>
                <input className="mt__option-input" type="number" id="income__amount"/>
                <button className="mt_button" id="income-button" type="button">Add Income</button>
            </form> 
            
            <form className="expenses__form">
                <label for="expenses__date" id="expenses_label">Expenses Date</label>
                <input className="mt__option-input" type="date" id="expenses__date" />
                <label for="expenses__description" id="expenses__label">Expenses Description</label>
                <input className="mt__option-input" type="text" id="expenses__description" />
                <label for="expenses__amount" id="expenses__label"> Expenses Amount</label>
                <input className="mt__option-input" type="number" id="expenses__amount"   />
                <button className="mt_button" id="expenses-button" type="button">Add Expenses</button>
            </form> 
        </aside>

        <aside className="data-visualization">
            <div className="Total__accounts-amount">
                <div className="dv__total-container">
                    <i className='bx bxs-bank'></i>
                    <h2 className="saveings__visualization">$0</h2>
                </div>
                <div className="dv__total-container">
                    <i className='bx bx-money' ></i>
                    <h2 className="Income__visualization">$0</h2>
                </div>
                <div className="dv__total-container">
                    <i className='bx bx-restaurant' ></i>
                    <h2 className="Expenses__visualization">$0</h2>
                </div>
                <div className="dv__total-container">
                    <i className='bx bx-dollar' ></i>
                    <h2 className="balance__visualization">$0</h2>
                </div>
            </div>
            <section className="dv__resume-table-container">
                <div className="dv__wrapper">
                    <div className="dv__saveing-table">
                        <h3>Saveings Data</h3>
                        <ul className="title__container"> 
                            <li className="saveings__date">
                                <h4>Date</h4>
                            </li>
                            <li className="saveings__description">
                                <h4>Description</h4>
                            </li>
                            <li className="saveings__amount">
                                <h4>Amount</h4>
                            </li>    
                        </ul> 
                        <div className="saveing__list-container">
                            <div className="saveing">
                                    <div className="saveing__item">
                                        <h5 className="saveing-item__date">date</h5>
                                        <h5 className="saveing-item__description">- description</h5>
                                        <h5 className="saveing-item__amount">amount</h5>
    
                                        <div className="icons">
                                            <a href="#" className="edit-icon" data-id="${expense.id}">
                                                <i className='bx bxs-edit' ></i>
                                            </a>
                                            <a href="#" className="delete-icon" data-id="${expense.id}">
                                                <i className='bx bxs-trash'></i>
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                        </div>
                    </div>

                    <div className="dv__income-table">
                        <h3>Income Data</h3>
                        <ul className="title__container">
                            <li className="income__date">
                                <h4>Date</h4>
                            </li>
                            <li className="income__description">
                                <h4>Description</h4>
                            </li>
                            <li className="income__amount">
                                <h4>Amount</h4>
                            </li>   
                        </ul>
                        <div className="income__list-container">
                            {/*<div className="income">
                                    <div className="income__item">
                                        <h5 className="income-item__date">date</h6>
                                        <h5 className="income-item__description">- description</h6>
                                        <h5 className="income-item__amount">amount</h5>
    
                                        <div className="icons">
                                            <a href="#" className="edit-icon" data-id="${expense.id}">
                                                <i className='bx bxs-edit' ></i>
                                            </a>
                                            <a href="#" className="delete-icon" data-id="${expense.id}">
                                                <i className='bx bxs-trash'></i>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                   
                    <div className="dv__expenses-table">
                        <h3>Expenses Data</h3>
                        <ul className="title__container">
                            <li className="expenses__date">
                                <h4>Date</h4>
                            </li>
                            <li className="expenses__description">
                                <h4>Description</h4>
                            </li>
                            <li className="expenses__amount">
                                <h4>Amount</h4>
                            </li>     
                        </ul>
                        <div className="expenses__list-container">
                        {/* <div className="expense">
                                <div className="expense__item">
                                    <h5 className="expense-item__date">date</h6>
                                    <h5 className="expense-item__description">- description</h6>
                                    <h5 className="expense-item__amount">amount</h5>
                                    <div className="icons">
                                        <a href="#" className="edit-icon" data-id="${expense.id}">
                                            <i className='bx bxs-edit' ></i>
                                        </a>
                                        <a href="#" className="delete-icon" data-id="${expense.id}">
                                            <i className='bx bxs-trash'></i>
                                        </a>
                                    </div>
                                </div>
  </div> -->*/}
                        </div>
                        
                    </div>
                </div>
            </section>
            <button  className="save__file-btn">Save File</button>
        </aside>
    </section>
    <script type="text/javasript" src="money-tracker.js"></script>
</body>
      
    </>
  )
}

export {Home}


