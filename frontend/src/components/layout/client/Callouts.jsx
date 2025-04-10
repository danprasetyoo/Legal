import React from 'react';

const callouts = [
  {
    name: 'Pengajuan Legal Opinion',
    description: 'Ajukan pendapat hukum untuk kebutuhan Anda.',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Pengajuan Legal Opinion',
    href: '/legal-opinion',
  },
  {
    name: 'Review Dokumen',
    description: 'Dapatkan ulasan dokumen hukum Anda.',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Review Dokumen',
    href: '/review-dokumen',
  },
  {
    name: 'Konsultasi Legal',
    description: 'Konsultasikan masalah hukum Anda dengan ahli.',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Konsultasi Legal',
    href: '/konsultasi-legal',
  },
];

const Callouts = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-20 lg:max-w-none lg:py-24">
          <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
          <div className="mt-4 grid gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-56 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callouts;
