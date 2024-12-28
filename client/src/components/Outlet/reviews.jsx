import React from "react";
import emptyStar from "../../assets/global/Star.svg";
import { Outlet, useLoaderData } from "react-router-dom";
const Reviews = () => {
  const reviewsData = useLoaderData();

  return (
    <div className="flex items-center h-[668px]">
      {reviewsData.map((item, index) => (
        <div key={index} className="flex flex-col gap-10 w-[900px]">
          {/* Title Section */}
          <h1 className="text-2xl font-bold text-gray-800">{item.title}</h1>
          <p className="text-sm text-gray-500">{item.reviewInfo}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 self-start">
            {item.buttonInfo}
          </button>

          {/* Reviews Section */}
          <div className="flex flex-col gap-6">
            {item.info.map((review, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 border-b pb-6 last:border-none"
              >
                <div className="flex items-center gap-4">
                  {/* Profile Picture */}
                  <div className="flex items-center justify-center bg-gray-300 text-gray-700 font-bold rounded-full w-12 h-12">
                    {review.profPic}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {review.publishTime}
                    </p>
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex justify-between items-center">
                  <p className="text-neutral-500">{review.comment}</p>

                  {/* Star Count */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.starCount)].map((_, starIdx) => (
                      <img
                        key={starIdx}
                        src={emptyStar}
                        alt="Star"
                        className="w-5 h-5"
                      />
                    ))}
                    {[...Array(5 - review.starCount)].map((_, starIdx) => (
                      <img
                        key={starIdx}
                        src={emptyStar}
                        alt="Empty Star"
                        className="w-5 h-5 opacity-20"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
