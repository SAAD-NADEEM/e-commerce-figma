import { ChevronRight } from "lucide-react";

function SideBar() {

    return (
        <aside className="w-[217px]">
            <nav>
                <ul className="flex flex-col gap-4">
                    <li className="flex justify-between">
                        <a className="font-poppins text-center " href="#">Women&#39;s Fashion</a>
                        <ChevronRight />
                    </li>
                    <li className="flex justify-between">
                        <a className="font-poppins text-center" href="#">Mens&#39;s Fashion</a>
                        <ChevronRight />
                    </li>
                    <li><a className="font-poppins text-center" href="#">Electronics</a></li>
                    <li><a className="font-poppins text-center" href="#">Home & Lifestyle</a></li>
                    <li><a className="font-poppins text-center" href="#">Medicine</a></li>
                    <li><a className="font-poppins text-center" href="#">Sports & Outdoor</a></li>
                    <li><a className="font-poppins text-center" href="#">Baby&#39;s & Toys</a></li>
                    <li><a className="font-poppins text-center" href="#">Groceries & Pets</a></li>
                    <li><a className="font-poppins text-center" href="#">Health & Beauty</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;