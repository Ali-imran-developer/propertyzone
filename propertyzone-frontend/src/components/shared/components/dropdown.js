import { useState, useEffect, useRef } from "react";

export default function CityDropdown({ citiesOptions = [], isLoading, value, onChange, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef(null);

  const filteredCities = citiesOptions.filter((city) =>
    city.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const selectedLabel = citiesOptions.find((city) => city.value === value)?.label || "Select City";

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
    <div className="custom-dropdown" ref={dropdownRef}>
      <div
        className="custom-dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isLoading ? "Loading Cities..." : selectedLabel}
      </div>

      {isOpen && !isLoading && (
        <div className="custom-dropdown-menu">
          <input
            type="text"
            placeholder="Search city..."
            className="custom-dropdown-search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <div className="custom-dropdown-list">
            {filteredCities.map((city) => (
              <div
                key={city.value}
                className="custom-dropdown-item"
                onClick={() => {
                  onChange({ target: { name, value: city.value } });
                  setSearchText("");
                  setIsOpen(false);
                }}
              >
                {city.label}
              </div>
            ))}

            {filteredCities.length === 0 && (
              <div className="custom-dropdown-item">No cities found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
