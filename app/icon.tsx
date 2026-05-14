import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

const faviconPath = join(process.cwd(), "public", "favicon.png");
const faviconBase64 = readFileSync(faviconPath).toString("base64");
const faviconDataUrl = `data:image/png;base64,${faviconBase64}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(180deg, #f7f0e6 0%, #efe2cf 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#6f3f25",
            borderRadius: 112,
            boxShadow: "0 28px 70px rgba(63, 34, 21, 0.24)",
            display: "flex",
            height: 384,
            justifyContent: "center",
            padding: 48,
            width: 384,
          }}
        >
          <img
            alt="Cafe La Fe"
            src={faviconDataUrl}
            style={{ height: 288, objectFit: "contain", width: 288 }}
          />
        </div>
      </div>
    ),
    size,
  );
}
