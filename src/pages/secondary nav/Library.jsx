import LibraryNav from "../../shared/LibraryNav";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
const Library = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <LibraryNav></LibraryNav>

            <p className="text-4xl text-center font-bold">Library section here</p>
        </div>
    );
};

export default Library;