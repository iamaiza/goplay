import React, { useState } from "react";
import { Table } from "react-bootstrap";

const LeaderBoard = ({ arcade }) => {
    const [showMore, setShowMore] = useState(false);

    const leaderboardData = showMore
        ? arcade.leaderboard
        : arcade.leaderboard.slice(0, 5);

    const displayLeaderboardDataHandler = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="tw-mt-11 max-lg:tw-mt-5">
            <div className="tw-text-center tw-text-[2rem] max-lg:tw-hidden">
                Game Leaderboard
            </div>
            <div className="tw-mt-4 tw-bg-[#6149CD] tw-rounded-tl-3xl tw-rounded-tr-3xl">
                <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-white tw-text-xl max-lg:tw-text-base tw-pt-5 tw-px-7">
                    <div className="tw-w-1/4">Rank</div>
                    <div className="tw-w-1/2">Name</div>
                    <div className="tw-w-1/4">Points</div>
                </div>
                <div
                    className="tw-mt-2 tw-bg-white tw-rounded-tl-3xl tw-rounded-tr-3xl tw-text-xl max-lg:tw-text-base max-sm:tw-text-sm tw-pb-11 max-lg:-tw-mr-[0.11rem] max-lg:-tw-ml-[0.1rem] max-sm:tw-mx-0"
                    style={{
                        boxShadow:
                            "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                    }}
                >
                    {leaderboardData.map((el) => (
                        <div className="tw-py-5 tw-border-b">
                            <div className="tw-flex tw-items-center tw-gap-x-2 max-sm:tw-gap-x-0 tw-px-7">
                                <div className="tw-w-1/4">{el.rank}</div>
                                <div className="tw-w-1/2">
                                    <div className="tw-flex tw-items-center tw-gap-x-3 max-sm:tw-gap-x-1">
                                        <figure className="tw-w-7 max-sm:tw-w-5 tw-rounded-full">
                                            <img
                                                className="tw-w-full tw-object-cover tw-rounded-full"
                                                src={el.avatar}
                                                alt=""
                                            />
                                        </figure>
                                        <span>{el.name}</span>
                                    </div>
                                </div>
                                <div className="tw-w-1/4 tw-pl-2">{el.points}</div>
                            </div>
                        </div>
                    ))}

                    <div className="tw-text-center tw-mt-11">
                        <button
                            className="tw-py-3 tw-px-6 max-sm:tw-py-2 tw-border tw-border-black tw-rounded-full"
                            onClick={displayLeaderboardDataHandler}
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;
