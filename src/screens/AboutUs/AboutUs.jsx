import Footer from "../../component/Footer";
import NewsletterSection from "../../component/NewsletterSection";
import AboutFirm from "./components/AboutFirm";
import AboutStats from "./components/AboutStats";
import TeamMembers from "./components/TeamMembers";
import Articles from "./components/Articles";
function AboutUs(){
    return(
    <>
        <AboutFirm/>
        <AboutStats/>
        <TeamMembers/>
        <Articles/>
        <NewsletterSection/>
        <Footer/>
    </>
    )
   
}
export default AboutUs;