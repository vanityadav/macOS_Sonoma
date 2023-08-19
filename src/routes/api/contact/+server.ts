import { json } from '@sveltejs/kit';
import prisma from '$lib/server/prisma/PrismaClient';

export async function POST({ request }) {
	const data = await request.json();
	delete data.step;

	const res = await prisma.contact.create({ data });
	if (res) {
		return json({}, { status: 200, statusText: 'Success' });
	} else {
		return json({}, { status: 500, statusText: 'Error' });
	}
}
