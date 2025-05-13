
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Settings, 
  LogOut
} from 'lucide-react';
import { Button } from './ui/button';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-hmhy-purple-light text-hmhy-purple' : '';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
            <div className="px-4 pb-4 border-b">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747121083/logo_q6v8po.webp" 
                  alt="HappyMeHappyYou" 
                  className="h-8 mr-2" 
                />
                <span className="font-semibold">Admin</span>
              </Link>
            </div>
            <div className="flex flex-col flex-grow px-4 mt-5">
              <nav className="flex-1 space-y-1">
                <Link 
                  to="/admin" 
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive('/admin')}`}
                >
                  <LayoutDashboard className="mr-3 h-5 w-5" />
                  Dashboard
                </Link>
                <Link 
                  to="/admin/posts" 
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive('/admin/posts')}`}
                >
                  <FileText className="mr-3 h-5 w-5" />
                  Posts
                </Link>
                <Link 
                  to="/admin/media" 
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive('/admin/media')}`}
                >
                  <Image className="mr-3 h-5 w-5" />
                  Media
                </Link>
                <Link 
                  to="/admin/settings" 
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive('/admin/settings')}`}
                >
                  <Settings className="mr-3 h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </div>
            <div className="px-4 pb-5">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/">
                  <LogOut className="mr-3 h-5 w-5" />
                  Exit Admin
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Mobile Header */}
          <div className="md:hidden border-b bg-white p-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747121083/logo_q6v8po.webp" 
                  alt="HappyMeHappyYou" 
                  className="h-8 mr-2" 
                />
                <span className="font-semibold">Admin</span>
              </Link>
              <Button variant="outline" size="sm">
                Menu
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
