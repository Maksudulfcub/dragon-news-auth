import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h1 className="text-xl font-semibold">Login with</h1>
                <button className="btn btn-outline w-full mt-4">
                    <FaGoogle></FaGoogle>
                    Login with GOOGLE
                </button>
                <button className="btn btn-outline w-full mt-2">
                    <FaGithub className="text-xl"></FaGithub>
                    Login with GitHub
                </button>
            </div>

            <div className=" mt-5">
                <h1 className="text-xl font-semibold">Find Us On</h1>
                <a className="p-4 mt-4 flex text-lg items-center border border-gray-600 rounded-t-lg hover:bg-gray-200" href="">
                    <FaFacebook className="mr-4"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x border-x-gray-600 hover:bg-gray-200" href="">
                    <FaTwitter className="mr-4"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg items-center border border-gray-600 rounded-b-lg hover:bg-gray-200" href="">
                    <FaInstagram className="mr-4"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>

            <div className="p-4 mt-5 bg-gray-100 rounded-2xl">
                <h1 className="text-xl font-semibold">Q Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightNav;