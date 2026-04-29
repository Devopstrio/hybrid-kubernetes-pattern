import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Activity,
  ArrowUpRight,
  TrendingDown
} from 'lucide-react';

const clusterData = [
  { name: 'AWS EKS', value: 45, color: '#8b5cf6' },
  { name: 'Azure AKS', value: 30, color: '#a78bfa' },
  { name: 'On-Prem', value: 15, color: '#c4b5fd' },
  { name: 'Edge', value: 10, color: '#ddd6fe' },
];

const resourceData = [
  { time: '00:00', cpu: 45, mem: 60 },
  { time: '04:00', cpu: 55, mem: 65 },
  { time: '08:00', cpu: 75, mem: 80 },
  { time: '12:00', cpu: 65, mem: 75 },
  { time: '16:00', cpu: 85, mem: 90 },
  { time: '20:00', cpu: 50, mem: 70 },
];

const KPI_CARDS = [
  { title: 'Total Clusters', value: '124', trend: '+4', color: 'violet', icon: Cpu },
  { title: 'Total Nodes', value: '1,842', trend: '+124', color: 'indigo', icon: Layers },
  { title: 'Compliant Clusters', value: '98%', trend: '+2.5%', color: 'emerald', icon: ShieldCheck },
  { title: 'Avg Uptime', value: '99.98%', trend: '-0.01%', color: 'amber', icon: Activity },
];

const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Hybrid Fleet Overview</h1>
          <p className="text-slate-400">Unified governance across all Kubernetes distributions.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Refresh Data
          </button>
          <button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Deploy New Cluster
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${card.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {card.trend.startsWith('+') ? <ArrowUpRight size={14} /> : <TrendingDown size={14} />}
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fleet Distribution */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl lg:col-span-1">
          <h3 className="text-lg font-bold text-white mb-6">Fleet Distribution</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={clusterData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {clusterData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {clusterData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-400">{item.name}</span>
                </div>
                <span className="text-white font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Resource Usage */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl lg:col-span-2">
          <h3 className="text-lg font-bold text-white mb-6">Global Resource Utilization</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={resourceData}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="cpu" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorCpu)" name="CPU Usage" />
                <Area type="monotone" dataKey="mem" stroke="#a78bfa" strokeWidth={2} fillOpacity={0} name="Memory Usage" strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
