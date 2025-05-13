
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Eye, Star, Clock } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { title: "Total Posts", value: 12, icon: <FileText className="h-8 w-8 text-hmhy-purple" /> },
    { title: "Published", value: 8, icon: <Eye className="h-8 w-8 text-hmhy-orange" /> },
    { title: "Drafts", value: 4, icon: <Clock className="h-8 w-8 text-gray-500" /> },
    { title: "Featured", value: 2, icon: <Star className="h-8 w-8 text-yellow-500" /> },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Link 
            to="/admin/posts/new" 
            className="px-4 py-2 rounded-md bg-hmhy-purple text-white hover:bg-hmhy-purple-dark"
          >
            New Post
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((post) => (
                <div key={post} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">Blog Post Title {post}</h3>
                    <p className="text-sm text-gray-500">Published on May 1{post}, 2023</p>
                  </div>
                  <Link 
                    to={`/admin/posts/edit/${post}`}
                    className="text-sm text-hmhy-purple hover:underline"
                  >
                    Edit
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
