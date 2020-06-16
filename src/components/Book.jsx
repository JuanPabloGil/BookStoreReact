import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { createPopper } from '@popperjs/core';

const Book = ({ book, handleRemoveBook }) => {
  

  const putsStarts = () => {
    let starsN = Math.floor(Math.random() * 4) + 1 
    let arr = []
    for(let i = 0 ; i < 5; i += 1){
        if(i < starsN + 1 ){
          arr.push('orange')
        }else {
          arr.push('black')
        }
    }
    return arr
  }

  const randomNumber = ( ) => {
    return Math.floor(Math.random() * 99) + 1 
  }

  const random = randomNumber();

  return (
    <div className="Lesson-Panel">
      <div>
        <span className="School-of">{book.category}</span>
        <h3 className="title">{book.title}</h3>
        <span className="Suzanne-Collins">{book.id}</span>
        <br />
        <button className="Remove pt-3" onClick={() => handleRemoveBook(book.id)} > Remove </button>
      </div>
      <div>
        <div class="progress">
        
          <div class="progress-bar " style= {{width: random+'%' }}role="progressbar" aria-valuenow={random} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div>
        {
          putsStarts().map((colorStar) => {
            return <FontAwesomeIcon style={{color: colorStar}} icon={faStar}/>
          })
          
        }
        

      </div>

    </div>
  );
}

export default Book;