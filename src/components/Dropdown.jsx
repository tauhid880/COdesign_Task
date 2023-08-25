import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
const subMenu = (
  <>
    <li className="hover:border-b-2 border-b-orange-400 duration-100 hover:bg-slate-200/25 font-Poppins">
      About Click Motto
    </li>
    <li className="hover:border-b-2 border-b-orange-400 duration-100 hover:bg-slate-200/25 font-Poppins">
      Pricing
    </li>
    <li className="hover:border-b-2 border-b-orange-400 duration-100 hover:bg-slate-200/25 font-Poppins">
      Licence
    </li>
    <li className="hover:border-b-2 border-b-orange-400 duration-100 hover:bg-slate-200/25 font-Poppins">
      Partnership
    </li>
    <li className="hover:border-b-2 border-b-orange-400 duration-100 hover:bg-slate-200/25 font-Poppins">
      Blog
    </li>
    <li className="hover:border-b-2 border-b-orange-400 duration-100 hover:bg-slate-200/25 font-Poppins">
      Help
    </li>
    <li className="hover:border-b-2 border-b-orange-400 duration-100 hover:bg-slate-200/25 font-Poppins">
      Join The Team
    </li>
    <ul className="flex gap-4 mt-3 font-Poppins">
      <li className="duration-100 ">
        <BsFacebook className="text-orange-500 hover:text-slate-200" />
      </li>
      <li className="duration-100">
        <BsTwitter className="text-orange-500 hover:text-slate-200" />
      </li>
      <li className="duration-100 ">
        <BsInstagram className="text-orange-500 hover:text-slate-200" />
      </li>
      <li className="duration-100 ">
        <BsPinterest className="text-orange-500 hover:text-slate-200" />
      </li>
      <li className="duration-100 ">
        <BsYoutube className="text-orange-500 hover:text-slate-200" />
      </li>
      <li className="duration-100 ">
        <BsInstagram className="text-orange-500 hover:text-slate-200" />
      </li>
    </ul>
  </>
);
const Dropdown = () => {
  return (
    <div className="lg:absolute bg-black text-white top-[52px] w-auto px-4 py-2">
      {subMenu}
    </div>
  );
};

export default Dropdown;
