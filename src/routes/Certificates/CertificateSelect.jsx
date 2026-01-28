import React, { useState, useRef, useEffect } from "react";

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
    <div
      ref={dropdownRef}
      style={{
        position: "relative",
        display: "flex",
        minWidth: 160,
        width: "100%",
        justifyContent: "end",
      }}
    >
      <button
        type="button"
        className="cert-dropdown-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          background: "var(--grey-2)",
          border: "3px solid var(--orange-5)",
          borderRadius: "var(--borderRadius)",
          boxShadow: "0 2px 8px rgba(241, 116, 150, 0.13)",
          color: "var(--pink-8)",
          fontWeight: 600,
          textTransform: "uppercase",
          padding: "0.6em 2.2em 0.6em 1.2em",
          fontSize: "1.08rem",
          cursor: "pointer",
          outline: "none",
          minWidth: 140,
          position: "relative",
        }}
      >
        {selectedTag ? selectedTag : "All Tags"}
        <span
          style={{
            position: "absolute",
            right: 18,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            fontSize: "1.2em",
            color: "var(--orange-5)",
            transition: "transform 0.2s",
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
          style={{
            position: "absolute",
            left: 0,
            top: "110%",
            zIndex: 10,
            background: "#fff",
            border: "2px solid var(--orange-5)",
            borderRadius: "var(--borderRadius)",
            boxShadow: "0 4px 16px rgba(241, 116, 150, 0.13)",
            margin: 0,
            padding: "0.3em 0",
            minWidth: 140,
            listStyle: "none",
          }}
        >
          <li
            role="option"
            aria-selected={selectedTag === ""}
            tabIndex={0}
            onClick={() => handleSelect("")}
            style={{
              padding: "0.6em 1.2em",
              cursor: "pointer",
              fontWeight: selectedTag === "" ? 700 : 500,
              color:
                selectedTag === "" ? "var(--orange-5)" : "var(--darkBerry)",
              background: selectedTag === "" ? "#fff7d6" : "#fff",
              borderBottom: "1px solid #ffe07c",
              outline: "none",
            }}
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
    </div>
  );
};

export default CertificateSelect;
