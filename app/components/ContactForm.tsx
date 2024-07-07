"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

const defaultValues: ContactFormType = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormType>({
    defaultValues: defaultValues,
  });

  const validation = {
    name: {
      required: "Name is required",
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Email is invalid",
      },
    },
    message: {
      required: "Message is required",
    },
  };

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    console.log(data);
  };
  return (
    <div className="mx-auto max-w-xl p-4">
      <h2 className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100">
        Contact
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>
          <input
            type="text"
            placeholder="Name"
            autoComplete="off"
            {...register("name", { required: validation.name.required })}
            className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
          {errors.name && (
            <span className="text-pink-700 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            {...register("email", {
              required: validation.email.required,
              pattern: validation.email.pattern,
            })}
            className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
          {errors.email && (
            <span className="text-pink-700 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <textarea
            placeholder="Message"
            autoComplete="off"
            rows={4}
            {...register("message", { required: validation.message.required })}
            className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
          {errors.message && (
            <span className="text-pink-700 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded bg-gray-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:text-teal-800 ${
            isSubmitting && "cursor-not-allowed opacity-50"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Send"}
        </button>
      </form>
    </div>
  );
};
