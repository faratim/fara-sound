import About from "@/components/Common/About";
import Contact from "@/components/Common/Contact";
import Cto from "@/components/Common/Cto";
import Faq from "@/components/Common/Faq";
import Footer from "@/components/Common/Footer";
import Partner from "@/components/Common/Partner";
import Welcome from "@/components/Common/Welcome";
import Navbar from "@/components/Layout/Navbar";
import MainBannerOne from "@/components/PageBanners/MainBannerOne";

export default function Home() {
  return (
    <>
      <div id="page-white-outline">
        <Navbar />

        <MainBannerOne />

        <Welcome />

        <About />

        {/* <Strategy /> */}

        {/* <WhoWeAre /> */}

        <Cto />

        {/* <Skill /> */}

        {/* <Funfact /> */}

        {/* <Team /> */}

        {/* <HowWeWork /> */}

        {/* <Services /> */}

        {/* <Work /> */}

        {/* <Price /> */}

        <Faq />

        {/* <Testimonial /> */}

        {/* <Blog /> */}

        <Partner />

        {/* <Subscribe /> */}

        <Contact />

        <Footer />
      </div>
    </>
  );
}
