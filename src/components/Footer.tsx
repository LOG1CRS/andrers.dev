import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <div>{footer.left}</div>
        <div>{footer.right}</div>
      </div>
    </footer>
  );
}
