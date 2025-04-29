import { useState } from "react";
import { Dialog, DialogPanel, CloseButton } from "@headlessui/react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="m-2 rounded-md bg-blue-700 px-2.5 py-2.5 text-sm text-white shadow-sm hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogPanel className="fixed inset-0 flex flex-col overflow-y-auto text-sm">
          <div className="group relative flex items-center px-[16px] py-[8px] text-white bg-blue-700">
            <CloseButton className="-ml-[16px] self-stretch px-[16px]">
              Close
            </CloseButton>
            <input
              type="text"
              data-autofocus
              className="block w-full rounded-full px-[16px] py-[10px] text-[16px] text-white placeholder:text-gray-300 sm:text-[14px] bg-blue-800"
              placeholder="Search"
            />
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
