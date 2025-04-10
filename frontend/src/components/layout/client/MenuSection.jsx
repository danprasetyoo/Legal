import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../../common/MenuCard';

const menuItems = [
  {
    title: 'Legal Opinion',
    description: 'Ajukan pendapat hukum untuk kebutuhan Anda.',
    buttonText: 'Selengkapnya',
    route: '/legal-opinion',
    layout: 'lg:col-span-2', // Mengambil tiga kolom pada layar besar
  },
  {
    title: 'Contract Review',
    description: 'Dapatkan ulasan kontrak hukum Anda.',
    buttonText: 'Selengkapnya',
    route: '/contract-review',
    layout: 'lg:row-span-2', // Smaller card
  },
  {
    title: 'Legal Consultation',
    description: 'Konsultasikan masalah hukum Anda dengan ahli.',
    buttonText: 'Selengkapnya',
    href: 'https://api.whatsapp.com/send/?phone=62811889932&text&type=phone_number&app_absent=0',
    layout: 'lg:col-span-1 lg:row-span-2', // Perbaikan layout untuk menghindari konflik
  },
  {
    title: 'Undang-Undang',
    description: 'Akses informasi terkait undang-undang.',
    buttonText: 'Selengkapnya',
    href: 'https://peraturan.bpk.go.id/Subjek',
    layout: 'lg:row-span-1', // Larger card spanning two rows
  },
  {
    title: 'POJK',
    description: 'Pelajari peraturan Otoritas Jasa Keuangan.',
    buttonText: 'Selengkapnya',
    href: 'https://www.ojk.go.id/id/regulasi/otoritas-jasa-keuangan/peraturan-ojk/Default.aspx',
    layout: 'max-lg:row-start-3', // Smaller card
  },
  {
    title: 'Permen BUMN',
    description: 'Informasi terkait peraturan Menteri BUMN.',
    buttonText: 'Selengkapnya',
    href: 'https://jdih.bumn.go.id/peraturan',
    layout: 'lg:col-start-3 lg:col-span-1 lg:row-span-2', // Contoh layout khusus
  },
  {
    title: 'Dokumen Perusahaan',
    description: 'Kelola dokumen perusahaan Anda.',
    buttonText: 'Selengkapnya',
    href: 'https://docs.google.com/document/d/16Plfm33MVJAJ3mO5OHweD9Wnk3wqr8bZ/edit',
    layout: 'lg:col-start-1 lg:row-start-4 lg:col-span-2', // Medium card
  },
];

const MenuSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item.route) {
      navigate(item.route);
    } else if (item.href) {
      window.open(item.href, '_blank');
    }
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">
          Layanan Kami
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Pilihan Layanan Hukum
        </p>
        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              onClick={() => handleNavigation(item)}
              layout={item.layout}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
