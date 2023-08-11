import { routesConfig } from '../../config';
import { Link } from 'react-router-dom';

function NotAuthority() {
  return (
    <div className="flex pt-40 pb-20 flex-col bg-[#FFFFFF] dark:bg-bgDarkMode">
      <div className="flex mx-auto w-full items-center justify-center flex-col">
        <div className="text-9xl mx-auto text-textColor font-semibold dark:text-textDarkMode">403</div>
        <div className="mt-10 text-4xl mx-auto text-textColor font-semibold dark:text-textDarkMode">Forbidden</div>
        <div className="mt-10 items-center w-[600px]">
          <span className="text-xl text-textColor font-semibold dark:text-textDarkMode">
            You do not have access to the requested page.Click! Log out and try another account
          </span>
          <span className="ml-4 text-[#d0980b] decoration-solid underline">
            <Link to={routesConfig.logout}>Log Out</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NotAuthority;
