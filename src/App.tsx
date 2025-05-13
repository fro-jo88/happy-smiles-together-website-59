
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Organization from "./pages/Organization";
import Team from "./pages/Team";
import ElvisStory from "./pages/ElvisStory";
import Programs from "./pages/Programs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import DonorDashboard from "./pages/DonorDashboard";
import NotFound from "./pages/NotFound";

// Admin Routes
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminPosts from "./pages/Admin/Posts";
import AdminPostForm from "./pages/Admin/PostForm";
import AdminMedia from "./pages/Admin/Media";
import AdminSettings from "./pages/Admin/Settings";
import AdminLogin from "./pages/Admin/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <Index />
              </main>
              <Footer />
            </div>
          } />
          
          <Route path="/" element={
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/organization" element={<Organization />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/elvis-story" element={<ElvisStory />} />
                  <Route path="/programs" element={<Programs />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/donor-dashboard" element={<DonorDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/posts" element={<AdminPosts />} />
          <Route path="/admin/posts/new" element={<AdminPostForm />} />
          <Route path="/admin/posts/edit/:id" element={<AdminPostForm />} />
          <Route path="/admin/media" element={<AdminMedia />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
