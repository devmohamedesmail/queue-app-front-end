 <footer className="footer sm:footer-horizontal bg-gradient-to-t from-base-300 to-base-100 text-base-content p-10 pb-32 border-t border-base-300 shadow-inner">
            <aside className="flex flex-col items-start gap-4 min-w-[220px]">
                <img src={`${settings?.logo}`} alt={settings?.nameEn} className='w-24 h-24 object-contain rounded-lg shadow-md bg-white p-2' />
                <p className="text-lg font-semibold text-primary mb-1 tracking-wide drop-shadow">{settings?.nameEn}</p>
                <p className="text-sm text-base-content/80 leading-relaxed max-w-xs italic">
                    {i18n.language === "ar" ? settings?.descriptionAr : settings?.descriptionEn}
                </p>
            </aside>
            <div className="h-32 w-px bg-base-300 hidden md:block mx-6 rounded-full opacity-60"></div>
            <nav className="flex flex-col gap-2 min-w-[200px]">
                <h6 className="footer-title text-base font-bold mb-2 text-primary/90 flex items-center gap-2"><FiLink className="text-lg text-primary/80" />{t('useful-links')}</h6>
                {pages && pages.map((item, index) => (
                    <Link key={index} href={`/pages/user/page/${item._id}`} className="group flex items-center gap-2 transition-colors hover:text-primary/80 text-base-content/90 py-1 font-medium">
                        <FiChevronRight className="text-base group-hover:translate-x-1 transition-transform" />
                        <span className="underline-offset-4 group-hover:underline">
                            {i18n.language === "ar" ? item.title_ar : item.title_en}
                        </span>
                    </Link>
                ))}
                <Link href="/privacy" className="group flex items-center gap-2 transition-colors hover:text-primary/80 text-base-content/90 py-1 font-medium">
                    <FiChevronRight className="text-base group-hover:translate-x-1 transition-transform" />
                    <span className="underline-offset-4 group-hover:underline">{t('privacy-policy') || 'Privacy Policy'}</span>
                </Link>
                <Link href="/terms" className="group flex items-center gap-2 transition-colors hover:text-primary/80 text-base-content/90 py-1 font-medium">
                    <FiChevronRight className="text-base group-hover:translate-x-1 transition-transform" />
                    <span className="underline-offset-4 group-hover:underline">{t('terms-of-service') || 'Terms of Service'}</span>
                </Link>
            </nav>
            <div className="h-32 w-px bg-base-300 hidden md:block mx-6 rounded-full opacity-60"></div>
            <nav className="flex flex-col gap-2 min-w-[220px]">
                <h6 className="footer-title text-base font-bold mb-2 text-primary/90 flex items-center gap-2"><MdOutlineMailOutline className="text-lg text-primary/80" />{t('contact-us')}</h6>
                <a className="link link-hover flex items-center gap-2 text-base-content/90 hover:text-primary/80 transition-colors py-1">
                    <MdOutlineMailOutline className="text-xl" />
                    <span>{settings?.email}</span>
                </a>
                <a className="link link-hover flex items-center gap-2 text-base-content/90 hover:text-primary/80 transition-colors py-1">
                    <FaPhone className="text-xl" />
                    <span>{settings?.phone}</span>
                </a>
                <a className="link link-hover flex items-center gap-2 text-base-content/90 hover:text-primary/80 transition-colors py-1">
                    <IoLocationOutline className="text-xl" />
                    <span>{settings?.address}</span>
                </a>
            </nav>
            <nav className="flex flex-col gap-2 min-w-[180px]">
                <h6 className="footer-title text-base font-bold mb-2 text-primary/90 flex items-center gap-2">{t('about-us') || 'About Us'}</h6>
                <Link href="/about" className="group flex items-center gap-2 transition-colors hover:text-primary/80 text-base-content/90 py-1 font-medium">
                    <FiChevronRight className="text-base group-hover:translate-x-1 transition-transform" />
                    <span className="underline-offset-4 group-hover:underline">{t('about-us') || 'About Us'}</span>
                </Link>
                <Link href="/faq" className="group flex items-center gap-2 transition-colors hover:text-primary/80 text-base-content/90 py-1 font-medium">
                    <FiChevronRight className="text-base group-hover:translate-x-1 transition-transform" />
                    <span className="underline-offset-4 group-hover:underline">{t('faq') || 'FAQ'}</span>
                </Link>
            </nav>
            <div className="w-full flex flex-col items-center mt-10 col-span-full">
                <div className="border-t border-base-300 w-full my-4"></div>
                <p className="text-xs text-base-content/60 tracking-wide">© 2025 Q me. All rights reserved.</p>
            </div>
        </footer>