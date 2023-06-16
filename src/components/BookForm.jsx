import React from 'react';

function BookForm() {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" />
        <input type="text" name="author" />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default BookForm;
