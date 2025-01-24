import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div
        className="bg-light"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="com-lg-8">
              <div className="text-center">
                <Image
                  src="/images/404-error.png"
                  alt="error"
                  width={600}
                  height={587}
                />
                <h2 className="mb-3">Not Found</h2>
                <p className="mb-3">Could not find requested resource!</p>
                <Link href="/" className="btn btn-primary">
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
