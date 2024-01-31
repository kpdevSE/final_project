"use client";
export default function ModalComponents() {
  return (
    <div>
      <button
        className="bg-lime-400 w-[200px] h-[50px] flex items-center justify-center rounded-lg shadow-lg shadow-lime-200 gap-2 font-semibold mt-8"
        onClick={() => document.getElementById("my_modal_4").showModal()}>
        Book Now
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form action="">
            <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-3">
              <div className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <input
                  type="email"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Youe Email Address"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-3 mt-3">
              <div className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Seller Name"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <input
                  type="email"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Seller Email"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-3 mt-3">
              <div className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Seller Name"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <input
                  type="email"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Seller Email"
                />
              </div>
            </div>

            <button>Book Now</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
