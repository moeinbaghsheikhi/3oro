"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ButtonPrimary } from "@/components/ui/button-primary";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const persianPhoneRegex = /^09[0-9]{9}$/; // Basic Iranian mobile number regex

const formSchema = z.object({
  name: z.string().min(2, { message: "نام باید حداقل ۲ حرف باشد." }),
  email: z.string().email({ message: "ایمیل معتبر وارد کنید." }),
  phone: z.string().regex(persianPhoneRegex, { message: "شماره تلفن همراه معتبر وارد کنید (مثال: 09123456789)." }),
  companyName: z.string().optional(),
  industry: z.string({ required_error: "انتخاب صنعت الزامی است." }),
  message: z.string().min(10, { message: "پیام باید حداقل ۱۰ حرف باشد." }).max(500, { message: "پیام نمی‌تواند بیشتر از ۵۰۰ حرف باشد." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  industries: { value: string; label: string }[];
}

export function ContactForm({ industries }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      industry: undefined,
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    toast({
      title: "پیام شما ارسال شد!",
      description: "از تماس شما سپاسگزاریم. کارشناسان ما به زودی با شما تماس خواهند گرفت.",
      variant: "default",
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام و نام خانوادگی</FormLabel>
              <FormControl>
                <Input placeholder="مثال: علی رضایی" {...field} className="bg-input text-foreground placeholder:text-muted-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ایمیل</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@domain.com" {...field} className="bg-input text-foreground placeholder:text-muted-foreground text-left" dir="ltr" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تلفن همراه</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" {...field} className="bg-input text-foreground placeholder:text-muted-foreground text-left" dir="ltr" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام شرکت (اختیاری)</FormLabel>
                <FormControl>
                  <Input placeholder="مثال: شرکت نوآوران فردا" {...field} className="bg-input text-foreground placeholder:text-muted-foreground" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>صنعت</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-input text-foreground">
                      <SelectValue placeholder="صنعت خود را انتخاب کنید" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-popover text-popover-foreground">
                    {industries.map((industry) => (
                      <SelectItem key={industry.value} value={industry.value}>
                        {industry.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>پیام شما</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="لطفا درخواست یا سوال خود را اینجا بنویسید..."
                  className="resize-y min-h-[120px] bg-input text-foreground placeholder:text-muted-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonPrimary type="submit" className="w-full" disabled={isSubmitting} aria-label="ارسال پیام">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              در حال ارسال...
            </>
          ) : (
            "ارسال پیام"
          )}
        </ButtonPrimary>
      </form>
    </Form>
  );
}
