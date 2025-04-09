import { cn } from "lib/utils";

export default function Heart({ className, active }) {
    return (
        <div className={cn("group relative", className)} data-active={active}>
            <svg
                className="heart1 group-data-[active=true]:scale-125 transition-all ease-in-out duration-300"
                viewBox="0 0 367 306"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="130.5" cy="100.5" r="68.5" fill="#FFA2B6" />
                <circle cx="236.5" cy="100.5" r="68.5" fill="#FFA2B6" />
                <path
                    d="M167.147 256.186C175.804 266.227 191.195 266.233 199.859 256.199C231.421 219.648 297.802 141.227 299.975 125.777C302.828 105.482 64.9575 106.676 67.0132 125.777C68.5804 140.337 135.45 219.417 167.147 256.186Z"
                    fill="#FFA2B6"
                />
            </svg>
            <svg
                className="heart2 absolute left-0 top-0 group-data-[active=true]:scale-75 transition-all ease-in-out duration-300"
                viewBox="0 0 367 306"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="130.5" cy="100.5" r="68.5" fill="#E43D12" />
                <circle cx="236.5" cy="100.5" r="68.5" fill="#E43D12" />
                <path
                    d="M167.147 256.186C175.804 266.227 191.195 266.233 199.859 256.199C231.421 219.648 297.802 141.227 299.975 125.777C302.828 105.482 64.9575 106.676 67.0132 125.777C68.5804 140.337 135.45 219.417 167.147 256.186Z"
                    fill="#E43D12"
                />
            </svg>
        </div>
    );
}
