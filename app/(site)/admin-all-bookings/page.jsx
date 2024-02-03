"use client";
import AdminNavigationPanel from "@/app/components/admin-navigation";
import Footer from "@/app/components/footer";
import LoadingScreen from "@/app/components/loading.component";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";

export default function GetAllBooking() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/get-all-booking");
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        if (result && result.bookings) {
          setData(result.bookings);
          console.log(data);
        } else {
          console.error("Unexpected response format:", result);
        }
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Unexpected error occurred");
    }
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <div className="w-[85%] mx-auto mt-10">
            <AdminNavigationPanel />
          </div>

          <div className="w-[85%] mx-auto mt-24">
            <h1 className="text-2xl font-semibold text-center">
              Events Booking lists
            </h1>
          </div>
          <div className="w-[85%] mx-auto mt-10">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <p className="text-xl font-semibold">User Name</p>
                      &nbsp;
                    </TableCell>
                    <TableCell align="right">
                      <p className="text-xl font-semibold">User Email</p>
                      &nbsp;
                    </TableCell>
                    <TableCell align="right">
                      <p className="text-xl font-semibold">Seller Name</p>
                      &nbsp;
                    </TableCell>
                    <TableCell align="right">
                      <p className="text-xl font-semibold">Catergory</p>
                      &nbsp;
                    </TableCell>
                    <TableCell align="right">
                      <p className="text-xl font-semibold">Price</p>
                      &nbsp;
                    </TableCell>
                    <TableCell align="right">
                      <p className="text-xl font-semibold">Booking Data</p>
                      &nbsp;
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      <TableCell component="th" scope="row">
                        {row.userName}
                      </TableCell>
                      <TableCell align="right">{row.userEmail}</TableCell>
                      <TableCell align="right">{row.sellerEmail}</TableCell>
                      <TableCell align="right">{row.catergory}</TableCell>
                      <TableCell align="right">Rs . {row.price}</TableCell>
                      <TableCell align="right">{row.createdAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
