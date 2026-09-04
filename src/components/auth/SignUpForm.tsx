 
import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronLeftIcon,
  EyeCloseIcon,
  EyeIcon,
} from "@/assets/icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative flex flex-col flex-1 min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-500/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-50 blur-3xl dark:bg-brand-500/5" />

      {/* Back */}
      <div className="relative z-10 w-full max-w-lg px-5 pt-8 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400"
        >
          <ChevronLeftIcon className="size-4" />
          Back to dashboard
        </Link>
      </div>

      {/* Main */}
      <div className="relative z-10 flex items-center justify-center flex-1 w-full px-5 py-8">
        <div className="w-full max-w-lg">

          {/* Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">

            {/* Header */}
            <div className="mb-7">
              {/* <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 21V19C16 17.3431 14.6569 16 13 16H6C4.34315 16 3 17.3431 3 19V21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="9.5"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M19 8V14M22 11H16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div> */}

              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Create your account
              </h1>

              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                Get started by creating your account. It only takes a minute.
              </p>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 10.19C18.75 9.47 18.69 8.95 18.56 8.4H10.18V11.65H15.1C15 12.46 14.47 13.67 13.27 14.49L15.91 16.61C17.78 15.1 18.75 12.86 18.75 10.19Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.18 18.75C12.59 18.75 14.61 17.97 16.09 16.63L13.27 14.49C12.52 15.01 11.51 15.37 10.18 15.37C7.82 15.37 5.81 13.84 5.1 11.73L2.2 13.93C3.67 16.79 6.69 18.75 10.18 18.75Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.1 11.73C4.91 11.19 4.8 10.6 4.8 10C4.8 9.4 4.91 8.81 5.09 8.27L2.2 6.07C1.6 7.26 1.25 8.59 1.25 10C1.25 11.41 1.6 12.74 2.2 13.93L5.1 11.73Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10.18 4.63C11.86 4.63 12.99 5.34 13.63 5.94L16.15 3.53C14.6 2.12 12.59 1.25 10.18 1.25C6.69 1.25 3.67 3.21 2.2 6.07L5.09 8.27C5.81 6.16 7.82 4.63 10.18 4.63Z"
                    fill="#EB4335"
                  />
                </svg>

                Google
              </button>

              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 21 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.67 1.875H18.43L12.4 8.758L19.49 18.125H13.94L9.6 12.444L4.63 18.125H1.87L8.31 10.763L1.51 1.875H7.2L11.13 7.068L15.67 1.875ZM14.7 16.475H16.23L6.37 3.438H4.73L14.7 16.475Z" />
                </svg>

                X
              </button>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />

              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Or register with
              </span>

              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            </div>

            {/* Form */}
            <form>
              <div className="space-y-5">

                {/* Name */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <Label>
                      First Name{" "}
                      <span className="text-error-500">*</span>
                    </Label>

                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <Label>
                      Last Name{" "}
                      <span className="text-error-500">*</span>
                    </Label>

                    <Input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Doe"
                    />
                  </div>

                </div>

                {/* Email */}
                <div>
                  <Label>
                    Email address{" "}
                    <span className="text-error-500">*</span>
                  </Label>

                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <Label>
                    Password{" "}
                    <span className="text-error-500">*</span>
                  </Label>

                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      placeholder="Create a strong password"
                      type={showPassword ? "text" : "password"}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-200"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeIcon className="size-5 fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="size-5 fill-gray-500 dark:fill-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-3">
                  <Checkbox
                    className="mt-0.5 h-5 w-5 shrink-0"
                    checked={isChecked}
                    onChange={setIsChecked}
                  />

                  <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                    By creating an account, you agree to our{" "}
                    <Link
                      to="/terms"
                      className="font-medium text-gray-800 hover:text-brand-500 dark:text-gray-200 dark:hover:text-brand-400"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="font-medium text-gray-800 hover:text-brand-500 dark:text-gray-200 dark:hover:text-brand-400"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-brand-500 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md active:scale-[0.99]"
                >
                  Create account
                </button>

              </div>
            </form>

            {/* Sign In */}
            <div className="mt-7 border-t border-gray-100 pt-6 text-center dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-semibold text-brand-500 transition-colors hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  Sign in
                </Link>
              </p>
            </div>

          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
            © 2026 Admin Panel. All rights reserved.
          </p>

        </div>
      </div>
    </div>
  );
} 
