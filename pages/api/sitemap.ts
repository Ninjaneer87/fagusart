import { NextApiHandler } from "next";
import { SitemapStream } from "sitemap";
import { streamToPromise } from "sitemap/dist/lib/sitemap-stream";
import { Readable } from "stream";

export const sitemap: NextApiHandler = async (req, res) => {
  const link = { url: "/", changefreq: "monthly", priority: 0.3 };
  const links = [link];
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
  const xmlContent = await streamToPromise(Readable.from(links).pipe(stream));
  const xmlString = xmlContent.toString();

  res.writeHead(200, { "Content-Type": "application/xml" });
  res.end(xmlString);
};

export default sitemap;
