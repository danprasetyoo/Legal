'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const navigation = [
  { name: 'Beranda', href: '/' },
  {
    name: 'Dokumen Perusahaan',
    href: '#',
    dropdown: [
      {
        name: 'Akta Perusahaan',
        href: '/akta-perusahaan',
        description: 'Dokumen resmi pendirian perusahaan',
        icon: DocumentTextIcon,
      },
      {
        name: 'Aset Perusahaan',
        href: '/aset-perusahaan',
        description: 'Daftar aset yang dimiliki perusahaan',
        icon: BuildingOfficeIcon,
      },
      {
        name: 'SK SOP Legal',
        href: '/sk-sop-legal',
        description: 'Standar operasional prosedur legal',
        icon: ClipboardDocumentCheckIcon,
      },
    ],
  },
  { name: 'Materi Legal', href: '/materi-legal' },
  { name: 'Profil Legal', href: '/profil-legal' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.dropdown ? (
                <Popover key={item.name} className="relative">
                  {({ open }) => (
                    <>
                      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                        {item.name}
                        <ChevronRightIcon
                          aria-hidden="true"
                          className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                            open ? 'rotate-90' : 'rotate-0'
                          }`}
                        />
                      </PopoverButton>
                      <PopoverPanel
                        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                          <div className="p-4">
                            {item.dropdown.map((subItem) => (
                              <div
                                key={subItem.name}
                                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                              >
                                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  <subItem.icon
                                    aria-hidden="true"
                                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                                  />
                                </div>
                                <div>
                                  <Link
                                    to={subItem.href}
                                    className="font-semibold text-gray-900"
                                  >
                                    {subItem.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                  <p className="mt-1 text-gray-600">
                                    {subItem.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <input
              type="text"
              placeholder="Search..."
              className="text-sm/6 font-semibold text-gray-900 border border-gray-300 rounded-md px-3 py-1"
            />
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <div key={item.name}>
                        <span className="block px-3 py-2 text-base/7 font-semibold text-gray-900">
                          {item.name}
                        </span>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
                <div className="py-6">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-base/7 text-gray-900"
                  />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
