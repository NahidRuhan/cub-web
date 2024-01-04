import LibraryNav from "../../shared/LibraryNav";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import banner from "../../assets/library.png"
const Library = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <LibraryNav></LibraryNav>

            <img
          className="w-full h-96"
          src={banner}
          alt=""
        />        </div>
    );
};

export default Library;