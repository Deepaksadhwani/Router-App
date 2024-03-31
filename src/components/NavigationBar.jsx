import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between bg-red-200 px-16">
      <img
        src="https://img.freepik.com/free-vector/butterfly-logo-colorful-gradient-illustrations_483537-972.jpg?w=740&t=st=1711845903~exp=1711846503~hmac=10310509cd3fffec000a728c4ce60e797f26fc515e8007fe3934cefcda056f07"
        alt=""
        className="fi filter-contrast w-24 bg-blend-multiply"
      />
      <ul className="flex space-x-4 text-2xl font-semibold underline">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
