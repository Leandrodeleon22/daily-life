import { inputPassword } from "@/utils/actions";

export default function Home() {
  return (
    <main className="bg-[url('https://res.cloudinary.com/da8jnpdza/image/upload/v1723424535/main-bg_mx6ykj.png')] min-h-screen bg-no-repeat bg-cover">
      <form
        className="flex justify-center items-center min-h-screen flex-col"
        action={inputPassword}
      >
        <input
          autoComplete="new-password"
          type="password"
          placeholder="Enter the password"
          name="password"
          className="py-2 px-6 w-full max-w-[48.9rem] rounded-lg text-[2rem] text-center"
        />
        <button
          type="submit"
          className="bg-green-500 px-16 py-1 text-[2rem] rounded-md mt-12 text-white"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
