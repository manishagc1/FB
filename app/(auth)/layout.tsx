import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-cyan-500">
      {/* Optional Background Image */}
      <Image
        src="/images/bg.png"
        alt="background"
        fill
        priority
        className="object-cover opacity-20"
      />

      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-cyan-500/70" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <section className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/main_logo_.png"
              alt="Flight Buddy Logo"
              width={120}
              height={120}
              className="rounded-full border-4 border-cyan-500 shadow-lg"
              priority
            />
          </div>

          {/* Form or children */}
          {children}
        </section>
      </div>
    </main>
  );
}
