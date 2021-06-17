import * as React from 'react';
import '../../../styles/index.css';

type TestButtonProps = {
  title: string; 
  onClick: ()=> void
}

const TestButton: React.FC<TestButtonProps> = ({ title, onClick }) => {
  return (
      <button
        className="btn-test"
        onClick={onClick}
      >{title}</button>
  );
};

export { TestButton };
