
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Plus, Package, Clock, DollarSign, TrendingUp, MessageCircle } from 'lucide-react';

const Dashboard = () => {
  const [user] = useState({
    name: "Amit Sharma",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    totalEarnings: 45680,
    activeListings: 12,
    totalRentals: 34
  });

  const recentActivity = [
    { id: 1, action: "Rented out", item: "Canon EOS R5 Camera", amount: 2500, date: "2 hours ago" },
    { id: 2, action: "Listed", item: "Mountain Bike", amount: 1200, date: "1 day ago" },
    { id: 3, action: "Earned from", item: "PS5 Gaming Console", amount: 1800, date: "2 days ago" }
  ];

  const quickStats = [
    { label: "Active Listings", value: user.activeListings, icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Total Rentals", value: user.totalRentals, icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Earnings", value: `₹${user.totalEarnings.toLocaleString('en-IN')}`, icon: DollarSign, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Growth", value: "+18%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" }
  ];

  const productsList = [
    { id: 1, name: "iPhone 14 Pro", price: "₹2,500/day", status: "Active" },
    { id: 2, name: "MacBook Pro", price: "₹3,000/day", status: "Active" },
    { id: 3, name: "Canon DSLR", price: "₹1,500/day", status: "Rented" },
    { id: 4, name: "Gaming Setup", price: "₹2,000/day", status: "Active" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Hello, {user.name}!
                </h1>
                <p className="text-gray-600">Ready to share and earn today?</p>
              </div>
            </div>
            
            <div className="hidden sm:flex space-x-3">
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
              <Button variant="outline">
                <MessageCircle className="w-4 h-4 mr-2" />
                Messages
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Bento Grid */}
          <div className="lg:col-span-2 space-y-6">
            {/* Your Listings */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Your Listings</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {productsList.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.price}</p>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {activity.action} {activity.item}
                        </p>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-emerald-600">+₹{activity.amount.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Plus className="w-4 h-4 mr-2" />
                  List New Product
                </Button>
                <Button variant="outline" className="w-full">
                  Browse Products
                </Button>
                <Button variant="outline" className="w-full">
                  Manage Rentals
                </Button>
              </div>
            </Card>

            {/* Recommended Products */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Products</h3>
              <div className="space-y-4">
                {[
                  { name: "Electric Scooter", price: "₹800/day", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=60&h=60&fit=crop" },
                  { name: "DSLR Camera", price: "₹1,500/day", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=60&h=60&fit=crop" },
                  { name: "Yoga Mat Set", price: "₹200/day", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=60&h=60&fit=crop" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
