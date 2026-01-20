"use client";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-400 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/main_logo_.png"
            alt="Flight Buddy Logo"
            width={140}
            height={140}
            className="rounded-full shadow-lg border-4 border-cyan-500"
            priority
          />
        </div>

        {/* Welcome Message */}
        <h1 className="text-3xl font-bold text-cyan-700 mb-2 text-center">
          Welcome to Flight Buddy ✈️
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Manage your flights, bookings, and tickets all in one place.
        </p>

        {/* Dashboard Actions */}
        <div className="w-full flex flex-col gap-4">
          <button className="bg-cyan-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-cyan-700 transition">
            Search Flights
          </button>
          <button className="bg-white border border-cyan-600 text-cyan-600 font-semibold py-3 rounded-xl shadow hover:bg-cyan-600 hover:text-white transition">
            My Bookings
          </button>
          <button className="bg-white border border-cyan-600 text-cyan-600 font-semibold py-3 rounded-xl shadow hover:bg-cyan-600 hover:text-white transition">
            Ticket History
          </button>
        </div>
      </div>
    </div>
  );
}
