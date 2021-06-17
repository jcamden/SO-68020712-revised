// import '../../../styles/index.css';

import React from 'react';

export interface TestButtonProps {
  title: string; 
  onClick: () => void
}

export const TestButton: React.FC<TestButtonProps> = ({ title, onClick }) => {
  return (
      <button
        className="bg-test text-small md:text-small-lg"
        onClick={onClick}
      >{title}</button>
  );
};