// Example API functions for workflow management
export async function fetchWorkflows() {
  // Replace with real API endpoint
  return [
    { id: 1, name: 'Sample Workflow', description: 'A test workflow', status: 'created' }
  ];
}

export async function createWorkflow(data) {
  // Replace with real API endpoint
  return { id: Math.random(), ...data, status: 'created' };
}

export async function fetchWorkflowHistory(workflowId) {
  // Replace with real API endpoint
  return [
    { status: 'created', timestamp: '2024-08-12 10:00:00' },
    { status: 'running', timestamp: '2024-08-12 10:05:00' },
    { status: 'completed', timestamp: '2024-08-12 10:10:00' }
  ];
}