import BlogNavbar from "@/components/Blog/BlogNavbar";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import Footer from "@/components/Common/Footer"; 
import BlogBanner from "@/components/PageBanners/BlogBanner";

export default function Page() {
  return (
    <>
      <BlogNavbar />

      <BlogBanner />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
