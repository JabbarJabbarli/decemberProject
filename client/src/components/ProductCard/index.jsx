import React, { useState } from "react";
import ButtonFunc from "../ButtonFunc";

const ProductCard = ({ productCardInfo, productCardImage }) => {
  const [increment, setIncrement] = useState(1);

  const decrease = () => {
    setIncrement(increment - 1);

    if (increment == 0) {
      setIncrement(increment == 0);
    }
  };

  const increase = () => {
    setIncrement(increment + 1);
  };

  return (
    <div className="px-32">
      <div className="flex items-center justify-center gap-64 ">
        <div>
          {productCardImage.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-[#f6f6f6] w-[540px] h-[574px]"
            >
              <img src={item.img} alt="Product" />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center  h-[574px] p-5">
          {productCardInfo.map((item, index) => (
            <div key={index} className="flex flex-col gap-9 w-full">
              <h1 className="text-4xl font-bold">{item.title}</h1>
              <div className="flex items-center gap-5">
                <div className="flex bg-[#f6f6f6] px-3 py-1 rounded-full items-center gap-1">
                  <img src={item.starIcon} alt="Star icon" />
                  <p>{item.review}</p>
                </div>
                <div className="border rounded-full px-4 py-1">
                  <span>{item.inStock ? item.stockInfo : "SOLD OUT"}</span>
                </div>
              </div>

              <p className="text-2xl font-semibold ">{item.price}.00</p>

              <div className="flex flex-col gap-3">
                <h2 className="text-lg font-medium">
                  {item.colors.colorTitle}
                </h2>
                <div className="flex gap-5">
                  {Object.entries(item.colors)
                    .filter(([key]) => key !== "colorTitle")
                    .map(([colorName, colorValue], colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-6 h-6 rounded-full"
                        title={colorName}
                        style={{ backgroundColor: colorValue }}
                      ></div>
                    ))}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-lg font-medium">Available Sizes</h2>
                <div className="flex gap-2">
                  {item.sizes.map((size, sizeIndex) => (
                    <span
                      key={sizeIndex}
                      className="px-3 py-1 border rounded text-sm cursor-pointer hover:bg-gray-200"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <ButtonFunc />

              <div>
                <button className="bg-black text-white rounded-md px-32 py-3">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
