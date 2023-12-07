export type serverAction = {
    serverAction(formData: FormData): Promise<void>
}