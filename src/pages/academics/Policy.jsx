import book from "../../assets/ADMISSION POLICY 23 May 2023.docx.pdf"
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
const Policy = () => {
    return (
        <div>

            <SecondaryNav></SecondaryNav>

            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>
            <iframe src={book} width="100%" height="600px" frameBorder="0"></iframe>

        </div>
    );
};

export default Policy;