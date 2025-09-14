import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Multi App Project",
  description: "Next.js with multiple small apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />
        <main style={{ padding: "1rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
