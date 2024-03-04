import { FaBars } from "react-icons/fa";

const ResponsiveMenu = ({settoggle,
  toggle}) => {
  return (
    <span
      className="md:hidden cursor-pointer"
      onClick={() => settoggle(!toggle)}
    >
      <FaBars size={22} />
    </span>
  );
};

export default ResponsiveMenu;
