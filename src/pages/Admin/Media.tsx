
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Download, Link } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Media = () => {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b', name: 'mountains.jpg', size: '1.2 MB', date: 'May 12, 2023' },
    { id: 2, url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843', name: 'forest.jpg', size: '890 KB', date: 'June 3, 2023' },
    { id: 3, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', name: 'foggy-mountain.jpg', size: '1.5 MB', date: 'July 15, 2023' },
    { id: 4, url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7', name: 'woman-laptop.jpg', size: '950 KB', date: 'August 22, 2023' },
    { id: 5, url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', name: 'woman-working.jpg', size: '1.1 MB', date: 'Sep 5, 2023' },
    { id: 6, url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22', name: 'countryside.jpg', size: '1.3 MB', date: 'Oct 18, 2023' },
  ];

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Here you would typically upload the files to your backend
      toast({
        title: "Files uploaded",
        description: `${files.length} file(s) have been uploaded.`,
      });
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: "URL copied",
      description: "Image URL has been copied to clipboard.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Media Library</h1>
          <label 
            htmlFor="file-upload"
            className="px-4 py-2 rounded-md bg-hmhy-purple text-white hover:bg-hmhy-purple-dark cursor-pointer"
          >
            Upload Media
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleUpload}
            />
          </label>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Image Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div 
                  key={image.id} 
                  className="border rounded-lg overflow-hidden group relative"
                >
                  <div className="aspect-square">
                    <img 
                      src={image.url} 
                      alt={image.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="p-2">
                    <p className="font-medium truncate">{image.name}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{image.size}</span>
                      <span>{image.date}</span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => copyToClipboard(image.url)}
                        className="p-2 bg-white rounded-full"
                      >
                        <Link className="h-5 w-5 text-hmhy-purple" />
                      </button>
                      <a 
                        href={image.url} 
                        download
                        className="p-2 bg-white rounded-full"
                      >
                        <Download className="h-5 w-5 text-hmhy-orange" />
                      </a>
                      <button 
                        className="p-2 bg-white rounded-full"
                      >
                        <Trash2 className="h-5 w-5 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Media;
