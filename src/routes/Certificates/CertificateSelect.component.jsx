import React, { useState, useRef, useEffect } from "react";
import { CertificateSelectContainer } from "./Certificates.styles";
const CertificateSelect = ({ tagChange, selectedTag, filteredTags }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (tag) => {
    tagChange({ target: { value: tag } });
    setOpen(false);
  };

  return (
    <CertificateSelectContainer
      ref={dropdownRef}
    >
      <button
        type="button"
        className="cert-dropdown-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {selectedTag ? selectedTag : "All Tags"}
        <span
          style={{
            ...(open ? { transform: "translateY(-50%) rotate(180deg)" } : {}),
          }}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      {open && (
        <ul
          className="cert-dropdown-list"
          role="listbox"
        >
          <li
            role="option"
            aria-selected={selectedTag === ""}
            tabIndex={0}
            onClick={() => handleSelect("")}
            onKeyDown={(e) => (e.key === "Enter" ? handleSelect("") : null)}
          >
            All Tags
          </li>
          {filteredTags?.map((tag, index) => (
            <li
              key={tag}
              role="option"
              aria-selected={selectedTag === tag}
              tabIndex={0}
              onClick={() => handleSelect(tag)}
              style={{
                padding: "0.6em 1.2em",
                cursor: "pointer",
                fontWeight: selectedTag === tag ? 700 : 500,
                color:
                  selectedTag === tag ? "var(--orange-5)" : "var(--darkBerry)",
                background: selectedTag === tag ? "#fff7d6" : "#fff",
                borderBottom:
                  index === filteredTags.length - 1
                    ? "none"
                    : "1px solid #ffe07c",
                outline: "none",
              }}
              onKeyDown={(e) => (e.key === "Enter" ? handleSelect(tag) : null)}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </CertificateSelectContainer>
  );
};

export default CertificateSelect;
