
"use client";

import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, XCircle } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, onError }) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) {
      console.error("Form is not yet initialized.");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );

      console.log(result.text);
      setIsSuccess(true);
      setIsError(false);
      if (onSuccess) {
        onSuccess();
      }
      // Reset the form fields
      form.current.reset();
    } catch (error: any) {
      console.error(error);
      setIsSuccess(false);
      setIsError(true);
      if (onError) {
        onError(error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      {isSuccess && (
        <Alert variant="default">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Your message has been sent successfully.</AlertDescription>
        </Alert>
      )}
      {isError && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>There was an error sending your message. Please try again.</AlertDescription>
        </Alert>
      )}
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required className="w-full" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required className="w-full" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={4} required className="w-full" />
        </div>
        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/80">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

    