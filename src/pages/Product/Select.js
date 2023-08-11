import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Select({ list = [], img = false, selected, setSelected = Function }) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative ml-6">
            <Listbox.Button className="relative w-full cursor-pointer h-11 border bg-white dark:bg-bgDarkMode py-1.5 pl-3 pr-10 text-left text-textColor dark:text-textDarkMode dark:border-[#474D57] rounded focus:outline-none ">
              <span className="flex items-center">
                {img && <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />}
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#fafafa] dark:bg-[#0b0e11] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                {list.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'bg-[#f5f5f5]  dark:bg-[#2b3139] text-opacity-75'
                          : 'text-textColor dark:text-textDarkMode',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {img && <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />}
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-textColor dark:text-textDarkMode' : 'text-[#c99400]',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
