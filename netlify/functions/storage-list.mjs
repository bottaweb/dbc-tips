import { getStore } from '@netlify/blobs';

export default async (req) => {
  try {
    const url = new URL(req.url);
    const prefix = url.searchParams.get('prefix') || '';

    const store = getStore('desserts-by-clement-tips');
    const { blobs } = await store.list({ prefix });
    const keys = blobs.map((b) => b.key);

    return new Response(JSON.stringify({ keys }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err && err.message ? err.message : err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config = { path: '/api/storage-list' };
