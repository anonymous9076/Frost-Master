// components/SubCategoryDropdown.jsx

"use client";

import { Listbox } from "@headlessui/react";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

interface Titles {
  name: string;
  _id: string;
}
interface Props {
  subCategoriesProp: Titles[];
  title: string;
  onRequestDelete: (id: string) => void;
  onAddMore: () => void;
}

export default function SubCategoryDropdown({
  subCategoriesProp,
  title,
  onAddMore,
  onRequestDelete,
}: Props) {
  const [selected, setSelected] = useState<Titles | null>(null);

  const handleDelete = (id: string) => {
  onRequestDelete(id); 
};

  return (
    <div className="w-full max-w-md ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="w-full p-2 border border-gray-400 rounded-lg text-left bg-white">
            {selected?.name || `Select ${title}`}
          </Listbox.Button>

          <Listbox.Options className="absolute w-full mt-1 max-h-60 overflow-auto bg-white border border-gray-300 rounded-lg shadow-md z-40">
            {subCategoriesProp.map((category) => (
              <Listbox.Option
                key={category._id}
                value={category}
                className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <span>{category.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(category._id);
                  }}
                  title={`Delete ${category.name}`}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdDelete className="w-4 h-4" />
                </button>
              </Listbox.Option>
            ))}

            <Listbox.Option
              value="addMore"
              className="px-3 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 font-medium"
              onClick={(e) => {
                e.stopPropagation();
                onAddMore();
              }}
            >
              + Add More
            </Listbox.Option>
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
