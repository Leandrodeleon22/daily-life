import { readFile } from "fs/promises";
import { promises as fs } from "fs";
import path from "path";

export async function GET(req, res) {
  // process.cwd() is the root of the Next.js app

  const { searchParams } = new URL(req.url);
  const message = searchParams.get("message");
  try {
    const buffer = await readFile(
      path.join(process.cwd(), `public/assets/${message}`)
    );

    // set the headers to tell the browser to download the file
    const headers = new Headers();
    // remember to change the filename `test.pdf` to whatever you want the downloaded file called
    headers.append("Content-Disposition", `attachment; filename="${message}"`);
    headers.append("Content-Type", "application/pdf");

    return new Response(buffer, {
      headers,
    });
  } catch (error) {
    return new Response("File not found", {
      status: 404,
    });
  }
}
