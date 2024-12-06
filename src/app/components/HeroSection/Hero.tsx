import { ArrowRight } from "lucide-react";
import Image from "next/image";

function Hero() {

    return (
        <section className="bg-second w-[892px] h-[344px] flex items-center">

            {/* ------- text area ------- */}
            <div className="w-[396px] h-fit ml-16 mr-[38px]">
                <div className="flex gap-6">
                    <div className="w-10 h-[49px] relative">
                        <Image
                            src={"/appleLogo.png"}
                            alt="logo of apple"
                            layout="fill"
                        />
                    </div>
                    <h1 className="font-poppins text-center content-center text-grey2">iPHONE 14 Series</h1>
                </div>
                <p className="w-[294px] font-inter font-semibold text-5xl text-main my-5" >Up to 10% off Voucher</p>
                <div className="flex w-fit gap-2 items-center">
                    <a href="#" className="font-popping font-medium text-center text-grey2 border-b border-grey2 py-[2px]">Shop Now</a>
                    <ArrowRight className="text-grey2" />
                </div>
            </div>

            {/* ------- Image Area ------- */}
            <div className="w-[496px] h-full p-4">
                <div className="h-full w-full relative">
                    <Image
                        src={'/iphone14.png'}
                        alt="iphone 14 image"
                        layout="fill"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;