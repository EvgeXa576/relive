import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Прокручиваем окно в самый верх при изменении пути (pathname)
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;