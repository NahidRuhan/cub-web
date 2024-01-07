import LogoNav from "../../shared/LogoNav";
import Message from "../../shared/Message";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";

const Chairman = () => {
    return (
        <div>

<SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>


<div className="w-full h-52 bg-slate-700 flex justify-center items-center text-center text-white">
  <h1 className="text-3xl">Message From Chairman</h1>
</div>

<Message></Message>
            
        </div>
    );
};

export default Chairman;