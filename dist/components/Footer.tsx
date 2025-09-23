import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-8 mt-20 md:mt-28">
      <p className="text-sm text-slate-500">
        &copy; {currentYear} Alex Doe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
