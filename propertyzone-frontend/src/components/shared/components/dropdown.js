import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ensureArray } from "../../../helper-functions/formater-helper";

export default function CustomDropdown({
  label,
  options = [],
  isLoading = false,
  value,
  onChange,
  name,
  placeholder = "Search...",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef(null);

  const filteredOptions = ensureArray(options)?.filter((item) => item?.label?.toLowerCase()?.includes(searchText?.toLowerCase()));
  const selectedLabel = ensureArray(options)?.find((item) => item?.value === value)?.label || "Select";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown relative" ref={dropdownRef}>
      {label && <label style={{position: "absolute", top: "-28px", left: "6px", fontWeight: "bold", color: "#ff5a3c" }}>{label}</label>}
      <div className="custom-dropdown-toggle" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}} onClick={() => setIsOpen(!isOpen)}>
        <span className="truncate">
          {isLoading ? "Loading..." : selectedLabel}
        </span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && !isLoading && (
        <div className="custom-dropdown-menu">
          <input
            type="text"
            placeholder={placeholder}
            className="custom-dropdown-search"
            value={searchText}
            onChange={(e) => setSearchText(e?.target?.value)}
          />

          <div className="custom-dropdown-list">
            {ensureArray(filteredOptions)?.map((city) => (
              <div key={city?.value} className="custom-dropdown-item" onClick={() => {
                onChange({ target: { name, value: city?.value } });
                setSearchText("");
                setIsOpen(false);
              }}>
                {city?.label}
              </div>
            ))}

            {filteredOptions?.length === 0 && (
              <div className="custom-dropdown-item">No {label} found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
