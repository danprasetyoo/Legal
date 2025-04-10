import React from 'react';

const MenuCard = ({ title, description, buttonText, onClick, layout }) => {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md ${layout}`}
    >
      <div className="px-8 pt-8 pb-16 sm:px-10 sm:pt-10">
        <p className="text-xl font-semibold tracking-tight text-gray-950">
          {title}
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed text-justify">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
      </div>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={onClick}
          className="rounded-md bg-transparent border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
