import {
    github,
    instagram,
    twitter,
    linkedin
} from "../assets";

const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3  flex justify-between items-center flex-wrap gap-5">

            <p className="text-white-500 ml-5">© 2024 Dhruvi Patel</p>


            <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200 hover:cursor-pointer">
                    <img src={github} alt="github" className="w-3/5 h-3/5" onClick={() => window.open("https://github.com/dhruvipatel14/")} />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border  border-black-200 hover:cursor-pointer">
                    <img src={linkedin} alt="linkedin" className="w-10/12 h-10/12" onClick={() => window.open("https://www.linkedin.com/in/dhruvi-patel-55043412a/")}/>
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200  hover:cursor-pointer">
                    <img src={twitter} alt="twitter" className="w-1/2 h-1/2"  onClick={() => window.open("https://x.com/pateldhruviii/")}/>
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200 hover:cursor-pointer">
                    <img src={instagram} alt="instagram" className="w-1/2 h-1/2" onClick={() => window.open("https://www.instagram.com/shutter_bee_dhruvi/")} />
                </div>
            </div>

            <p className="text-white-500 mr-5">All rights reserved</p>

        </footer>
    );
};

export default Footer;