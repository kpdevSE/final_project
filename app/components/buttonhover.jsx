import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Link from "next/link";

export default function ButtonHover() {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy", link: "/userview-dashboard" },
    { icon: <SaveIcon />, name: "Save", link: "/userview-dashboard" },
    { icon: <PrintIcon />, name: "Print", link: "/userview-dashboard" },
    { icon: <ShareIcon />, name: "Events", link: "/userview-dashboard" },
  ];
  return (
    <div className="z-10 fixed bottom-2 ">
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <Link href={"/chatwithemail"}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, left: 16 }}
            icon={<SpeedDialIcon />}>
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Link>
      </Box>
    </div>
  );
}
