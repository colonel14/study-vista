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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { Progress } from "./ui/progress";
import toast from "react-hot-toast";

const formSchema = z.object({
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

const steps = [
  {
    num: 1,
    fields: ["fullname", "gender", "nationality", "city", "residence"],
  },
  {
    num: 2,
    fields: ["email", "mobile", "dob", "where"],
  },
  {
    num: 3,
    fields: ["university", "subjectArea", "destination", "startDate"],
  },
];

const porgressMessage = ["First step", "Second step", "Last step"];

function ApplyForm() {
  const [currentStep, setCurrentStep] = useState(1);

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

  const onNext = async () => {
    const fields = steps[currentStep - 1].fields;
    const output = await form.trigger(fields, { shouldFocus: true });

    if (!output) return;
    if (currentStep < steps.length) {
      setCurrentStep((value) => value + 1);
    }
  };

  return (
    <div>
      <div className="progress__bar-wrapper">
        <span
          className="progress__bar-tooltip"
          style={{ "--left": `${currentStep * 33.3333}%` }}
        >
          {porgressMessage[currentStep - 1]}
        </span>
        <Progress value={currentStep * 33.3333} className="progress__bar" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[20px]">
          {currentStep == 1 && (
            <>
              <FormField
                control={form.control}
                name="fullname"
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
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="app__select">
                          <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="input__group">
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="app__select">
                            <SelectValue placeholder="Nationality" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="option1">Option 1</SelectItem>
                              <SelectItem value="option2">Option 2</SelectItem>
                              <SelectItem value="option3">Option 3</SelectItem>
                              <SelectItem value="option4">Option 4</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="app__select">
                            <SelectValue placeholder="City" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="option1">Option 1</SelectItem>
                              <SelectItem value="option2">Option 2</SelectItem>
                              <SelectItem value="option3">Option 3</SelectItem>
                              <SelectItem value="option4">Option 4</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="residence"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="app__select">
                          <SelectValue placeholder="Country of residence" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                            <SelectItem value="option4">Option 4</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <button
                  type="button"
                  className="app__btn app__btn-lg"
                  onClick={onNext}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep == 2 && (
            <>
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
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Mobile number"
                        type="phone"
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
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="date of birth"
                        type="date"
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
                name="where"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="app__select">
                          <SelectValue placeholder="Where did you hear about us?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                            <SelectItem value="option4">Option 4</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <button
                  type="button"
                  className="app__btn app__btn-lg"
                  onClick={onNext}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep == 3 && (
            <>
              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Current university"
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
                name="subjectArea"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="app__select">
                          <SelectValue placeholder="Subject area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                            <SelectItem value="option4">Option 4</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="app__select">
                          <SelectValue placeholder="preferred destinations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                            <SelectItem value="option4">Option 4</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="app__select">
                          <SelectValue placeholder="when do you want to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                            <SelectItem value="option4">Option 4</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <button type="submit" className="app__btn app__btn-lg">
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </Form>
    </div>
  );
}

export default ApplyForm;
