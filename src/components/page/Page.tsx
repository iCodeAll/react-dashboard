import React from 'react';
import './Style.scss';

const Page: React.FC = ({ children }) => {
  return <div className="page-wrapper">{children}</div>;
};

export default Page;
