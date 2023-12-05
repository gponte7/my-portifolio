'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex items-center justify-between md:justify-normal md:gap-16">
      <h1 className="text-3xl font-bold text-zinc-800">Shortly</h1>

      <nav aria-hidden="true" className="hidden md:flex ">
        <ul className="md:flex md:items-center md:gap-16 md:text-sm md:font-semibold md:text-zinc-500">
          <li className="hover:text-zinc-600 transition duration-100 cursor-pointer">
            Features
          </li>
          <li className="hover:text-zinc-600 transition duration-100 cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-zinc-600 transition duration-100 cursor-pointer">
            Resources
          </li>
        </ul>
      </nav>

      <Dialog.Root>
        <Dialog.Trigger
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          <Menu />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-zinc-100 fixed inset-0">
            <Dialog.Content className="p-10">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-zinc-800">Shortly</h1>
                <Dialog.Close
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden"
                >
                  <X />
                </Dialog.Close>
              </div>
              <nav className="flex mt-10">
                <ul className="flex flex-col gap-4 text-md font-semibold text-zinc-500">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Resources</li>
                </ul>
              </nav>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
