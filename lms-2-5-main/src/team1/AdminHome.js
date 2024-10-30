import React from 'react';
import { FaUsers, FaCog, FaSignOutAlt, FaClock, FaFileAlt, FaUser } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center border border-gray-700">
    <Icon className="text-4xl text-blue-400 mb-4" size={32} />
    <div className="text-3xl font-bold mb-2 text-white">{value}</div>
    <div className="text-gray-400 text-lg">{label}</div>
  </div>
);

const AdminHome = () => {
  const salesData = [
    { name: 'Админ', value: 20 },
    { name: 'Багш', value: 3000 },
    { name: 'Оюутан', value: 40000 }
  ];

  const userActivityData = [
    { name: 'Идэвхтэй', value: 12000 },
    { name: 'Идэвхгүй', value: 8000 },
    { name: 'Шинэ', value: 4500 }
  ];

  const revenueData = [
    { name: 'МУИС', value: 7200 },
    { name: 'ШУТИС', value: 8100 },
    { name: 'АШУҮИС', value: 3800 },
    { name: 'ХААИС', value: 2600 },
    { name: 'СЭЗИС', value: 5400 }
  ];

  const chartConfigs = [
    { data: salesData, title: 'Хэрэглэгчдийн ангилал', color: '#60A5FA' },
    { data: userActivityData, title: 'Хэрэглэгчийн идэвх', color: '#34D399' },
    { data: revenueData, title: 'Шалгалтын тоо', color: '#FBBF24' }
  ];

  const stats = [
    { icon: FaUser, value: '40,000', label: 'Нийт хэрэглэгч' },
    { icon: FaClock, value: '123.50 минут', label: 'Зарцуулсан дундаж хугацаа' },
    { icon: FaFileAlt, value: '50,000', label: 'Нийт шалгалт' }
  ];

  return (
    <div style={{marginTop:'300px'}}>
    <div className="flex min-h-screen bg-gray-900">
      {/* Side Menu */}
      <div className="w-64 bg-gray-800 shadow-lg border-r border-gray-700">
        <div className="flex flex-col h-full">
          <div className="p-4 space-y-2">
            <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors">
              <FaUsers className="text-gray-400" size={20} />
              <span>Хэрэглэгчийн жагсаалт</span>
            </button>
            <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors">
              <FaUsers className="text-gray-400" size={20} />
              <span>Хэрэглэгчийн төрөл удирдах</span>
            </button>
            <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors">
              <FaCog className="text-gray-400" size={20} />
              <span>Асуултын төрөл удирдах</span>
            </button>
            <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors">
              <FaCog className="text-gray-400" size={20} />
              <span>Асуултын түвшин удирдах</span>
            </button>
          </div>
          <div className="mt-auto p-4">
            <button className="w-full flex items-center space-x-2 p-2 text-red-400 hover:bg-red-900/50 rounded-lg transition-colors">
              <FaSignOutAlt size={20} />
              <span>Гарах</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-700">
            <img 
              src="https://cdn-icons-png.freepik.com/256/6024/6024190.png?semt=ais_hybrid" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chartConfigs.map((chart, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-white">{chart.title}</h3>
              <BarChart width={350} height={300} data={chart.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '6px',
                    color: '#fff'
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" fill={chart.color} />
              </BarChart>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminHome;
