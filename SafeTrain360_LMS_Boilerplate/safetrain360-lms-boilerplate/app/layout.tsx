// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "SafeTrain360",
  description: "AI-powered LMS for safety training",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
          <h1 className="text-2xl font-bold mb-8">SafeTrain360</h1>
          <nav className="space-y-4">
            <Link href="/" className="block hover:underline">Dashboard</Link>
            <Link href="/courses" className="block hover:underline">Courses</Link>
            <Link href="/reports" className="block hover:underline">Reports</Link>
            <Link href="/admin" className="block hover:underline">Admin</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          {children}
        </main>
      </body>
    </html>
  );
}

