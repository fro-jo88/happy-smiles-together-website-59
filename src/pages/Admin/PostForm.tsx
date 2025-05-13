
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Save, X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== 'new';
  
  const [formData, setFormData] = useState({
    title: isEditing ? "Sample Blog Post Title" : "",
    slug: isEditing ? "sample-blog-post" : "",
    excerpt: isEditing ? "This is a sample excerpt for this blog post." : "",
    content: isEditing ? "Sample content for this blog post. Replace with your content." : "",
    featuredImage: isEditing ? "https://images.unsplash.com/photo-1501854140801-50d01698950b" : "",
    author: isEditing ? "Elvis Otieno" : "",
    category: isEditing ? "Community" : "",
    status: isEditing ? "published" : "draft"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    setFormData({
      ...formData,
      slug
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: `Post ${isEditing ? 'updated' : 'created'} successfully`,
      description: `"${formData.title}" has been ${isEditing ? 'updated' : 'saved'} as ${formData.status}.`,
    });
    
    navigate('/admin/posts');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload the file to your server or storage
      // For demo purposes, we're just creating a local URL
      const imageUrl = URL.createObjectURL(file);
      setFormData({
        ...formData,
        featuredImage: imageUrl
      });
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{isEditing ? 'Edit Post' : 'Create New Post'}</h1>
          <div className="space-x-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/admin/posts')}
            >
              <X className="mr-2 h-4 w-4" /> Cancel
            </Button>
            <Button 
              onClick={() => setFormData({...formData, status: 'draft'})} 
              variant="secondary"
            >
              <Save className="mr-2 h-4 w-4" /> Save Draft
            </Button>
            <Button 
              onClick={() => setFormData({...formData, status: 'published'})} 
              className="bg-hmhy-purple hover:bg-hmhy-purple-dark"
            >
              <Check className="mr-2 h-4 w-4" /> Publish
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Post Title</Label>
                  <Input 
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter post title"
                    required
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="slug">URL Slug</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        placeholder="post-url-slug"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={generateSlug}
                      >
                        Generate
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="author">Author</Label>
                    <Input 
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      placeholder="Author name"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="">Select Category</option>
                      <option value="Community">Community</option>
                      <option value="Education">Education</option>
                      <option value="Health">Health</option>
                      <option value="Water">Water</option>
                      <option value="Food Security">Food Security</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="status">Status</Label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea 
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    placeholder="Brief summary of the post (appears in previews)"
                    rows={2}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea 
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Write your blog post content here"
                    rows={10}
                  />
                  <p className="text-sm text-gray-500">
                    For a full rich text editor, integrate a third-party editor like TinyMCE or React Quill.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Label htmlFor="featuredImage">Featured Image</Label>
                
                {formData.featuredImage && (
                  <div className="mb-4">
                    <img 
                      src={formData.featuredImage} 
                      alt="Featured" 
                      className="w-full max-h-60 object-cover rounded-md" 
                    />
                  </div>
                )}

                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="featuredImage"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input 
                      id="featuredImage" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageUpload} 
                    />
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/admin/posts')}
            >
              <X className="mr-2 h-4 w-4" /> Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-hmhy-purple hover:bg-hmhy-purple-dark"
            >
              {isEditing ? 'Update Post' : 'Create Post'}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default PostForm;
