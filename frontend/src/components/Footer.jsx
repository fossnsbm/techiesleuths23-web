import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-100 bottom-0 md:flex">
        <div className="flex flex-col justify-center md:flex-row md:justify-between text-white px-10 md:px-52 py-2 font-openSans text-[11px] ">
          <div
            className="text-center md:text-left lg:text-left mx-3 mt-4"
            style={{ paddingTop: 22 }}
          >
            <p style={{ color: "#2a2a3d" }}>
              © 2023 FOSS COMMUNITY OF NSBM &lt;/&gt; WITH ❤ BY the FOSS
              COMMUNITY OF NSBM
            </p>
          </div>
          <div
            className="text-center md:text-left lg:text-left mx-3"
            style={{ color: "#2a2a3d" }}
          >
            <Link to={"https://www.nsbm.ac.lk/"} target="_blank">
              NSBM Green University
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
