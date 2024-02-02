import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Link from "next/link";

export default function ButtonHover() {
  return (
    <div className="z-10 fixed bottom-2 ">
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <Link href={"/chatwithemail"}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, left: 16 }}
            icon={<SpeedDialIcon />}></SpeedDial>
        </Link>
      </Box>
    </div>
  );
}
