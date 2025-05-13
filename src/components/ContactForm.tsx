
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    console.log('Form data:', data);
    
    // Add a small delay to simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "We will get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-medium">
            Your Name
          </label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="John Doe"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium">
            Your Email
          </label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address"
              }
            })}
            placeholder="john@example.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="block font-medium">
          Subject
        </label>
        <Input
          id="subject"
          {...register("subject", { required: "Subject is required" })}
          placeholder="How can we help you?"
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block font-medium">
          Message
        </label>
        <Textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          placeholder="Tell us more about your inquiry..."
          className={`min-h-32 ${errors.message ? "border-red-500" : ""}`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="bg-hmhy-green hover:bg-hmhy-green-dark w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
