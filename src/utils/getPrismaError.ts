import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

export default function getPrismaError(err: PrismaClientKnownRequestError) {
    if (err.name === 'PrismaClientKnownRequestError') {
        switch (err.code) {
            case 'P2002': return "Input must be unique. Please choose a different one."
            case 'P2014': return "Cannot delete the record. Linked data exists."
            default: return`PrismaClientKnownRequestError. CODE: ${err.code}`
        }
    }
}
