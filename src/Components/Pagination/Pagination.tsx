import React from 'react'
import {PaginationType} from '../../types/pagination.types'
export const Pagination = ({
    pageCount,
    pagination,
    activePage,
    isRemove,
    deleteAll,
  }:PaginationType) => {
    return (
      <div className=" flex flex-row w-full items-center justify-between mt-4   ">
        <div className="  flex flex-row w-full items-center justify-around border-none">
          <div>
            <button
              className={` p-4 text-2xl bg-red-500 rounded-full text-white shadow-lg items-start ${
                isRemove ? "" : "hidden"
              } `}
              onClick={deleteAll}
            >
              Delete Selected
            </button>
          </div>
  
          <i
            className={` fas fa-backward text-white text-2xl rounded-full h-12 w-12 flex items-center justify-center  ${
              activePage > 1
                ? "bg-blue-500 cursor-pointer"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            title="First"
            onClick={() => {
              pagination("first");
            }}
          ></i>
          <i
            className={`fas fa-chevron-left text-white text-2xl rounded-full h-12 w-12 flex items-center justify-center  ${
              activePage > 1
                ? "bg-blue-500 cursor-pointer"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            title="Previous"
            onClick={() => {
              pagination("prev");
            }}
          ></i>
          {Array(pageCount)
            .fill(0)
            .map((_, index) => {
              return activePage === index + 1 ? (
                <div key={index}>
                  <span className="text-white text-2xl rounded-full h-12 w-12 flex items-center justify-center bg-gray-500 cursor-not-allowed">
                    {++index}
                  </span>
                </div>
              ) : (
                <div key={index}>
                  <span
                    className="text-white text-2xl rounded-full h-12 w-12 flex items-center justify-center bg-blue-500 cursor-pointer"
                    onClick={() => {
                      pagination(index);
                    }}
                  >
                    {++index}
                  </span>
                </div>
              );
            })}
          <i
            className={`fas fa-chevron-right text-white text-2xl rounded-full h-12 w-12 flex items-center justify-center  ${
              activePage < pageCount
                ? "bg-blue-500 cursor-pointer"
                : "bg-gray-500 cursor-not-allowed"
            } `}
            title="Next"
            onClick={() => {
              pagination("next");
            }}
          ></i>
          <i
            className={`fas fa-forward text-white text-2xl rounded-full h-12 w-12 flex items-center justify-center  ${
              activePage < pageCount
                ? "bg-blue-500 cursor-pointer "
                : "bg-gray-500 cursor-not-allowed"
            }`}
            title="Last"
            onClick={() => {
              pagination("last");
            }}
          ></i>
        </div>
      </div>
    );
  };
  