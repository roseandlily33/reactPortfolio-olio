import React from "react";

const CertificateSelect = ({ tagChange, selectedTag, filteredTags }) => {
  return (
    <select onChange={tagChange} value={selectedTag}>
      <option value="">All Tags</option>
      {filteredTags?.map((tag, index) => {
        return (
          <option key={index} value={tag}>
            {tag}
          </option>
        );
      })}
    </select>
  );
};

export default CertificateSelect;
