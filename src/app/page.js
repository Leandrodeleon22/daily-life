export default function Home() {
  return (
    <main className="bg-[url('/main-bg.png')] min-h-screen bg-no-repeat bg-cover">
      <div className="flex justify-center items-center min-h-screen ">
        <input
          type="password"
          placeholder="Enter the password"
          className="py-2 px-6 w-full max-w-[48.9rem] rounded-lg text-[2rem] text-center"
        />
      </div>
    </main>
  );
}
