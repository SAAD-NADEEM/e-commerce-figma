import { ChevronDown, Heart, ShoppingCart, Search } from 'lucide-react';

function Header() {

    return (
        <header className="h-36 w-screen border-b border-second2 flex flex-col items-center justify-between pb-4">
            {/* ----- Top Header ----- */}
            <section className="h-12 w-full bg-second flex justify-center">
                <div className="w-[1170px] h-full flex justify-end">
                    <div className='w-[859px] flex items-center justify-between'>
                        <div className="flex text-grey2 gap-2">
                            <p className="text-sm font-normal font-poppins">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <p className="text-sm font-poppins font-semibold underline cursor-pointer">ShopNow</p>
                        </div>
                        <div className='flex w-[78px] text-grey2 items-center gap-1'>
                            <p className='text-sm font-normal font-poppins'>English</p>
                            <button className='w-6 h-6 m-auto'><ChevronDown className='w-5 h-5' /></button>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----- Bottom Header ----- */}
            <section className='w-[1170px] h-[38px] flex justify-between'>
                {/* ----- Left Side ----- */}
                <div className='w-[675px] flex justify-between items-center'>
                    <h1 className='font-inter font-bold text-2xl text-second'>Exclusive</h1>
                    <nav >
                        <ul className='flex gap-12'>
                            <li>
                                <a href="#" className='font-poppins text-base text-center py-1 '>Home</a>
                            </li>
                            <li>
                                <a href="#" className='font-poppins text-base text-center py-1 '>Contact</a>
                            </li>
                            <li>
                                <a href="#" className='font-poppins text-base text-center py-1 '>About</a>
                            </li>
                            <li>
                                <a href="#" className='font-poppins text-base text-center py-1 '>Sign Up</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* ----- Right Side ----- */}
                <div className='flex gap-6'>
                    <div className='flex bg-grey1 py-[7px] pl-5 pr-3 gap-[34px]'>
                        <input type="text" placeholder='What are you looking for?' 
                        className='bg-transparent font-poppins text-xs text-second2 outline-none px-[1px]' />
                        <Search />
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Heart className='h-8 w-8 p-1'/>
                        <ShoppingCart className='h-8 w-8 p-1'/>
                    </div>
                </div>
            </section>

        </header>
    );
};

export default Header;