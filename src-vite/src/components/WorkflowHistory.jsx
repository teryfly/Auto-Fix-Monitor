import React from 'react';

const WorkflowHistory = ({ history }) => (
  <div>
    <h2>Workflow History</h2>
    <ul>
      {history.map((item, idx) => (
        <li key={idx}>
          {item.status} at {item.timestamp}
        </li>
      ))}
    </ul>
  </div>
);

export default WorkflowHistory;