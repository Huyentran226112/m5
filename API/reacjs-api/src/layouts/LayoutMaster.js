import Header from "../includes/Header";
import Footer from "../includes/Footer";
import Sidebar from "../includes/Sidebar";
export default function LayoutMaster({ children }) {
    const username ='NVA';
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header username={username}/>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Sidebar/>
                </div>
                <div className="col-8">
                    {/* Dòng này giống @yield('content') */}
                    <div>{children}</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}