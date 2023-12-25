import Banner from "./Banner";
import Campus from "./Campus";
import LogoNav from "../../shared/LogoNav";
import Message from "./Message";
import News from "./News";
import Scholarship from "./Scholarship";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import Partners from "./Partners";

const Home = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>
            <Banner></Banner>
            <Message></Message>
            <Scholarship></Scholarship>
            <News></News>
            <Campus></Campus>
            <Partners></Partners>
        </div>
    );
};

export default Home;