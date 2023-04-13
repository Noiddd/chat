import * as cheerio from "cheerio";
import { Document } from "langchain/document";

const webScrape = async () => {
  const url =
    "https://www.hdb.gov.sg/cs/infoweb/residential/buying-a-flat/flat-and-grant-eligibility/couples-and-families";

  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const text = $(".accordion")
    .clone()
    .find("div.elementor, style")
    .remove()
    .end()
    .text();

  const cleanedText = text.replace(/\s+/g, " ").trim();

  const textLength = cleanedText?.match(/\b\w+\b/g)?.length ?? 0;

  const metadata = { source: url, textLength };

  return [new Document({ pageContent: cleanedText, metadata })];

  //   data.then((res) => {
  //     const $ = cheerio.load(res);
  //     const text = $(".accordion")
  //       .clone()
  //       .find("div.elementor, style")
  //       .remove()
  //       .end()
  //       .text();

  //     const cleanedText = text.replace(/\s+/g, " ").trim();

  //     const textLength = cleanedText?.match(/\b\w+\b/g)?.length ?? 0;

  //     const metadata = { source: url, textLength };

  //     const loader = [new Document({ pageContent: cleanedText, metadata })];

  //     return loader;
  //   });
};

export default webScrape;
