export interface ButtonType {
    type: 'primary' | 'secondary',
    text: string,
    action: () => void ,
    style?: CSSProperties,
    customClass?: string
}