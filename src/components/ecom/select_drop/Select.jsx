"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import styles from "./select.module.scss";
import { quicksand } from "@/app/layout";


const Select = ({ SelectData, placeholder, remain }) => {
  const [country, setCountry] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectedItem, setSelectedItem] = useState(placeholder);
  const [listData, setListData] = useState(SelectData);
  // const [listData1, setListData1] = useState(SelectData || []); // Provide a default value of an empty array
  const componentRef = useRef();
  const closeSelect = (index, title) => {
    setIsOpen(false);
    setSelectedItem(title);
    setCountry(title);
  };
  useEffect(() => {
    localStorage.setItem("location", country ? country : 'Pakistan');
  }, [country]);
  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const openSelect = () => {
    setListData(SelectData);
    setIsOpen(!isOpen);
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filterArrayData = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredList = SelectData.filter((item) => {
      const itm = String(item);
      return itm.toLowerCase().includes(keyword);
    });
    setListData(filteredList);
  };

  return (
    <div
      className={styles.headerSearch}
      ref={componentRef}
      onClick={openSelect}
    >
      <p>
        {isSelectedItem?.length > 16
          ? isSelectedItem.substr(0, 12) + "..."
          : isSelectedItem}
        <ArrowDropDown />
      </p>
      {isOpen && (
        <div
          className={`${quicksand.variable} ${
            placeholder === "All categories"
              ? styles.main_dropdown
              : styles.countryWrapper
          }`}
        >
          {remain === true ? (
            <input
              type="text"
              placeholder="Select Country ..."
              className={styles.input}
              onClick={handleInputClick}
              onChange={(e) => filterArrayData(e)}
            />
          ) : (
            ""
          )}
          <div className={styles.selectDrop}>
            <div className={styles.searchField}>
              <ul>
                {listData &&
                  listData.map((data, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        closeSelect(
                          data.id ? data.id : data,
                          data.title ? data.title : data
                        )
                      }
                    >
                      {data.title ? data.title : data}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
