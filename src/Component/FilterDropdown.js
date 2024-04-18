import React, { useState, useEffect } from "react";
import "./product.css";

function FilterDropdown({ title, availableFilters, defaultFilters }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [filters, setFilters] = useState(
    defaultFilters || [...availableFilters]
  ); // Set initial state with default filters
  const [allSelected, setAllSelected] = useState(true); // Initially all filters are selected

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle filter selection
  const toggleFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const handleSelectAll = () => {
    if (filters.length > 0) {
      setFilters([]);
      setAllSelected(false);
    } else {
      setFilters(availableFilters); // Select all filters
      setAllSelected(true);
    }
  };

  useEffect(() => {
    if (filters.length === availableFilters.length) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  }, [filters]);

  return (
    <>
      <div className="button-one-self desktop-only">
        <div>
          <div className="dropdown-header" onClick={toggleDropdown}>
            <label className="label-dropdown">{title}</label>
            <button className="up-down-butoon">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M12 8.59l-6.29 6.3-1.42-1.42L12 5.46l7.71 7.71-1.42 1.42z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M12 15.41L18.29 9.12l1.42 1.42L12 18.25l-7.71-7.71 1.42-1.42z" />
                </svg>
              )}
            </button>
          </div>
          <div>
            {filters.length > 0 &&
            filters.length !== availableFilters.length ? (
              <div>
                <span>{filters.join(", ")}</span>
              </div>
            ) : filters.length === availableFilters.length ? (
              <div>
                <span>All</span>
              </div>
            ) : null}
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <div>
                <button
                  className="unselect-all-button"
                  style={{
                    color: filters.length === 0 ? "#BFC8CD" : "#000",
                    textDecoration: "underline",
                    border: "none",
                    background: "none",
                    cursor: filters.length === 0 ? "not-allowed" : "pointer",
                  }}
                  onClick={handleSelectAll}
                  disabled={filters.length === 0}
                >
                  Unselect all
                </button>
              </div>
              <div className="checkbox-container">
                {availableFilters.map((filter) => (
                  <div className="checkbox-option" key={filter}>
                    <input
                      type="checkbox"
                      id={filter}
                      value={filter}
                      checked={filters.includes(filter)}
                      onChange={() => toggleFilter(filter)}
                    />
                    <label htmlFor={filter}>{filter}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}

export default FilterDropdown;
