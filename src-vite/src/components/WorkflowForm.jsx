import React, { useState } from 'react';

const WorkflowForm = ({ onSubmit }) => {
  const [workflowData, setWorkflowData] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    setWorkflowData({ ...workflowData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workflowData.name.trim()) {
      onSubmit(workflowData);
      setWorkflowData({ name: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={workflowData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={workflowData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Create Workflow</button>
    </form>
  );
};

export default WorkflowForm;