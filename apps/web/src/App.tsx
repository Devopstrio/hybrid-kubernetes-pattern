import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ExecutiveDashboard from './pages/ExecutiveDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">This module is currently being provisioned. Please check back shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ExecutiveDashboard />} />
          <Route path="/clusters" element={<Placeholder name="Cluster Fleet Manager" />} />
          <Route path="/workloads" element={<Placeholder name="Workload Deployment Center" />} />
          <Route path="/policies" element={<Placeholder name="Governance & Policy Center" />} />
          <Route path="/analytics" element={<Placeholder name="Performance Analytics" />} />
          <Route path="/console" element={<Placeholder name="Global Terminal" />} />
          <Route path="/settings" element={<Placeholder name="Platform Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
