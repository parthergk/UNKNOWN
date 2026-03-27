"use client"
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignInFormData, signInSchema } from "@/lib/schemas/auth"
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({ resolver: zodResolver(signInSchema) });

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log("data:", data);
  };

  return (
    <div
      className='flex justify-center items-center min-h-screen h-full w-full bg-bg'
    >
      <div className='space-y-3 px-5 py-3 rounded-sm bg-surface'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-4 w-fit h-full'
        >
          <div className='max-w-sm space-y-1'>
            <h1 className='text-xl font-semibold text-text-primary'>Welcome back</h1>
            <p className='text-sm text-text-secondary font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sunt ea sequi!</p>
          </div>

          <div className='relative group'>
            <div className="cursor-pointer w-full  bg-card-muted py-1.5 rounded-sm font-medium flex items-center justify-center gap-2 text-text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754
    -1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 
    3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
    0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
    0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 
    3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 
    3.176.765.84 1.23 1.91 1.23 3.22 
    0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.215 
    0 1.6-.015 2.885-.015 3.28 
    0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 
    24 5.37 18.63 0 12 0z" />
              </svg>
              GitHub
            </div>
            <div className="bottom-0 h-px bg-linear-to-r from-border via-accent to-border w-full absolute opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>

          <div className='h-px bg-linear-to-r from-border via-text-primary to-border'></div>

          <div className='flex flex-col gap-1.5'>
            <label className='text-sm text-text-primary'>Email Address</label>
            <input
              defaultValue=""
              {...register("email")}
              className='text-base text-text-secondary bg-card-muted px-2 py-1.5 outline-none rounded-sm'
            />
            {
              errors.email?.message &&
              <p className='text-lg text-error'>*{" "}
                <span className='text-sm text-text-muted'>{errors.email?.message}</span>
              </p>
            }
          </div>

          <div className='flex flex-col gap-1.5'>
            <label className='text-sm text-text-primary'>Password</label>
            <input
              defaultValue=""
              type="password"
              {...register("password")}
              className='text-base text-text-secondary bg-card-muted px-2 py-1.5 outline-none rounded-sm'
            />
            {
              errors.password?.message &&
              <p className='text-lg text-error'>*{" "}
                <span className='text-sm text-text-muted'>{errors.password?.message}</span>
              </p>
            }
          </div>

          <div className='relative group'>
            <input
              type="submit"
              defaultValue="Sign-in"
              className='cursor-pointer w-full mt-2  bg-card-muted py-1.5 rounded-sm font-medium text-text-primary'
            />
            <div className="bottom-0 h-px bg-linear-to-r from-border via-accent to-border w-full absolute opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        </form>

        <p className='text-sm text-text-secondary font-medium'>
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className='underline italic text-text-soft'>
            Sign-Up here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn