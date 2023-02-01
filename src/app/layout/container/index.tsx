import React from 'react';

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="layout-wrapper">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
