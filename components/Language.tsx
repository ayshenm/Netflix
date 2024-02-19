// import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import Button from "@mui/material/Button";

// function Language() {
//   return (
//     <div className="flex justify-center items-center gap-2 border">
//       <div className="flex">
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="default-ltr-cache-4z3qvp e1svuwfo1"
//           data-name="Languages"
//           aria-hidden="true">
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
//             fill="white"></path>
//         </svg>
//       </div>

//       <div className="w-[100%] bg-green-300">
//         <select style={{WebkitAppearance:'none'}} id="language" className="border-none focus:outline-none bg-transparent text-white ">

//           <option defaultValue="English" className="text-gray-600 font-bold w-[20%]">
//             English
//           </option>
//           <option className="text-gray-600 font-bold" value="Ru">
//             Русский
//           </option>
//         </select>
//       </div>

//       <div>
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="default-ltr-cache-4z3qvp e1svuwfo1"
//           data-name="CaretDown"
//           aria-hidden="true">
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
//             fill="white"></path>
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default Language;

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [{ name: "English" }, { name: "Русский" }];

function Language() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="top-16">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 w-full">
          <Listbox.Button className="relative w-full flex bg-red-900 cursor-default rounded-lg  shadow-md focus:outline-none  pl-3 pr-10 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div className="flex items-center py-2">
              <div>
                <svg
                  className="mr-3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Languages"
                  aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                    fill="currentColor"></path>
                </svg>
              </div>
              <div>
                <span className="block truncate font-bold ">{selected.name}</span>
              </div>
              <div>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="CaretDown"
                    aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                      fill="currentColor"></path>
                  </svg>
                </span>
              </div>
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-950 border-white border border-solid text-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-white"
                    }`
                  }
                  value={person}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
export default Language;
