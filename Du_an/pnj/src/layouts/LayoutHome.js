import Header from "../includes/shop/Header";
import Footer from "../includes/shop/Footer";
export default function LayoutHome({ children }) {
    return (
      <>
        <Header />
        <section className="category-area">{children}</section>   
        <Footer />
      </>
    );
  }
  