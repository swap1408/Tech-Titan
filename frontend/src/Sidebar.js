// Sidebar.js
import React from "react";

function Sidebar({ selected, onSelect }) {
  const sections = ["Chat", "HR", "Procurement", "Inventory", "Vendors"];

  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>📁 Modules</h3>
      {sections.map((item, index) => (
        <div
          key={index}
          onClick={() => onSelect(item)}
          style={{
            ...styles.item,
            backgroundColor: selected === item ? "#007bff" : "#f0f0f0",
            color: selected === item ? "#fff" : "#333",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRight: "1px solid #ddd",
    height: "100%",
    borderRadius: "10px 0 0 10px",
  },
  title: {
    marginBottom: "10px",
    fontSize: "16px",
    color: "#333",
  },
  item: {
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.2s",
  },
};

export default Sidebar;
