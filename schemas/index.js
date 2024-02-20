import * as z from "zod";

export const ApplyFormSchema = z.object({
  fullname: z.string({ required_error: "Fullname is required" }),
  gender: z.string({ required_error: "Please select gender." }),
  nationality: z.string({ required_error: "Please select nationality." }),
  city: z.string({ required_error: "Please select city." }),
  residence: z.string({ required_error: "Please select residence." }),
  email: z
    .string({ required_error: "Email is required" })
    .refine((value) => /\S+@\S+\.\S+/.test(value), {
      message: "Invalid email format. Please enter a valid email address.",
    }),
  mobile: z.string({ required_error: "Mobile is required" }),
  dob: z.string({ required_error: "Please select a date." }),
  where: z.string({ required_error: "Please select a value." }),
  university: z.string({ required_error: "Please select a value." }),
  subjectArea: z.string({ required_error: "Please select a value." }),
  destination: z.string({ required_error: "Please select a value." }),
  startDate: z.string({ required_error: "Please select a value." }),
});

export const ContactFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .refine((value) => /\S+@\S+\.\S+/.test(value), {
      message: "Invalid email format. Please enter a valid email address.",
    }),
  phone: z.string({ required_error: "Phone is required" }),
  message: z.string({ required_error: "Message is required" }),
});
