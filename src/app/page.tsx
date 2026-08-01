export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl">Welcome Back!</h1>

        <div className="w-96 rounded-xl bg-[#1f1f1f]">
          <form className="flex flex-col gap-6 p-8">
            <div className="flex flex-col gap-2">
              <label className="font-bold">Username</label>
              <input
                type="text"
                className="h-10 rounded-md border border-gray-600 bg-[#303030] px-3 py-2 outline-none focus:border-red-500"
                placeholder="e.g: john.doe@gmail.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold">Password</label>
              <input
                type="password"
                className="h-10 rounded-md border border-gray-600 bg-[#303030] px-3 py-2 outline-none focus:border-red-500"
                placeholder="e.g: password123"
              />
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-red-500 h-9 rounded-md font-bold">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}