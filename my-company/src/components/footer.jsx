function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <div style={{ textAlign: "center" }}>
      <p>&copy;{year} Developed by Sadick Sulley</p>
    </div>
  );
}

export default Footer;
