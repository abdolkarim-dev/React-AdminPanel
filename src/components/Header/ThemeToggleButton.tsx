// import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggleButton: React.FC = () => {
  // const { toggleTheme } = useTheme();

  return (
    <button
      // onClick={toggleTheme}
      className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    >
<svg
  className="hidden dark:block"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="12" cy="12" r="5" fill="currentColor" />
  <path
    d="M12 2V4M12 20V22M4 12H2M22 12H20M6.5 6.5L5 5M17.5 17.5L19 19M6.5 17.5L5 19M17.5 6.5L19 5"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
</svg>

<svg
  className="dark:hidden"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1151 10.0795 20.7379C8.41104 20.3607 6.88324 19.5143 5.68449 18.3156C4.48574 17.1168 3.63936 15.589 3.26216 13.9206C2.88496 12.2521 2.99282 10.5122 3.57357 8.9044C4.15431 7.2966 5.1809 5.88742 6.53331 4.84183C7.88572 3.79623 9.50792 3.15739 11.2101 3.00004C10.2134 4.34828 9.7338 6.00951 9.85856 7.68144C9.98333 9.35337 10.6039 10.9252 11.6251 12.171C12.6464 13.4167 14.0035 14.2649 15.5211 14.5837C17.0388 14.9026 18.6196 14.6635 20 13.8L21 12.79Z"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
</svg>
    </button>
  );
};
