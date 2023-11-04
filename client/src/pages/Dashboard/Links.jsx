import {
    AuctionIcon,
    WatchIcon,
    MusicIcon,
} from "../../icons/DashboardSidebarIcons";
import { Link } from "react-router-dom";

const Tab1 = ({ library }) => {
    return (
        <Link
            to="#"
            className={`tw-bg-[#B9B9B9] tw-rounded-3xl tw-h-full ${
                library !== true
                    ? "tw-text-xl tw-mr-2 tw-px-[0.8rem] tw-py-1.5 max-[350px]:tw-py-2 max-sm:tw-text-base"
                    : "tw-text-sm tw-px-3 tw-mr-4 tw-py-2"
            }`}
        >
            All
        </Link>
    );
};

const Tab2 = ({ library }) => {
    return (
        <Link
            to={library === true ? "/watch-faces" : "/auction"}
            className={`tw-flex tw-items-center tw-gap-x-2 max-[350px]:tw-gap-x-1.5 tw-bg-[#e0e0e0] tw-rounded-3xl ${
                library !== true
                    ? "tw-mr-2 tw-px-[0.9rem] max-[350px]:tw-px-2.5 tw-py-1"
                    : "tw-px-3 tw-mr-4 tw-py-1.5"
            }`}
        >
            {library === true ? (
                <WatchIcon className="tw-fill-[#6149cd]" />
            ) : (
                <AuctionIcon className="tw-fill-[#6149cd]" />
            )}
            <div
                className={`${library !== true ? "tw-text-xl max-sm:tw-text-base" : "tw-text-sm"}`}
            >
                {library === true ? "Watch\u00A0Faces" : "Auction"}
            </div>
        </Link>
    );
};

const Tab3 = ({ library }) => {
    return (
        <Link
            to={library !== true ? "/watch-faces" : "/watch-ringtones"}
            className={`tw-flex tw-items-center tw-gap-x-2 max-[350px]:tw-gap-x-1.5 tw-bg-[#e0e0e0] tw-rounded-3xl ${
                library !== true
                    ? "tw-px-[0.9rem] max-[350px]:tw-px-2.5 tw-py-1"
                    : "tw-px-3 tw-py-1.5"
            }`}
        >
            {library !== true ? (
                <WatchIcon className="tw-fill-[#6149cd]" />
            ) : (
                <MusicIcon className="tw-fill-[#6149cd]" />
            )}
            <div
                className={`tw-whitespace-nowrap ${
                    library !== true ? "tw-text-xl max-sm:tw-text-base" : "tw-text-sm"
                }`}
            >
                {library !== true ? "Watch Faces" : "Watch Ringtones"}
            </div>
        </Link>
    );
};

export { Tab1, Tab2, Tab3 };
