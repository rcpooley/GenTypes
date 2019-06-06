export type FieldType = {
    name: string,
    numArgs: number,
    data?: Array<FieldType>
}