import React from 'react';

const Card = ({ children, className, title, footer }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}
    >
      {title && (
        <div className="bg-gray-100 px-4 py-2 border-b">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && <div className="bg-gray-100 px-4 py-2 border-t">{footer}</div>}
    </div>
  );
};

export default Card;
