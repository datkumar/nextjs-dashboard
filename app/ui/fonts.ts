import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

// Can also import local font files via "next/font/local"

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
