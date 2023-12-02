import React from 'react'

export default function Dashboard() {
    return (
    <div
    style={{
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '91vh',
        display: 'flex', // Use flexbox for layout
        justifyContent: 'space-around', // Adjust this to change the spacing
        alignItems: 'center',
        flexDirection: 'row', // Horizontal layout
        flexWrap: 'wrap',
    }}
>

            <div style={{ width: '50%', boxSizing: 'border-box', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <iframe
                    title="Chart 1"
                    width="600"
                    height="400"
                    src="https://charts.mongodb.com/charts-project-0-scycm/embed/charts?id=6568fbf8-517a-4b56-80f6-fdc2cf19cf3d&maxDataAge=60&theme=light&autoRefresh=true"
                    frameBorder="0"
                    ></iframe>
            </div>

            <div style={{ width: '50%', boxSizing: 'border-box', padding: '10px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <iframe
                title="Chart 1"
                width="600"
                height="400"
                src="https://charts.mongodb.com/charts-project-0-scycm/embed/charts?id=6568fc73-57a8-422c-8c74-c87668f021e1&maxDataAge=60&theme=light&autoRefresh=true"
                frameBorder="0"
                ></iframe>
            </div>

            <div style={{ width: '50%', boxSizing: 'border-box', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <iframe
                    title="Chart 1"
                    width="600"
                    height="450"
                    src="https://charts.mongodb.com/charts-project-0-scycm/embed/charts?id=656a890f-c2a7-4a4b-8a32-5d3f9b22c253&maxDataAge=60&theme=light&autoRefresh=true"
                    frameBorder="0"
                    ></iframe>
            </div>

            <div style={{ width: '50%', boxSizing: 'border-box', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <iframe
                    title="Chart 1"
                    width="600"
                    height="450"
                    src="https://charts.mongodb.com/charts-project-0-scycm/embed/charts?id=656a8ddb-ad5a-46eb-8770-262e8d4e6488&maxDataAge=60&theme=light&autoRefresh=true"
                    frameBorder="0"
                    ></iframe>
            </div>
                
            <div style={{ width: '50%', boxSizing: 'border-box', padding: '10px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <iframe
                    title="Chart 1"
                    width="600"
                    height="450"
                    src="https://charts.mongodb.com/charts-project-0-scycm/embed/charts?id=6568fec9-922a-47bf-8177-58c4e6949a98&maxDataAge=60&theme=light&autoRefresh=true"
                    frameBorder="0"
                    ></iframe>
            </div>

            <div style={{ width: '50%', boxSizing: 'border-box', padding: '10px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <iframe
                    title="Chart 1"
                    width="600"
                    height="450"
                    src="https://charts.mongodb.com/charts-project-0-scycm/embed/charts?id=6568ffff-92bb-49ff-891d-b81224aa8a58&maxDataAge=60&theme=light&autoRefresh=true"
                    frameBorder="0"
                    ></iframe>
            </div>

    </div>

    )
}
