import Footer from "../../component/Footer";
import NewsletterSection from "../../component/NewsletterSection";
import Banner from "./components/Banner";
import TrustedBy from "./components/TrustedBy";
import ClientFeedback from "./components/ClientFeedback";
import DreamHome from "./components/DreamHome";
import Articles from "./components/Articles";
import PopularResident from "./components/PopularResident";
function Home(){
    return(
    <>
        <Banner/>
        <TrustedBy/>
        <PopularResident/>
        <ClientFeedback/>
        <DreamHome/>
        <Articles/>
        <NewsletterSection/>
        <Footer/>
    </>
    )
   
}
export default Home