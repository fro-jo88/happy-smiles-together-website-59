
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, EyeOff, Pencil, Trash2, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/AdminLayout';

const Posts = () => {
  const posts = [
    { id: 1, title: "Getting Started with HappyMeHappyYou", excerpt: "Learn about our mission and how we're making a difference in Western Kenya...", author: "Elvis Otieno", date: "May 12, 2023", status: "Published" },
    { id: 2, title: "How Water Filters Change Lives", excerpt: "Access to clean water is transforming communities and improving health outcomes...", author: "Sarah Johnson", date: "June 3, 2023", status: "Published" },
    { id: 3, title: "Volunteer Stories: A Week in Kenya", excerpt: "Follow the journey of our volunteers as they work alongside local communities...", author: "Michael Chen", date: "July 15, 2023", status: "Published" },
    { id: 4, title: "Education Initiatives Update", excerpt: "Our scholarship program has helped over 50 students continue their education...", author: "Elvis Otieno", date: "August 22, 2023", status: "Draft" },
    { id: 5, title: "Community Spotlight: Kakamega", excerpt: "Meet the families and children we're working with in the Kakamega region...", author: "Lisa Wanjiku", date: "September 5, 2023", status: "Draft" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manage Posts</h1>
          <Link 
            to="/admin/posts/new" 
            className="px-4 py-2 rounded-md bg-hmhy-purple text-white hover:bg-hmhy-purple-dark"
          >
            New Post
          </Link>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full px-4 py-2 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hmhy-purple focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          <select className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hmhy-purple focus:border-transparent">
            <option value="all">All</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2 font-medium">Title</th>
                    <th className="pb-2 font-medium hidden md:table-cell">Author</th>
                    <th className="pb-2 font-medium hidden md:table-cell">Date</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td className="py-4">
                        <div>
                          <p className="font-medium">{post.title}</p>
                          <p className="text-sm text-gray-500 md:hidden">{post.author} · {post.date}</p>
                        </div>
                      </td>
                      <td className="py-4 hidden md:table-cell">{post.author}</td>
                      <td className="py-4 hidden md:table-cell">{post.date}</td>
                      <td className="py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex space-x-2">
                          <Link to={`/admin/posts/edit/${post.id}`} className="text-gray-500 hover:text-hmhy-purple">
                            <Pencil className="h-5 w-5" />
                            <span className="sr-only">Edit</span>
                          </Link>
                          <button className="text-gray-500 hover:text-hmhy-orange">
                            {post.status === 'Published' ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                            <span className="sr-only">
                              {post.status === 'Published' ? 'Unpublish' : 'Publish'}
                            </span>
                          </button>
                          <button className="text-gray-500 hover:text-red-500">
                            <Trash2 className="h-5 w-5" />
                            <span className="sr-only">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Posts;
