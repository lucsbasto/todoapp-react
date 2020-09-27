import React from 'react';
import './styles.css'


interface PageHeaderProps {
  title: string
}

const Header: React.FC<PageHeaderProps> = (props) => {

  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Header