import React, { useState } from "react";

export default function PopupBig() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    showPopup && (
      <div className="fixed inset-x-0 bottom-0 p-4">
        <div className="relative max-w-xl rounded-lg bg-gray-100 p-6 shadow-sm">
          <button
            onClick={() => setShowPopup(false)}
            type="button"
            className="absolute -end-1 -top-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-full w-full rounded-xl object-cover"
            />

            <div>
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h2>

              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, eos. Inventore dolor delectus commodi laudantium
                adipisci, illum amet itaque optio!
              </p>

              <div className="mt-6 sm:text-right">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
