import Headless from "@components/svgs/Headless";
import Heart from "@components/svgs/Heart";
import All from "@components/svgs/All";

export default function ProjectsFilter({ onFilter, active }) {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-8 gap-x-4 gap-y-5 lg:col-span-11 pt-10 lg:pt-2">
            <div className="col-span-3 lg:col-span-1 w-full flex items-center">
                <h3 className="font-bold text-red uppercase font-body tracking-widest">
                    Show me:
                </h3>
            </div>
            <button
                id="headless"
                onClick={() => onFilter("headless")}
                className="overflow-hidden focus:ring-1 focus:ring-red focus:ring-offset-2 outline-none focus:ring-offset-white max-lg:text-xs text-red lg:col-span-2 w-full h-auto flex flex-col justify-center items-center gap-2 border border-white-off px-3 lg:pl-1 py-3 lg:py-1 rounded-3xl rounded-tl-none"
            >
                <Headless
                    active={active === "headless" ?? false}
                    className="flex-none w-24 h-auto"
                />
                Headless
            </button>
            <button
                id="forGood"
                onClick={() => onFilter("forGood")}
                className="focus:ring-1 focus:ring-red focus:ring-offset-2 outline-none focus:ring-offset-white max-lg:text-xs text-red lg:col-span-2 w-full h-auto flex flex-col justify-center items-center gap-2 border border-white-off px-3 lg:pl-1 py-3 lg:py-1 rounded-3xl rounded-tl-none"
            >
                <Heart
                    className="flex-none w-24 h-auto"
                    active={active === "forGood" ?? false}
                />
                Tech for good
            </button>
            <button
                id="all"
                onClick={() => onFilter("all")}
                className="focus:ring-1 focus:ring-red focus:ring-offset-2 outline-none focus:ring-offset-white max-lg:text-xs text-red lg:col-span-2 w-full h-auto flex flex-col justify-center items-center gap-2 border border-white-off px-3 lg:pl-1 py-3 lg:py-1 rounded-3xl rounded-tl-none"
            >
                <All
                    className="flex-none w-24 h-auto"
                    active={active === "all" ?? false}
                />
                All
            </button>
        </div>
    );
}
