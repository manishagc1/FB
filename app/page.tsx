import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 w-full absolute top-0 left-0 z-10">
        <div className="text-white text-2xl font-bold flex items-center gap-2">
          ✈️ Flight Buddy
        </div>

        <div className="flex gap-6">
          <Link href="/" className="text-white font-medium hover:underline">
            Home
          </Link>
          <Link href="/search" className="text-white font-medium hover:underline">
            Search Flights
          </Link>
          <Link href="/bookings" className="text-white font-medium hover:underline">
            My Bookings
          </Link>
          <Link href="/profile" className="text-white font-medium hover:underline">
            Profile
          </Link>
        </div>

        <div className="flex gap-2">
          <Link
            href="/login"
            className="bg-white text-cyan-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-cyan-700 transition"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen w-full text-center px-4 bg-gradient-to-br from-cyan-500 to-blue-400">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Book Your Next Flight Easily ✈️
        </h1>

        <p className="text-white/90 mb-8 max-w-xl">
          Find the best flights, book tickets, and manage your trips all in one
          place with Flight Buddy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/search"
            className="bg-white text-cyan-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Search Flights
          </Link>

          <Link
            href="/login"
            className="bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-cyan-800 transition"
          >
            Get Started
          </Link>
        </div>
      </main>
    </>
  );
}
