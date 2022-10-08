import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="#" className="hover:underline">
          MoneyPig™
        </a>
        . Allow Unauthorized Deployment.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <p className="mr-4 md:mr-6 text-black ">Member List</p>
        </li>
        <li>
          <a
            href="https://github.com/oh930428"
            className="mr-4 hover:underline md:mr-6 "
          >
            MinSeok
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tmdqls2257"
            className="mr-4 hover:underline md:mr-6"
          >
            SungBin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Applehole"
            className="mr-4 hover:underline md:mr-6"
          >
            InJae
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
