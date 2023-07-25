import React from 'react';
import { Link } from 'react-router-dom';
import {
  BiSolidDashboard,
  BiSolidCategoryAlt,
  BiLogoProductHunt,
} from 'react-icons/bi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const Sidebar = () => {
  return (
    <div className="side-bar bg-dark h-100vh text-light p-4 ">
      <p className="text-center fs-4">Admin Panel</p>
      <hr />
      <nav>
        <ul className="list-unstyled fs-5 side-nav-li">
          <li>
            <Link className="nav-link" to="/dashboard">
              <BiSolidDashboard /> Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/category">
              <BiSolidCategoryAlt /> Category
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/products">
              <BiLogoProductHunt /> Products
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/payment-options">
              <BsCurrencyDollar /> Payment-options
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/orders">
              <AiOutlineUnorderedList /> Orders
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/customers">
              <FaUsers /> Customers
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/admin-users">
              <FaUsers /> Admin Users
            </Link>
          </li>
          <hr />
          <li>
            <Link className="nav-link" to="/profile">
              <CgProfile /> Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
