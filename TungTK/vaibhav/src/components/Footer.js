import { UilGithub, UilGitlab, UilInstagram, UilTwitter, UilLinkedin } from '@iconscout/react-unicons';
export default function Footer() {
    let Links = [
        { name: "Term of use" },
        { name: "Privacy-Policy" },
        { name: "About" },
        { name: "Blog" },
        { name: "FAQ" }
    ]
    return (
        <div className="w-full h-[200px] bg-[#242121] mt-[50px]">
            <div className="w-full flex justify-center">
                <div className="w-1/3 flex justify-around mt-[30px]">
                    {
                        Links.map((link) => (
                            <p className="text-white text-[16px]">{link.name}</p>
                        ))
                    }
                </div>
            </div>
            <p className="text-center text[14px] font-bold text-white opacity-50 mt-[30px]">Made by TungTK</p>
            <div className='w-full flex justify-center mt-[30px]'>
                <div className='flex w-1/4 justify-around'>
                    <a className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center transition-transform transform-gpu border-solid border-2 border-black hover:border-red-400 hover:shadow-lg">
                        <UilGithub size={20} />
                    </a>
                    <a className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center transition-transform transform-gpu border-solid border-2 border-black hover:border-red-400 hover:shadow-lg">
                        <UilGitlab size={20} />
                    </a>
                    <a className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center transition-transform transform-gpu border-solid border-2 border-black hover:border-red-400 hover:shadow-lg">
                        <UilInstagram size={20} />
                    </a>
                    <a className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center transition-transform transform-gpu border-solid border-2 border-black hover:border-red-400 hover:shadow-lg">
                        <UilTwitter size={20} />
                    </a>
                    <a className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center transition-transform transform-gpu border-solid border-2 border-black hover:border-red-400 hover:shadow-lg">
                        <UilLinkedin size={20} />
                    </a>
                </div>
            </div>

        </div>
    );

}