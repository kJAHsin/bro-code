const classes = (el) => {
    let classList = [];

    switch (el) {
        case "content-wrapper":
            classList = [
                "min-w-[15rem]",
                "max-w-[1068px]",
                "mx-auto",
                "flex"
            ];
            break;
        case "header":
            classList = [
                "py-8",
                "px-2",
                "border-b-2",
            ];
            break;
        case "logo":
            classList = [
                "font-serif",
                "text-gold",
                "text-3xl",
                "font-bold",
            ];
            break;
        case "logo-img":
            classList = [
                "bg-DRM-logo",
                "bg-center",
                "bg-no-repeat",
                "bg-contain",
                "block",
                "w-24",
                "aspect-square"
            ];
            break;
        case "nav":
            classList = [
                "flex",
                "space-x-[4vw]",
                "ml-auto",
                "mt-auto"
            ];
            break;
        case "footer":
            classList = [
                "bg-darkGrey",
                "mt-auto"
            ];
            break;
        case "footer-text":
            classList = [
                "text-white",
            ];
            break;
    }

    return classList.join(" ")
}

export default classes