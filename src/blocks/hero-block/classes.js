import classnames from "classnames"

export const columnCardClasses = classnames(
    "hover:shadow-lg",
    "hover:border-transparent",
    "hover-translate-y-n10",
    "rounded-lg",
    "border-2",
    "border-indigo-500",
    "text-indigo-600",
    "group-hover:text-gray-900",
    "transition",
    "duration-300",
    "transform",
    "hover:-translate-y-2",
    "rounded-lg",
    "p-3"
)

export const heroScrollClasses = classnames(
    "relative",
    "left-72",
    "bottom-4",
    "w-5",
    "h-10",
    "-ml-4",
    "border",
    "rounded-full",
    "hover:opacity-40",
    "duration-300",
)

export const socialLinkClasses = classnames(
    "block",
    "px-3",
    "py-2",
    "text-base",
    "font-medium",
    "hover:text-indigo-500",
    "transform",
    "duration-200"
)

export const heroFooterClasses = classnames(
    "w-full",
    "absolute",
    "left-0",
    "bottom-0",
    "px-2",
    "grid",
    "grid-cols-4",
    "gap-x-32"
)
