interface ButtonProps {
    disabled?: boolean;
    type?: buttonTypes;
    size?: buttonSize;
    className?: String;
    loading?: boolean;
    onClick?: (e) => void;
}

interface ButtonAreaProps {
    direction?: String;
    className?: String;
}

enum buttonTypes {
    primary = 'primary',
    default = 'default',
    warn = 'warn'
}

enum buttonSize {
    small = 'small',
    normal = 'normal'
}

export {
    ButtonProps,
    ButtonAreaProps
}