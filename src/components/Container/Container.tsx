import * as React from 'react';
import './Container.css';

type ContainerProps = {
  children: any;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export { Container };
