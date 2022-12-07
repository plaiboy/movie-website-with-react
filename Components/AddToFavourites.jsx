import React from 'react';

const AddFavourite = () => {
    return(
        <>
          <span className='mr-2'>Add to Favourites</span>
          <svg 
              width= '1em'
              height='1em'
              viewBox='bi bi-heart-fill'
              fill='red'
              xmins='/http://www.w3.org/2000/svg'>

              <path 
                   fill-rule='evenodd'
                   d='m8 1.314C12.438 23.534 5.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                 />
              </svg>
        </>
    )
}

export default AddFavourite;