import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** The AR monogram, drawn at build time so it stays crisp in the tab. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#01070b",
          color: "#ddc78e",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "-2px",
          borderRadius: 14,
        }}
      >
        AR
      </div>
    ),
    size,
  );
}
