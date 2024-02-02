import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import PropTypes from "prop-types";
import * as React from "react";

import Image from "next/image";
import logo from "../../public/logo/logo.png";

export default function GuidComponent() {
  const { data: session } = useSession();
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <button
        className="btn fixed bottom-28 left-6"
        onClick={() => document.getElementById("my_modal_4").showModal()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
          />
        </svg>
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example">
                <Tab label="English" {...a11yProps(0)} />
                <Tab label="Sinhala" {...a11yProps(1)} />
                <Tab label="Tamil" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="flex flex-col items-start justify-start gap-3">
                <Image src={logo} />
                <p>
                  Welcome to{" "}
                  <strong className="text-xl font-semibold">
                    {session?.user?.name} !!!
                  </strong>
                </p>
                <p>
                  First of all, you can visit your dashboard. On the dashboard,
                  you will find your name, email, and other relevant
                  information. You can navigate through the site using the menu,
                  where you'll see several buttons such as:
                </p>
                <div className="mt-5">
                  <ul>
                    <li>* Dashboard</li>
                    <li>* Events</li>
                    <li>* Logout</li>
                    <li>* etc</li>
                  </ul>
                </div>
                <p className="mt-5">
                  Additionally, you will notice a plus icon on the bottom left.
                </p>
                <p className="mt-5">
                  If you want to find a specific event, click on the 'Events'
                  button. This will take you to the events page, where you can
                  explore various events. Each event is displayed individually,
                  and you can click on them to get more details. If you wish to
                  book an event, simply click the 'Book' button. The respective
                  seller will receive an email notification.
                </p>
                <p>
                  You can also search for events in five different categories.
                  For example, if you navigate to the 'Wedding' category, you
                  will find only wedding events.
                </p>
                <p>
                  Now, let's go back to the dashboard by clicking the plus icon
                  button. This will lead you to a form page where you can find
                  the 'Visit Vendor Emails' button. Clicking this button allows
                  you to contact sellers directly. You can find sellers' emails
                  on this page, but this is entirely optional.
                </p>
                <p>
                  Thank you! Have a great experience! More tips are coming
                  soon."
                </p>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className="flex flex-col items-start justify-start gap-3">
                <Image src={logo} />
                <p>
                  ආයුබෝවන්{" "}
                  <strong className="text-xl font-semibold">
                    {session?.user?.name} !!!
                  </strong>
                </p>
                <p>
                  පළමුව, ඔබට ඔබගේ ඩැෂ්බෝර්ඩ් වෙත පිවිසෙනවා. ඩැෂ්බෝර්ඩ් එකේ, ඔබගේ
                  නම, විද්‍යුත් තැපෑල සහ වෙදත් තොරතුරුකරු සොයාගත හැකිය. මෙමින්
                  ඔබට වෙනස් වේගයක් සහිත පිරිසිදුක් පිළිබඳ ගොනුවේ යෙදීමක් සහිත
                  බොත්තම්:
                </p>
                <div className="mt-5">
                  <ul>
                    <li>* ඩැෂ්බෝර්ඩ්</li>
                    <li>* ක්‍රියාවලිය</li>
                    <li>* ඉවසිල්ල</li>
                    <li>* තවත්</li>
                  </ul>
                </div>

                <p className="mt-5">
                  එක්වූ අවස්ථාවක්, ඔබට පහසුවෙන් වේගයක් පිලිබඳ බොත්තම් තුළ ඇති
                  ලොවක් සොයාගත් බොත්තම්වලින් තෝරාගත්තේ සියලුම බොත්තම්. සෑම
                  බොත්තමක් සොයා ගැනීමට ඔබට හැකියාවක් වේ. බොත්තමක් සොයා ගැනීමට
                  සහිත කොටස්, බොත්තම වර්ගයක් ඇතුළු කොටස්වලින් ඔබට බොත්තම් සොයාගත
                  හැකිය.
                </p>
                <p>
                  හෝම් බොත්තමේ සෑහෙන කොටස්ක් හෝම් බොත්තම්වලින් සොයා ගත්තේ
                  'වෙඩින්' කොටස්. ඔබට එක්වූ පිවිසුම් කොටස්වලින් ඔබට හොඳයි දක්වා
                  බොත්තම් සොයාගැනීමේ හෝම්වල ස්වයංක්‍රියාවක් හෝම් ප්‍රාදේශීයාගේ
                  ඊමේල් එකට ලියාපදිංචි කළ හැකිය.
                </p>

                <p>
                  කරුණාකර, ඔබේ ඩැෂ්බෝර්ඩ් වෙත ආයුබෝවන්! අත්සන් ස්තුතියි! වැඩි
                  දුරට වේග ගැනුම් සඳහා වැඩි දුර එකතු වෙයි..."
                </p>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className="flex flex-col items-start justify-start gap-3">
                <Image src={logo} />
                <p>
                  வரவேற்கிறோம்{" "}
                  <strong className="text-xl font-semibold">
                    {session?.user?.name} !!!
                  </strong>
                </p>
                <p className="text-center">Comming Soon..</p>
              </div>
            </CustomTabPanel>
          </Box>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
