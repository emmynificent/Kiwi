import Link from 'next/link'

const tabs = [
    {label: 'All', href:'/all'},
    {label: 'Bids', href:'/bids'},
    {label: 'Communities', href:'/communities'},
    {label: 'Archived', href:'archived'},
]
export default function MessageLayout({
    children,
}:
{
    children: React.ReactNode
}){
    return (
        <div style={{maxWidth: 600, margin: '0 auto'}}>

            <h2 style={{padding: '16px'}}> Messages</h2>

            <nav style={{display: 'flex', borderBottom: '1px solid #eee'}}>
                {tabs.map((tab) =>(
                    <Link
                    key={tab.href}
                    href={tab.href}
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '12px 0',
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: 500,
                    }}>
                        {tab.label}
                    </Link>
                ))}
            </nav>
        <div>{children}</div>

        </div>
    )
}