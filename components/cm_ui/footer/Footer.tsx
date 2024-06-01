import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-secondary-cyanDarkest text-white py-[80px]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    <div>
                        <h1 className="text-[24px] font-semibold mb-6">About us</h1>
                        <div className="flex flex-col space-y-3">
                            <Link href="#" className="text-[14px] hover:underline">Company</Link>
                            <Link href="#" className="text-[14px] hover:underline">Leadership</Link>
                            <Link href="#" className="text-[14px] hover:underline">Our features</Link>
                            <Link href="#" className="text-[14px] hover:underline">Pricing</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[24px] font-semibold mb-6">Help & Support</h1>
                        <div className="flex flex-col space-y-3">
                            <Link href="#" className="text-[14px] hover:underline">Customer support</Link>
                            <Link href="#" className="text-[14px] hover:underline">Organizer support</Link>
                            <Link href="#" className="text-[14px] hover:underline">Terms of service</Link>
                            <Link href="#" className="text-[14px] hover:underline">Privacy policy</Link>
                            <Link href="#" className="text-[14px] hover:underline">Contact us</Link>
                            <Link href="#" className="text-[14px] hover:underline">Report a scam</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[24px] font-semibold mb-6">Connect with us</h1>
                        <div className="flex flex-col space-y-3">
                            <Link href="#" className="text-[14px] hover:underline">Press</Link>
                            <Link href="#" className="text-[14px] hover:underline">Blog</Link>
                            <Link href="#" className="text-[14px] hover:underline">Join our team</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[24px] font-semibold mb-6">Sign up for newsletter</h1>
                        <p className="text-[12px] mb-3">
                            Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!
                        </p>
                        <Input className="w-full mb-3" placeholder="Enter email here..." />
                        <Button className="bg-accent-orange hover:bg-accent-lightOrange w-full">Sign up</Button>
                    </div>
                </div>
                <Link href="#" className="block mt-[80px] text-center text-[16px]">© Infinity Events, All Rights Reserved</Link>
            </div>
        </footer>
    );
}

export default Footer;
