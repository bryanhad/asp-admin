export async function POST(req: Request){
    try {
        const {email, password} = await req.json()
        //validate email & password
        // e.g. email is email password match minimum length, no special char
        console.log(email, password)

    } catch (err) {
        console.log(err)
    }
}