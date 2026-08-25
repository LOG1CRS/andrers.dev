/**
 * The hero's light field: five blurred leaks over pure black, each on its own
 * loop so the motion never visibly repeats. `mirrored` flips it for the
 * contact block so the page closes the way it opened.
 */
export function Beams({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <>
      <div className="beams">
        {mirrored ? (
          <>
            <div className="beam bm3" style={{ right: "auto", left: "-26%", top: "-30%" }} />
            <div className="beam bm1" style={{ left: "auto", right: "-30%", top: "-34%" }} />
            <div className="beam bm2" style={{ left: "auto", right: "-22%", top: "-20%" }} />
            <div className="beam bm4" style={{ right: "auto", left: "-20%", top: "24%" }} />
          </>
        ) : (
          <>
            <div className="beam bm3" />
            <div className="beam bm4" />
            <div className="beam bm1" />
            <div className="beam bm2" />
            <div className="beam bm5" />
          </>
        )}
      </div>
      <div className={mirrored ? "beam-veil mirrored" : "beam-veil"} />
      <div className="grain" />
      {!mirrored && <div className="fade-b" />}
    </>
  );
}
