import React, { useState } from "react";

function Table() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("Main Category");

  const options1 = ["Cloth set", "Sales details", "Marketing"];

  const toggleDropdown1 = () => {
    setDropdownVisible1(!isDropdownVisible1);
  };

  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
    setDropdownVisible1(false);
  };

  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("Category");

  const options2 = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown2 = () => {
    setDropdownVisible2(!isDropdownVisible2);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setDropdownVisible2(false);
  };

  const [isDropdownVisible3, setDropdownVisible3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState("Sub-Category");

  const options3 = ["Sub-Option 1", "Sub-Option 2", "Sub-Option 3"];

  const toggleDropdown3 = () => {
    setDropdownVisible3(!isDropdownVisible3);
  };

  const handleOptionClick3 = (option) => {
    setSelectedOption3(option);
    setDropdownVisible3(false);
  };
  const [isDropdownVisible4, setDropdownVisible4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState("Sub-Category");

  const options4 = ["Active", "Deactive"];

  const toggleDropdown4 = () => {
    setDropdownVisible4(!isDropdownVisible3);
  };

  const handleOptionClick4 = (option) => {
    setSelectedOption4(option);
    setDropdownVisible4(false);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-end w-full pb-2">
        <button
          className="bg-blue-500 px-6 py-2 rounded-lg text-white font-semibold shadow-lg"
          onClick={toggleModal}
        >
          Add Product
        </button>
      </div>
      <div className="relative flex flex-col overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm sticky text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs w-full justify-evenly sticky top-0 table-fixed z-10 uppercase bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-400">
            <tr className="sticky z-10 top-0 table-fixed text-center">
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Main Category
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Sub-Category
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Active Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b text-center text-md font-semibold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-0 py-4 font-medium flex items-center justify-center text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="bg-blue-500 h-20 w-20 rounded-lg"
                  alt="Product"
                />
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">asjknfm</td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">
                <p className="bg-green-400 py-2 px-3 rounded-full text-white">
                  90
                </p>
              </td>
              <td className="px-6 py-4">
                <p className="bg-green-400 py-2 px-3 rounded-full text-white">
                  Active
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
            <div className="flex items-center pb-3 border-b border-gray-300">
              <h3 className="text-gray-800 text-xl font-bold flex-1">
                Add Product
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                viewBox="0 0 320.591 320.591"
                onClick={toggleModal}
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>

            <div className="my-6 space-y-5">
              <div className="relative">
                <input
                  placeholder="Product Name"
                  className="w-full p-2 h-10 border-blue-500 border-[1px] rounded-md focus:ring-0 focus:border-[2px]"
                />
              </div>
              <div className="relative gap-5">
                <textarea
                  placeholder="Description"
                  className="w-full p-2 h-20 border-blue-500 border-[1px] rounded-md focus:ring-0 focus:border-[2px]"
                />
              </div>

              {/* First Dropdown */}
              <div className="relative">
                <div className="relative w-full">
                  <button
                    type="button"
                    id="dropdownToggle1"
                    className="px-5 py-2.5 rounded text-white w-full text-start flex justify-between align-middle m-auto items-center text-sm font-semibold border-none outline-none bg-blue-500 hover:bg-blue-700 active:bg-blue-600"
                    onClick={toggleDropdown1}
                  >
                    {selectedOption1}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-white inline ml-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                  </button>

                  {isDropdownVisible1 && (
                    <ul
                      id="dropdownMenu1"
                      className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-md max-h-96 overflow-auto"
                    >
                      {options1.map((option, index) => (
                        <li
                          key={index}
                          className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer"
                          onClick={() => handleOptionClick1(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Second Dropdown */}
              <div className="relative">
                <div className="relative w-full">
                  <button
                    type="button"
                    id="dropdownToggle2"
                    className="px-5 py-2.5 rounded text-white w-full text-start flex justify-between align-middle m-auto items-center text-sm font-semibold border-none outline-none bg-blue-500 hover:bg-blue-700 active:bg-blue-600"
                    onClick={toggleDropdown2}
                  >
                    {selectedOption2}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-white inline ml-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                  </button>

                  {isDropdownVisible2 && (
                    <ul
                      id="dropdownMenu2"
                      className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-md max-h-96 overflow-auto"
                    >
                      {options2.map((option, index) => (
                        <li
                          key={index}
                          className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer"
                          onClick={() => handleOptionClick2(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Third Dropdown */}
              <div className="relative">
                <div className="relative w-full">
                  <button
                    type="button"
                    id="dropdownToggle3"
                    className="px-5 py-2.5 rounded text-white w-full text-start flex justify-between align-middle m-auto items-center text-sm font-semibold border-none outline-none bg-blue-500 hover:bg-blue-700 active:bg-blue-600"
                    onClick={toggleDropdown3}
                  >
                    {selectedOption3}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-white inline ml-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                  </button>

                  {isDropdownVisible3 && (
                    <ul
                      id="dropdownMenu3"
                      className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-md max-h-96 overflow-auto"
                    >
                      {options3.map((option, index) => (
                        <li
                          key={index}
                          className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer"
                          onClick={() => handleOptionClick3(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {/* File Upload  */}
              <div className="relative">
                <div class="w-full">
                  <label class="text-base text-gray-500 font-semibold block">
                    Upload Photo
                  </label>
                  <input
                    type="file"
                    multiple
                    class="w-full text-gray-400 font-semibold text-sm border-[1px] border-blue-500 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:text-gray-500 rounded-md"
                  />
                  {/* <p class="text-xs text-gray-400 mt-2">
                    PNG, JPG SVG, WEBP, and GIF are Allowed.
                  </p> */}
                </div>
              </div>
              <div className=" relative">
                <hr className="my-4" />
                <p className="font-semibold text-xl">Size Chart</p>
                <div className="py-2 space-y-5 gap-5">
                  <input
                    placeholder="Size"
                    className="w-full p-2 h-10 border-blue-500 border-[1px] rounded-md focus:ring-0 focus:border-[2px]"
                  />
                  <input
                    placeholder="SKU Code"
                    className="w-full p-2 h-10 border-blue-500 border-[1px] rounded-md focus:ring-0 focus:border-[2px]"
                  />
                  {/* dropdown  */}
                  <div className="relative w-full">
                    <button
                      type="button"
                      id="dropdownToggle3"
                      className="px-5 py-2.5 rounded text-white w-full text-start flex justify-between align-middle m-auto items-center text-sm font-semibold border-none outline-none bg-blue-500 hover:bg-blue-700 active:bg-blue-600"
                      onClick={toggleDropdown4}
                    >
                      {selectedOption4}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-white inline ml-3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clipRule="evenodd"
                          data-original="#000000"
                        />
                      </svg>
                    </button>

                    {isDropdownVisible4 && (
                      <ul
                        id="dropdownMenu3"
                        className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-md max-h-96 overflow-auto"
                      >
                        {options4.map((option, index) => (
                          <li
                            key={index}
                            className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer"
                            onClick={() => handleOptionClick4(option)}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                onClick={toggleModal}
              >
                Close
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
