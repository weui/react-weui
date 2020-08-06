export interface ButtonProps {
    disabled?: boolean;
    type?: buttonTypes;
    size?: buttonSize;
    className?: String;
    loading?: boolean;
    children?: React.ReactNode;
    onClick?: (e) => void;
}

export interface ButtonAreaProps {
    direction?: String;
    className?: String;
    children?: React.ReactNode;
}

export enum buttonTypes {
    primary = 'primary',
    default = 'default',
    warn = 'warn'
}

export enum buttonSize {
    small = 'small',
    normal = 'normal'
}

export enum buttonAreaDirection {
    horizontal = 'horizontal',
    vertical = 'vertical'
}
