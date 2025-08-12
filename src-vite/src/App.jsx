import React, { useEffect, useState } from 'react';
import LogViewer from './components/LogViewer';
import WorkflowForm from './components/WorkflowForm';
import WorkflowHistory from './components/WorkflowHistory';
import WorkflowStatus from './components/WorkflowStatus';
import { fetchWorkflows, createWorkflow, fetchWorkflowHistory } from './api';

function App() {
  const [workflows, setWorkflows] = useState([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [logs, setLogs] = useState('');
  const [history, setHistory] = useState([]);
  const [status, setStatus] = useState('N/A');

  useEffect(() => {
    fetchWorkflows().then(setWorkflows);
  }, []);

  useEffect(() => {
    if (selectedWorkflow) {
      fetchWorkflowHistory(selectedWorkflow.id).then(setHistory);
      setStatus(selectedWorkflow.status);
      setLogs(`Viewing logs for workflow: ${selectedWorkflow.name}`);
    } else {
      setHistory([]);
      setStatus('N/A');
      setLogs('');
    }
  }, [selectedWorkflow]);

  const handleWorkflowCreate = async (data) => {
    const workflow = await createWorkflow(data);
    setWorkflows((prev) => [...prev, workflow]);
    setSelectedWorkflow(workflow);
    setLogs(`Created new workflow: ${workflow.name}`);
  };

  return (
    <div>
      <h1>Workflow Management</h1>

      <section>
        <h2>Existing Workflows</h2>
        <ul>
          {workflows.map((wf) => (
            <li key={wf.id}>
              <button onClick={() => setSelectedWorkflow(wf)} style={{ marginRight: 10 }}>
                Select
              </button>
              {wf.name} ({wf.status})
            </li>
          ))}
        </ul>
      </section>

      {selectedWorkflow && (
        <div>
          <LogViewer logs={logs} />
          <WorkflowStatus status={status} />
          <WorkflowHistory history={history} />
        </div>
      )}
    </div>
  );
}

export default App;