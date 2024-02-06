const classes = (el) => {
    let classList = [];

    switch (el) {
        case "content-wrapper":
            classList = [
                "min-w-[15rem]",
                "max-w-[1368px]",
                "mx-auto",
                "grid",
                "relative",
                "isolate"
            ];
            break;
        case "header":
            classList = [
                "px-2",
                "relative",
                "border-b-2",
                "border-b-darkGrey",
                "h-fit"
            ];
            break;
        case "nav":
            classList = [
                "flex",
                "flex-col", 
                "fixed",
                "top-0",
                "left-0",
                "bg-black",
                "text-white",
                "w-1/3",
                "h-screen",
                "-translate-x-full",
                "pt-24",
                "px-0.5",
                "text-end",
                "transition-transform",
                "duration-1000",
                "ease-in-out",
                "z-10"
            ];
            break;
        case "nav-links":
            classList = [
                "text-gold",
                "border-2",
                "border-transparent", 
                "border-b-gold",
                "py-8",
                "text-center",
                "hover:border-gold",
                "transition",
                "duration-700"
            ];
            break;
        case "hamburger-toggle-btn":
            classList = [
                "z-20",
                "absolute",
                "bottom-3",
                "left-1/2",
                "-translate-x-1/2",
                "py-2",
                "px-6",
                "border-2",
                "border-gold",
                "rounded-sm",
                "bg-gradient-to-r",
                "from-transparent",
                "to-50%",
                "from-50%",
                "to-gold",
                "bg-quadruple",
                "bg-left",
                "group",
                "hover:bg-right",
                "hover:border-lightGrey",
                "transition-all",
                "duration-700",
                "active:border-darkGrey",
                "hover:bottom-3.5"
            ];
            break;
        case "hamburger-toggle-icon":
            classList = [
                "text-gold",
                "group-hover:text-white",
                "transition-all",
                "delay-75",
                "duration-700"
            ]
            break;
        case "logo":
            classList = [
                "bg-gradient-to-b",
                "from-transparent",
                "to-40%",
                "to-white",
                "mx-auto",
                "z-10",
                "px-8",
                "rounded-b-2xl"
            ];
            break;
        case "logo-img":
            classList = [
                "bg-DRM-logo__full",
                "bg-contain",
                "bg-no-repeat",
                "bg-bottom",
                "block",
                "h-48",
                "aspect-video",
                "mb-32",
                "relative",
                "after:content['']",
                "after:absolute",
                "after:right-8",
                "after:left-8",
                "after:-bottom-2",
                "after:h-1.5",
                "after:bg-gold",
                "after:rounded-full"
            ];
            break;
        case "viking-lattice":
            classList = [
                "bg-viking-lattice",
                "bg-repeat-x",
                "bg-contain",
                "absolute",
                "inset-0",
                "border-x-2",
                "border-x-gold"
            ];
            break;
        case "footer":
            classList = [
                "bg-darkGrey",
                "py-12",
                "absolute",
                "bottom-0",
                "left-0",
                "right-0",
                "z-0"
            ];
            break;
        case "footer-text":
            classList = [
                "text-white",
                "text-center",
                "text-serif"
            ];
            break;
    }

    return classList.join(" ")
}

export default classes