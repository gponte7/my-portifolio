'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import gponteIcon from '../../public/gponte.jpg'
import { Dialog } from '@headlessui/react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contato', href: '#contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-slate-950 sticky inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#">
            <span className="sr-only">Guilherme Ponte</span>
            <Image
              width={1000}
              height={1000}
              quality={100}
              className="rounded-lg w-12 h-12"
              src={gponteIcon}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu
              className="h-6 w-6 transition duration-100 hover:text-sky-800"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-zinc-100 border-b-2 border-b-transparent transition duration-200 hover:border-b-sky-800 lg:text-base"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-950 px-10 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#">
              <span className="sr-only">Guilherme Ponte</span>
              <Image
                width={1000}
                height={1000}
                quality={100}
                className="rounded-lg w-12 h-12"
                src={gponteIcon}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-zinc-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X
                className="h-6 w-6 transition duration-100 hover:text-sky-800"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 mt-4">
                {navItems.map((item) => (
                  <a href={item.href} key={item.name}>
                    <button
                      className="-mx-3 block px-3 py-2 w-24 text-start text-base font-semibold leading-7 text-zinc-100 transition duration-200 hover:text-sky-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
