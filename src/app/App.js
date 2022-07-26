import React from 'react';

export const App = () => {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div >
      <h1>Hello World</h1>
    </div>
  );
}


