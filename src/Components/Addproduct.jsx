import React, { useState } from "react";

function NewProduct() {
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("Main Category");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const options1 = ["Cloth set", "Sales details", "Marketing"];

  const toggleDropdown1 = () => {
    setDropdownVisible1(!isDropdownVisible1);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
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

  const [isDropdownVisible4, setDropdownVisible4] = useState({});
  const [selectedOption4, setSelectedOption4] = useState({});

  const options4 = ["Active", "Inactive"];

  const toggleDropdown4 = (index) => {
    setDropdownVisible4((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleOptionClick4 = (option, index) => {
    setSelectedOption4((prevState) => ({
      ...prevState,
      [index]: option,
    }));
    setDropdownVisible4((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  const [sizeCharts, setSizeCharts] = useState([
    {
      size: "",
      sku: "",
      status: "Active",
      msq: "",
      finish: "",
      rolePrices: [
        { role: "", gst: "", priceWithGst: "", minPriceQuantity: "" },
      ],
    },
  ]);

  const addSizeChart = () => {
    setSizeCharts([
      ...sizeCharts,
      {
        size: "",
        sku: "",
        status: "Active",
        msq: "",
        finish: "",
        rolePrices: [
          { role: "", gst: "", priceWithGst: "", minPriceQuantity: "" },
        ],
      },
    ]);
  };

  const handleSizeChartChange = (index, field, value) => {
    const newSizeCharts = [...sizeCharts];
    newSizeCharts[index][field] = value;
    setSizeCharts(newSizeCharts);
  };

  const removeSizeChart = (index) => {
    const newSizeCharts = [...sizeCharts];
    newSizeCharts.splice(index, 1);
    setSizeCharts(newSizeCharts);
  };

  const handleRolePriceChange = (chartIndex, roleIndex, field, value) => {
    const newSizeCharts = [...sizeCharts];
    newSizeCharts[chartIndex].rolePrices[roleIndex][field] = value;
    setSizeCharts(newSizeCharts);
  };

  const addRolePrice = (chartIndex) => {
    const newSizeCharts = [...sizeCharts];
    newSizeCharts[chartIndex].rolePrices.push({
      role: "",
      gst: "",
      priceWithGst: "",
      minPriceQuantity: "",
    });
    setSizeCharts(newSizeCharts);
  };

  const removeRolePrice = (chartIndex, roleIndex) => {
    const newSizeCharts = [...sizeCharts];
    newSizeCharts[chartIndex].rolePrices.splice(roleIndex, 1);
    setSizeCharts(newSizeCharts);
  };

  const [isDropdownVisibleRole, setDropdownVisibleRole] = useState({});
  const [selectedRoleOption, setSelectedRoleOption] = useState({});

  const roleOptions = ["Normal Person", "VIP", "Wholesale"];

  const toggleRoleDropdown = (chartIndex, roleIndex) => {
    setDropdownVisibleRole((prevState) => ({
      ...prevState,
      [chartIndex]: {
        ...prevState[chartIndex],
        [roleIndex]: !prevState[chartIndex]?.[roleIndex],
      },
    }));
  };

  const handleRoleOptionClick = (chartIndex, roleIndex, option) => {
    setSelectedRoleOption((prevState) => ({
      ...prevState,
      [chartIndex]: {
        ...prevState[chartIndex],
        [roleIndex]: option,
      },
    }));
    setDropdownVisibleRole((prevState) => ({
      ...prevState,
      [chartIndex]: {
        ...prevState[chartIndex],
        [roleIndex]: false,
      },
    }));
  };

  return (
    <div className="my-6 space-y-5 pr-4">
      <div className="relative">
        <input
          onChange={handleNameChange}
          value={name}
          placeholder="Product Name"
          className="w-full p-2 h-10 border-blue-500 border-[1px] rounded-md focus:ring-0 focus:border-[2px]"
        />
      </div>
      <div className="relative gap-5">
        <textarea
          onChange={handleDescriptionChange}
          value={description}
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
            className="px-5 py-2.5 rounded text-black w-full text-start flex justify-between align-middle m-auto items-center text-sm font-medium outline-none bg-white border-[1px] border-solid border-blue-500 "
            onClick={toggleDropdown1}
          >
            {selectedOption1}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-blue-500 inline ml-3"
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
            className="px-5 py-2.5 rounded text-black w-full text-start flex justify-between align-middle m-auto items-center text-sm font-medium outline-none bg-white border-[1px] border-solid border-blue-500 "
            onClick={toggleDropdown2}
          >
            {selectedOption2}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-blue-500 inline ml-3"
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
            className="px-5 py-2.5 rounded text-black w-full text-start flex justify-between align-middle m-auto items-center text-sm font-medium outline-none bg-white border-[1px] border-solid border-blue-500 "
            onClick={toggleDropdown3}
          >
            {selectedOption3}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-blue-500 inline ml-3"
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

      <div>
        {sizeCharts.map((chart, chartIndex) => (
          <div
            key={chartIndex}
            className="p-4 border border-blue-500 rounded my-4"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Size"
                value={chart.size}
                onChange={(e) =>
                  handleSizeChartChange(chartIndex, "size", e.target.value)
                }
                className="p-2 border border-blue-500 rounded"
              />
              <input
                placeholder="SKU"
                value={chart.sku}
                onChange={(e) =>
                  handleSizeChartChange(chartIndex, "sku", e.target.value)
                }
                className="p-2 border border-blue-500 rounded"
              />
              <input
                placeholder="MSQ"
                value={chart.msq}
                onChange={(e) =>
                  handleSizeChartChange(chartIndex, "msq", e.target.value)
                }
                className="p-2 border border-blue-500 rounded"
              />
              <input
                placeholder="Finish"
                value={chart.finish}
                onChange={(e) =>
                  handleSizeChartChange(chartIndex, "finish", e.target.value)
                }
                className="p-2 border border-blue-500 rounded"
              />

              <div className="relative col-span-2">
                <div className="relative w-full">
                  <button
                    type="button"
                    id={`dropdownToggle4-${chartIndex}`}
                    className="px-5 py-2.5 rounded text-black w-full text-start flex justify-between align-middle m-auto items-center text-sm font-medium outline-none bg-white border-[1px] border-solid border-blue-500 "
                    onClick={() => toggleDropdown4(chartIndex)}
                  >
                    {selectedOption4[chartIndex] || "Status"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-blue-500 inline ml-3"
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

                  {isDropdownVisible4[chartIndex] && (
                    <ul
                      id={`dropdownMenu4-${chartIndex}`}
                      className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-md max-h-96 overflow-auto"
                    >
                      {options4.map((option, index) => (
                        <li
                          key={index}
                          className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer"
                          onClick={() => handleOptionClick4(option, chartIndex)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <button
                className="bg-blue-500 w-full rounded py-2 text-white"
                onClick={addSizeChart}
              >
                Add Size Chart
              </button>
              <button
                className="bg-blue-500 w-full rounded py-2 text-white"
                onClick={() => removeSizeChart(chartIndex)}
              >
                Remove Size Chart
              </button>
            </div>

            {chart.rolePrices.map((rolePrice, roleIndex) => (
              <div
                key={roleIndex}
                className="grid grid-cols-5 gap-4 mb-4 p-4 border border-blue-500 rounded"
              >
                <div className="relative col-span-1">
                  <div className="relative w-full">
                    <button
                      type="button"
                      id={`dropdownToggleRole-${chartIndex}-${roleIndex}`}
                      className="px-5 py-2.5 rounded text-black w-full text-start flex justify-between align-middle m-auto items-center text-sm font-medium outline-none bg-white border-[1px] border-solid border-blue-500 "
                      onClick={() => toggleRoleDropdown(chartIndex, roleIndex)}
                    >
                      {selectedRoleOption[chartIndex]?.[roleIndex] || "Role"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-blue-500 inline ml-3"
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

                    {isDropdownVisibleRole[chartIndex]?.[roleIndex] && (
                      <ul
                        id={`dropdownMenuRole-${chartIndex}-${roleIndex}`}
                        className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-md max-h-96 overflow-auto"
                      >
                        {roleOptions.map((option, index) => (
                          <li
                            key={index}
                            className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer"
                            onClick={() =>
                              handleRoleOptionClick(
                                chartIndex,
                                roleIndex,
                                option
                              )
                            }
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <input
                  placeholder="List Price"
                  value={rolePrice.listPrice}
                  onChange={(e) =>
                    handleRolePriceChange(
                      chartIndex,
                      roleIndex,
                      "listPrice",
                      e.target.value
                    )
                  }
                  className="p-2 border border-blue-500 rounded col-span-1"
                />
                <input
                  placeholder="Dealer Price"
                  value={rolePrice.dealerPrice}
                  onChange={(e) =>
                    handleRolePriceChange(
                      chartIndex,
                      roleIndex,
                      "dealerPrice",
                      e.target.value
                    )
                  }
                  className="p-2 border border-blue-500 rounded col-span-1"
                />
                <input
                  placeholder="Discount"
                  value={rolePrice.discount}
                  onChange={(e) =>
                    handleRolePriceChange(
                      chartIndex,
                      roleIndex,
                      "discount",
                      e.target.value
                    )
                  }
                  className="p-2 border border-blue-500 rounded col-span-1"
                />
                <input
                  placeholder="Discount Dealer Price"
                  value={rolePrice.discountDealerPrice}
                  onChange={(e) =>
                    handleRolePriceChange(
                      chartIndex,
                      roleIndex,
                      "discountDealerPrice",
                      e.target.value
                    )
                  }
                  className="p-2 border border-blue-500 rounded col-span-1"
                />
              </div>
            ))}
            <div className="flex flex-row w-full gap-5">
              <button
                className="bg-blue-500 w-full rounded py-2 px-4 text-white"
                onClick={() => addRolePrice(chartIndex)}
              >
                Add Role Price
              </button>
              <button
                className="bg-blue-500 w-full rounded py-2 px-4 text-white"
                onClick={() => removeRolePrice(chartIndex)}
              >
                Remove Role Price
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewProduct;
