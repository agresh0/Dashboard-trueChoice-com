import React from 'react'

function NoteBoxForAddProduct() {
  return (
    <div>
       < label className='form-label'>Note:</label>
      <textarea className='form-control' id="note" name="note" rows="5" cols="50"></textarea>
    </div>
  )
}

export default NoteBoxForAddProduct