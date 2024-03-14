import {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'

export default function StyledDrawer(props: any) {

   return (
      <Transition.Root show={props.open} as={Fragment}>
         <Dialog as="div" className="relative z-[999]" onClose={props.setOpen}>
            <Transition.Child
               as={Fragment}
               enter="ease-in-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in-out duration-300"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black bg-opacity-10 transition-opacity cursor-pointer"/>
            </Transition.Child>
            <div className="fixed inset-0 overflow-hidden">
               <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-300"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                     >
                        <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                           <Transition.Child
                              as={Fragment}
                              enter="ease-in-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in-out duration-300"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                           >
                              <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">

                              </div>
                           </Transition.Child>
                           <div
                              className={`flex h-full flex-col overflow-y-scroll bg-[#474796] bg-opacity-100 shadow-xl`}>
                              <div className="relative flex-1">{props.children}</div>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </div>
         </Dialog>
      </Transition.Root>
   )
}