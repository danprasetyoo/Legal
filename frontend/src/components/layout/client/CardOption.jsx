import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Akta Perusahaan',
    href: 'https://docs.google.com/document/d/16Plfm33MVJAJ3mO5OHweD9Wnk3wqr8bZ/edit',
    imageSrc: 'https://via.placeholder.com/300x200.png?text=Akta+Perusahaan',
    imageAlt: 'Image for Akta Perusahaan.',
  },
  {
    id: 2,
    name: 'Akta Direksi',
    href: 'https://docs.google.com/document/d/16Plfm33MVJAJ3mO5OHweD9Wnk3wqr8bZ/edit',
    imageSrc: 'https://via.placeholder.com/300x200.png?text=Akta+Direksi',
    imageAlt: 'Image for Akta Direksi.',
  },
];

const CardOption = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Deploy faster
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 justify-center">
          {products.map((product) => (
            <div key={product.id} className="group relative text-center">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="h-64 w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 mx-auto"
              />
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link to={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardOption;
