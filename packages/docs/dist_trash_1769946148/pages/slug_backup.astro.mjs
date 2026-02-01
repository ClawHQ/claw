import { g as getCollection } from '../chunks/_astro_content_B-blkXYm.mjs';
export { renderers } from '../renderers.mjs';

async function getStaticPaths() {
  const docs = await getCollection("docs");
  return docs.map((doc) => ({
    params: { slug: doc.id }
  }));
}
const GET = async ({ params }) => {
  const slug = params.slug || "index";
  const docs = await getCollection("docs");
  const doc = docs.find((d) => d.id === slug);
  if (!doc) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(doc.body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
