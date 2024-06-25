export interface TextType {
    type: 'h1' | 'h2' | 'p',
}

export interface TextInterface { 
    type: TextType, 
    text: string, 
    style?: CSSProperties 
    customClass?: string
}