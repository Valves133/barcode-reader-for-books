import React, { useState } from 'react';

import Scanner from './Scanner';
import Results from './Results';

// <Scanner onScan={setIsbn} />

function Main() {
  const [isbn, setIsbn] = useState('9788576082675');
  return (
    <>
      <Scanner onScan={setIsbn} />
      <Results isbn={isbn} />
    </>
  );
}

export default Main;
