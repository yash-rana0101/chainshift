// import React from 'react';

export default function Button({children,type,onClick,isLoading,width,disabled}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg width-${width} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      {children}
    </button>
    
  );
}
