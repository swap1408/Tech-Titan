// WorkflowPanel.js
import React from "react";

function WorkflowPanel({ onTrigger }) {
  const workflows = [
    "Apply Leave",
    "Create PO",
    "View Inventory",
    "Add Vendor",
  ];

  return (
    <div style={styles.panel}>
      <h3 style={styles.title}>🛠️ Trigger Workflows</h3>
      <div style={styles.buttonContainer}>
        {workflows.map((workflow, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => onTrigger(workflow)}
          >
            {workflow}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  panel: {
    backgroundColor: "#f0f4f8",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    border: "1px solid #ccc",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};

export default WorkflowPanel;
