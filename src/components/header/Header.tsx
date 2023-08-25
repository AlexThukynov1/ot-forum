import { FC } from "react";
import {NavLink, Link } from "react-router-dom";
import Container from "../container/Container";
import clsx from 'clsx';

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
    const navLinkClasses= ({isActive}:{isActive: boolean}) => clsx('py-navItem hover:text-black/60 hover:no-underline', {
        'text-black/80': isActive,
        'text-black/30': !isActive
    })
  return (
    <header>
      <nav className="py-2 px-4">
        <Container>
          <div className="flex justify-between items-center">
            <Link className="font-tilium text-2xl mr-8 text-logo-green" to={"/"}>
              Conduit
            </Link>
            <ul className="pl-0 mb-0 flex gap-4 list-none">
              <li className="">
                <NavLink className={navLinkClasses} to={"/"}>Home</NavLink>
              </li>
              <li className="">
                <NavLink className={navLinkClasses} to={"/login"}>Sign in</NavLink>
              </li>
              <li className="">
                <NavLink className={navLinkClasses} to={"registration"}>Sign up</NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
