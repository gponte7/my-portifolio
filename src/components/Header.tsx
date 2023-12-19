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
        className="flex items-center justify-between px-10 py-6 xl:px-16 xl:py-4 2xl:px-24"
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
              className="h-6 w-6 transition duration-100 hover:text-purple-800"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-zinc-800 hover:text-purple-800 lg:text-base"
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
                className="h-6 w-6 transition duration-100 hover:text-purple-800"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 mt-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-100 transition duration-100 hover:text-purple-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <a href={item.href}>{item.name}</a>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    // <div className="bg-slate-950 sticky inset-x-0 top-0 z-50">
    //   <div className="flex items-center justify-between md:justify-normal md:gap-16">
    //     <div className="flex items-center gap-2">
    //       <Image
    //         alt=""
    //         src={gponteIcon}
    //         width={1000}
    //         height={1000}
    //         quality={100}
    //         className="rounded-lg w-12 h-12"
    //       />
    //     </div>
    //     <nav aria-hidden="true" className="hidden md:flex">
    //       <div className="md:flex md:items-center md:gap-16">
    //         {navItems.map((item) => {
    //           return (
    //             <button
    //               key={item.name}
    //               className="md:text-sm md:font-semibold text-zinc-100 underline decoration-4 decoration-transparent decoration hover:decoration-slate-600 transition duration-200 cursor-pointer"
    //             >
    //               <a href={item.href}>{item.name}</a>
    //             </button>
    //           )
    //         })}
    //       </div>
    //     </nav>

    //     <Dialog.Root open={menuOpen}>
    //       <Dialog.Trigger
    //         onClick={() => setMenuOpen(!menuOpen)}
    //         className="md:hidden"
    //       >
    //         <Menu className="text-zinc-100" />
    //       </Dialog.Trigger>
    //       <Dialog.Portal>
    //         <Dialog.Overlay className="bg-slate-950 fixed inset-0">
    //           <Dialog.Content className="p-10">
    //             <div className="flex items-center justify-between">
    //               <div className="flex items-center gap-2">
    //                 <Image
    //                   alt=""
    //                   src={gponteIcon}
    //                   width={1000}
    //                   height={1000}
    //                   quality={100}
    //                   className="rounded-lg w-12 h-12"
    //                 />
    //               </div>
    //               <Dialog.Close
    //                 onClick={() => setMenuOpen(!menuOpen)}
    //                 className="md:hidden"
    //               >
    //                 <X className="text-zinc-100" />
    //               </Dialog.Close>
    //             </div>
    //             <nav className="flex mt-10">
    //               <div className="flex flex-col items-start gap-4 text-md font-semibold">
    //                 {navItems.map((item) => {
    //                   return (
    //                     <button
    //                       key={item.name}
    //                       className="md:text-sm md:font-semibold text-zinc-100 underline decoration-4 decoration-transparent decoration hover:decoration-slate-600 transition duration-200 cursor-pointer"
    //                       onClick={() => setMenuOpen(!menuOpen)}
    //                     >
    //                       <a href={item.href}>{item.name}</a>
    //                     </button>
    //                   )
    //                 })}
    //               </div>
    //             </nav>
    //           </Dialog.Content>
    //         </Dialog.Overlay>
    //       </Dialog.Portal>
    //     </Dialog.Root>
    //   </div>
    // </div>
  )
}
