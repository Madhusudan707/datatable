import React from 'react'
import { useRef } from "react";
import { Checkbox, Search, Pagination } from "../";
import { useFetch, useDataTable } from "../../hooks";

export const Table = () => {
  const { state } = useFetch();
  const refName:any = useRef("");
  const refEmail:any = useRef("");
  const refRole:any = useRef("");
  const {
    pageCount,
    pagination,
    mapStart,
    mapEnd,
    activePage,
    isRemove,
    deleteAll,
    handleSelectAll,
    handleClick,
    isAllChecked,
    isChecked,
    rowBg,
    isRowString,
  } = useDataTable();
  console.log(mapStart,mapEnd)
  return (
    <div className="flex flex-row w-full mt-8 ">
      <div className="flex flex-col w-full items-center justify-center  ">
        <div className="flex flex-row lg:w-2/3 w-full px-4   p-4 lg:shadow-md rounded-lg ">
          <table className="w-full">
            <thead className="font-bold text-left border-b-2">
              <tr>
                <th colSpan={5}>
                  <Search />
                </th>
              </tr>
              <tr>
                <th className="px-8">
                  <Checkbox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isAllChecked}
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {state.response
                .slice(mapStart, mapEnd)
                .map(({ id, name, email, role }) => {
                  return (
                    <tr
                      key={id}
                      className={`border-b-2 ${
                        isChecked.includes(id) ? rowBg : ""
                      }`}
                    >
                      <td className="px-8">
                        <Checkbox
                          type="checkbox"
                          name={name}
                          id={id}
                          handleClick={handleClick}
                          isChecked={isChecked.includes(id)}
                        />
                      </td>
                      <td className="py-2">
                        {isChecked.includes(id) && isRowString ? (
                          <input
                            type="text"
                            className="border focus:outline-none  p-2"
                            defaultValue={name}
                            ref={refName}
                          />
                        ) : (
                          name
                        )}
                      </td>
                      <td className="py-2">
                        {isChecked.includes(id) && isRowString ? (
                          <input
                            type="text"
                            className="border focus:outline-none  p-2"
                            defaultValue={email}
                            ref={refEmail}
                          />
                        ) : (
                          email
                        )}
                      </td>
                      <td className="py-2">
                        {isChecked.includes(id) && isRowString ? (
                          <input
                            type="text"
                            className="border focus:outline-none  p-2"
                            defaultValue={role}
                            ref={refRole}
                          />
                        ) : (
                          role
                        )}
                      </td>
                      <td>
                        <i
                          className="fas fa-edit p-4 cursor-pointer"
                          onClick={() => {
                            handleClick(false, id, "edit","","","");
                          }}
                        ></i>
                        <i
                          className={`fas fa-save p-4 cursor-pointer ${
                            isChecked.includes(id) && isRowString
                              ? ""
                              : "hidden"
                          }`}
                          onClick={() => {
                            handleClick(
                              false,
                              id,
                              "save",
                              refName.current.value,
                              refEmail.current.value,
                              refRole.current.value
                            );
                          }}
                        ></i>
                        <i
                          className={`fas fa-window-close p-4 cursor-pointer ${
                            isChecked.includes(id) && isRowString
                              ? ""
                              : "hidden"
                          }`}
                          onClick={() => {
                            handleClick(false, id, "cancel","","","");
                          }}
                        ></i>
                        <i
                          className="far fa-trash-alt cursor-pointer"
                          onClick={() => {
                            handleClick(false, id, "delete","","","");
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}>
                  <Pagination
                    pageCount={pageCount}
                    pagination={pagination}
                    activePage={activePage}
                    isRemove={isRemove}
                    deleteAll={deleteAll}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={5}>
                  <p className="mt-4 text-1xl text-gray-500 flex justify-end items-end">
                    Showing {mapStart + 1}-
                    {mapEnd > state.response.length
                      ? state.response.length
                      : mapEnd}{" "}
                    Records of {state.response.length}
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
