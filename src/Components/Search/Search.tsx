import React from 'react'

import { useSearch } from "../../hooks";
export const Search = () => {
    const { search } = useSearch();
    return (
        <div className="flex w-full  items-center justify-center  p-4">
            <div className="border w-full p-4 ">
                <input
                    type="search"
                    placeholder="Search by name,email or role"
                    className="w-full text-center border-none focus:outline-none focus:placeholder-black focus:border-black"
                    onChange={(e) => {
                        search(e.target.value);
                      }}
                />
            </div>
        </div>
    );
};
