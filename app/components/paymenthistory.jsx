'use client'
import {Button, Drawer} from 'antd';
import {useSession} from 'next-auth/react';
import {useEffect, useState} from 'react';
import Loader from './loader';
const RecentPayment = () =>
{
    const {data: session} = useSession();
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const fetchData = async () =>
    {
        try
        {
            setLoading(true)
            const response = await fetch("/api/getall-payments");
            if (response.ok)
            {
                const result = await response.json();
                console.log(result);
                if (result && result.payments)
                {
                    setData(result.payments);
                    console.log(data);
                    setLoading(false)
                } else
                {
                    console.error("Unexpected response format:", result);
                }
            } else
            {
                console.error("Error fetching data:", response.statusText);
            }
        } catch (error)
        {
            console.error("Error fetching events:", error);
            toast.error("Unexpected error occurred");
        }
    };


    const userEmailAccount = session?.user?.email;


    const filterPayments = data.filter(
        (pay) => pay.
            creator === userEmailAccount
    );
    console.log(filterPayments)

    useEffect(() =>
    {
        fetchData();

    }, []);
    const showDrawer = () =>
    {
        setOpen(true);
    };
    const onChange = (e) =>
    {
        setPlacement(e.target.value);
    };
    const onClose = () =>
    {
        setOpen(false);
    };
    return (
        <>

            <Button onClick={showDrawer} onChange={onChange} className='text-white bg-gray-500 w-full rounded-3xl h-[40px]'>
                Recent Payment
            </Button>

            <Drawer
                title="My Payment History"
                placement="top"
                width={500}
                onClose={onClose}
                open={open}

            >
                <div>
                    {
                        loading ? (<Loader />) : (
                            <div>
                                {
                                    filterPayments.map((e) =>
                                    {
                                        return (
                                            <div key={e.id}>
                                                <p>{e.id}</p>
                                                <p>{e.name}</p>
                                                <p>{e.cardNumber}</p>
                                                <p>{e.price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </Drawer>
        </>
    );
};
export default RecentPayment;