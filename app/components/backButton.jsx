import Link from "next/link";

export default function BackButton()
{
    return (
        <div className="fixed top-28 left-14">
            <Link href={'/userview-dashboard'}>
                <button className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </Link>
        </div>
    )
}