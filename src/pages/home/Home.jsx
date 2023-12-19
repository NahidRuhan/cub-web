import Announcement from "./Announcement";
import Banner from "./Banner";
import Campus from "./Campus";
import LogoNav from "../../shared/LogoNav";
import Message from "./Message";
import News from "./News";
import Scholarship from "./Scholarship";
import SecondaryNav from "../../shared/SecondaryNav";

const Home = () => {
    return (
        <div>
            <LogoNav></LogoNav>
            <SecondaryNav></SecondaryNav>
            <Banner></Banner>
            <Message></Message>
            <Announcement></Announcement>
            <Scholarship></Scholarship>
            <Campus></Campus>
            <News></News>
        </div>
    );
};

export default Home;