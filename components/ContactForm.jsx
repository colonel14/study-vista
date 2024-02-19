"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .refine((value) => /\S+@\S+\.\S+/.test(value), {
      message: "Invalid email format. Please enter a valid email address.",
    }),
  phone: z.string({ required_error: "Phone is required" }),
  message: z.string({ required_error: "Message is required" }),
});

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    // defaultValues: {
    //   fullname: "",
    //   gender: "",
    //   nationality: "",
    //   city: "",
    //   residence: "",
    //   email: "",
    //   mobile: "",
    //   dob: "",
    //   where: "",
    //   university: "",
    //   subjectArea: "",
    //   destination: "",
    //   startDate: "",
    // },
  });

  function onSubmit(values) {
    toast.success("Submitted Successfully");
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[20px]">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Full name"
                    {...field}
                    className="app__input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="app__input"
                  />
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
                <FormControl>
                  <Input
                    placeholder="Phone"
                    {...field}
                    className="app__input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="app__input min-h-[300px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-center"></div>
          <button type="submit" className="app__btn app__btn-lg">
            Send
          </button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
