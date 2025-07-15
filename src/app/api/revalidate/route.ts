import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const secret = request.headers.get('x-revalidate-secret')

    if (secret !== process.env.REVALIDATE_SECRET) {
        return new NextResponse('Invalid secret', { status: 401 })
    }

    const body = await request.json()

    if (body._type === 'post' || body._type === 'project') {
        revalidatePath('/')
        console.log(`Revalidada la ruta / debido a un cambio en ${body._type}`);
        return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    return NextResponse.json({ revalidated: false, message: 'No hubo cambios relevantes' });
}