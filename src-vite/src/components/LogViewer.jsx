import React from 'react';

const LogViewer = ({ logs }) => (
  <div>
    <h2>Logs</h2>
    <ul>{logs.map((log, index) => (<li key={index}>{log}</li>))}</ul>
  </div>
);

export default LogViewer;