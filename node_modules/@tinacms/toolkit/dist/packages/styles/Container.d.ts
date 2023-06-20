/// <reference types="react" />
interface ContainerPropse {
    size?: 'medium' | 'large';
    children?: any;
}
export declare const Container: ({ children, size, ...props }: ContainerPropse) => JSX.Element;
export {};
