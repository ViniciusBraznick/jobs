import { Transition } from '@headlessui/react'
import { RotateIcon } from './styles'
import { Fragment } from 'react'

interface LauchScreen {
  isLoading: boolean
}

export function LauchScreen({ isLoading }:LauchScreen) {
  return (
    <Transition
      as={Fragment}
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <RotateIcon />
    </Transition>
  )
}
