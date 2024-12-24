import React, { useState } from "react";

const Category = ({ categoryFilter }) => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeClick = (categoryIndex, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [categoryIndex]: size,
    }));
  };

  return (
    <div className="px-32">
      {categoryFilter.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-6 py-8 px-10 border rounded-lg mb-6 shadow-sm"
        >
          {/* Categories Section */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-800">
              {item.categoryName}
            </h3>
            {item.categories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="flex items-center gap-3 mb-2 pb-2 border-b"
              >
                <input type="checkbox" className="cursor-pointer" />
                <p className="text-gray-700">{category}</p>
              </div>
            ))}
          </div>

          {/* Colors Section */}
          <div>
            <h3 className="font-bold text-lg text-gray-800">
              {item.colors.colorTitle}
            </h3>
            <div className="flex gap-2 mt-3">
              {Object.entries(item.colors)
                .filter(([key]) => key !== "colorTitle")
                .map(([colorName, colorCode], colorIndex) => (
                  <div
                    key={colorIndex}
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: colorCode }}
                    title={colorName}
                  ></div>
                ))}
            </div>
          </div>

          {/* Sizes Section */}
          <div>
            <h3 className="font-bold text-lg text-gray-800">Sizes</h3>
            <div className="flex gap-2 mt-3">
              {item.sizes.map((size, sizeIndex) => (
                <button
                  key={sizeIndex}
                  className={`px-3 py-1 border rounded-lg text-sm transition-all ${
                    selectedSizes[index] === size
                      ? "bg-blue-500 text-white border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleSizeClick(index, size)}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSizes[index] && (
              <p className="mt-2 text-sm text-gray-600">
                Selected size:{" "}
                <span className="font-medium">{selectedSizes[index]}</span>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
