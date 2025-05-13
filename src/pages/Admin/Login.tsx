
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, we're using a simple check
    // In a real app, this would validate against a backend
    if (credentials.username === 'admin' && credentials.password === 'password') {
      // Set auth state or token here in a real app
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard.",
      });
      navigate('/admin');
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password. For demo, use admin/password.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747121083/logo_q6v8po.webp" 
            alt="HappyMeHappyYou" 
            className="h-12 mx-auto mb-4" 
          />
          <h1 className="text-2xl font-bold text-hmhy-purple">Admin Login</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-hmhy-purple hover:bg-hmhy-purple-dark"
              >
                Sign In
              </Button>
              
              <div className="text-center text-sm text-gray-500">
                <p>For demo: Username: admin, Password: password</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
