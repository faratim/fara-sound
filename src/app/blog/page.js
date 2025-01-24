import BlogNavbar from "@/components/Blog/BlogNavbar";
import BlogPost from "@/components/Blog/BlogPost";
import Footer from "@/components/Common/Footer"; 
import BlogBanner from "@/components/PageBanners/BlogBanner";

export default function Page() {
  return (
    <>
      <BlogNavbar />

      <BlogBanner />

      <BlogPost />

      <Footer />
    </>
  );
}
