import Header from "../includes/Header";
import Footer from "../includes/Footer";
export default function LayoutMaster({ children }) {
  // const username = "NVA";
  return (
    <>
      <Header />
      <section className="content_area">{children}</section>
      {/* <section className="banner-area">{children}</section> */}
      <Footer />
    </>
  );
}
