import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 md:text-center dark:text-gray-400">
        © 2022{' '}
        <Link href="/" className="hover:underline">
          <a>MoneyPig™</a>
        </Link>
        . Allow Unauthorized Deployment.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 md:mt-0">
        <li>
          <p className="mr-4 md:mr-6 text-black ">Member List</p>
        </li>
        <li>
          <Link
            href="https://github.com/oh930428"
            className="mr-4 hover:underline md:mr-6 "
          >
            <a>MinSeok</a>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/tmdqls2257"
            className="mr-4 hover:underline md:mr-6"
          >
            <a>SeungBin</a>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Applehole"
            className="mr-4 hover:underline md:mr-6"
          >
            <a>InJae</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
