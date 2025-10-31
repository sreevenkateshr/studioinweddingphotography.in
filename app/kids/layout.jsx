import KidsNavbar from "../../app/kids/KidsNavbar";

export default function KidsLayout({ children }) {
  return (
    <>
      <KidsNavbar />
      <main>{children}</main>
    </>
  );
}
