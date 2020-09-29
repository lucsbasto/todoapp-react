import React from 'react';
import './styles.css';

interface IPageHeaderProps {
  title: string;
}

const Header: React.FC<IPageHeaderProps> = ({ title }: { title: string }) => {
  return (
    <div className="./styles.css">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
