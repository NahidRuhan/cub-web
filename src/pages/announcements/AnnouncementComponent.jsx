import { SiWindows } from "react-icons/si";
import PropTypes from "prop-types";


const AnnouncementComponent = ({ announcement }) => {
    const { title, date, description, id, link } = announcement;

    return (
        <div className="">
            <div className="flex flex-col gap-1 shadow-2xl h-80 md:h-96 lg:h-[400px] xl:h-72 p-7">
                <p className="text-base font-medium">{title}</p>
                <p className="text-sm">{description}</p>
                <p className="text-sm flex items-center gap-2">
                    <span><SiWindows /></span>{date}
                </p>
                <p className="text-xs flex gap-1">ID: <span className="break-all">{id}</span></p>
                <a className="text-blue-700" href={link}>
                    Download attachment
                </a>
            </div>
        </div>
    );
};

AnnouncementComponent.propTypes = {
    announcement: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};

export default AnnouncementComponent;
