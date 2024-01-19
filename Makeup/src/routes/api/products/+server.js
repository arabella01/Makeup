import db from '$lib/db';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const product = await request.json();
	const result = await db.createProduct(product);
	return json({ id: result });
}
