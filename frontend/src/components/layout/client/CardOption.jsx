import React from 'react';

const CardOption = ({ cards }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {cards.map((card) => (
            <div key={card.id} className="group relative text-center">
              <img
                alt={card.imageAlt || 'Card Image'}
                src={card.imageUrl || 'https://via.placeholder.com/300x200'}
                className="h-64 w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 mx-auto"
              />
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardOption;
