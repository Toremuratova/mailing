export interface Message {
    id: number,
    author: {
        id: number,
        name: string
    },
    receiver: {
        id: number,
        name: string
    }
    title: string,
    text: string,
}