import "../app/styles/bootstrap.min.css";
import "../app/styles/font-awesome.min.css";
import "../app/styles/animate.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../app/styles/style.css";
import "../app/styles/responsive.css";
import "../app/styles/dark.css";

import { Poppins } from "next/font/google";
import GoTop from "@/components/Common/GoTop";
// import DemoSidebar from "@/components/Common/DemoSidebar/DemoSidebar";
import AosAnimation from "@/components/Layout/AosAnimation";
// import DarkModeSwitcher from "@/components/Layout/DarkModeSwitcher";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fara Sound - Corporate AVL Excellence",
  description:
    "Fara Sound is an audio, video, lighting company based in the Charlotte area that specializes in corporate events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

        <GoTop />

        <AosAnimation />

        {/* <DarkModeSwitcher /> */}

        {/* <DemoSidebar /> */}
      </body>
    </html>
  );
}
