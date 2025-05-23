import { cn } from "lib/utils";

export default function All({ className, active }) {
    return (
        <svg
            viewBox="0 0 367 305"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(className, "group")}
            data-active={active}
        >
            <rect
                x="216"
                y="145.632"
                width="113"
                height="37"
                rx="8"
                fill="#E43D12"
                className="group-data-[active=true]:translate-x-[-80px] origin-center transition-all ease-in-out duration-300"
            />
            <path
                d="M50 65.6321C50 61.2139 53.5817 57.6321 58 57.6321H130C134.418 57.6321 138 61.2139 138 65.6321V89.6321C138 94.0504 134.418 97.6321 130 97.6321H58C53.5817 97.6321 50 94.0504 50 89.6321V65.6321Z"
                fill="#4057FF"
                className="group-data-[active=true]:translate-x-[90px] group-data-[active=true]:translate-y-[40px] origin-center transition-all ease-in-out duration-300"
            />
            <rect
                x="97.4686"
                y="218.921"
                width="40.4387"
                height="37.267"
                rx="8"
                fill="#4057FF"
                className="group-data-[active=true]:translate-x-[90px] group-data-[active=true]:translate-y-[-30px] origin-center transition-all ease-in-out duration-300"
            />
            <rect
                x="38"
                y="218.921"
                width="55.5041"
                height="37.267"
                rx="8"
                fill="#E43D12"
                className="group-data-[active=true]:translate-x-[90px] group-data-[active=true]:translate-y-[-30px] origin-center transition-all ease-in-out duration-300"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M284.734 139.629H226.063C217.226 139.629 210.063 146.793 210.063 155.629V172.79C210.063 181.627 217.226 188.79 226.063 188.79H279.811C264.327 237.968 218.365 273.632 164.074 273.632C145.948 273.632 128.751 269.657 113.306 262.531H131.564C138.571 262.531 144.251 256.851 144.251 249.845V225.264C144.251 218.258 138.571 212.578 131.564 212.578H103.812C100.626 212.578 97.7144 213.752 95.4863 215.691C93.2582 213.752 90.3466 212.578 87.1607 212.578H58.759C48.5781 194.824 42.7574 174.25 42.7574 152.316C42.7574 134.638 46.5385 117.844 53.336 102.697C55.2466 103.503 57.3465 103.948 59.5504 103.948H128.251C137.087 103.948 144.251 96.7848 144.251 87.9482V67.6158C144.251 58.7792 137.087 51.6158 128.251 51.6158H96.3974C115.729 38.5979 139.014 31 164.074 31C226.79 31 278.391 78.5908 284.734 139.629Z"
                fill="#EFB11D"
                className="group-data-[active=true]:scale-0 origin-center transition-all ease-in-out duration-300"
            />
        </svg>
    );
}
