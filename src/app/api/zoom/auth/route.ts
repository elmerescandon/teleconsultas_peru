import {zoomAuthURL} from "@/utils/constants/APIConstants";
import {NextResponse} from "next/server";

export async function GET() {
  const res = await fetch(
    `${zoomAuthURL}${process.env.NEXT_PUBLIC_ZOOM_ACCOUNT_ID}`,
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.NEXT_PUBLIC_ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return NextResponse.json({data});
}
