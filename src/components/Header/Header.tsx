import LogoAr from '/src/assets/images/nqoodlet-ar-logo.svg';
import LogoEn from '/src/assets/images/nqoodlet-logo.svg';
import { useTranslation } from 'react-i18next';

export default function Header() {

  const { i18n } = useTranslation()
  const dir = i18n.dir();

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  };

  return (
    <header className="bg-[var(--white-color)] min-h-[70px] p-4 flex items-center justify-between" dir={dir}>
      <div className="container m-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="logo">
            <img className="w-[140px]" src={i18n.language === 'en' ? LogoEn : LogoAr} />
          </a>
          <bdi>
            <button onClick={() => handleChangeLang(i18n.language === 'en' ? 'ar' : 'en')} className="focus-within:outline-none lang flex items-center gap-2 text-[#222]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V7M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className='lang-toggler text-base'>{i18n.language === 'en' ? 'العربيه' : 'English'}</span>
            </button>
          </bdi>
        </div>
      </div>
    </header>
  );
}
