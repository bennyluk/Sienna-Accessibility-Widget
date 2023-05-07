export default interface IToolConfig {
    id?: string,
    selector?: string,
    childrenSelector?: string[],
    styles?: {
        [key: string]: any
    },
    css?: string,
    enable?: boolean
}