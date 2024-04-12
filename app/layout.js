import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Meeting Mate",
  description: "Unlock the power of seamless scheduling with our intuitive meeting planner, designed to maximize your productivity and minimize scheduling conflicts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        {children}</body>
    </html>
  );
}
