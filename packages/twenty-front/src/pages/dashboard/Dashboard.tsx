import styled from '@emotion/styled';
import { IconAlertTriangleFilled, IconCircleCheckFilled, IconListDetails, IconMailFilled } from '@tabler/icons-react';
import { H1Title, H1TitleFontColor } from 'twenty-ui/display';
import { Card } from "twenty-ui/layout";


const data = [
    {
        ticketId: 'TCK-001',
        dateReceived: '2024-06-01',
        assignedTo: 'Jane Doe',
        clientName: 'Acme Corp',
        email: 'jane@acme.com',
        subject: 'Request for information',
    },
    {
        ticketId: 'TCK-002',
        dateReceived: '2024-06-02',
        assignedTo: 'John Smith',
        clientName: 'Globex Inc',
        email: 'john@globex.com',
        subject: 'System not responding',
    },
    {
        ticketId: 'TCK-003',
        dateReceived: '2024-06-03',
        assignedTo: 'Mary Johnson',
        clientName: 'Soylent Corp',
        email: 'mary@soylent.com',
        subject: 'Password reset request',
    },
    {
        ticketId: 'TCK-004',
        dateReceived: '2024-06-04',
        assignedTo: 'Tom Baker',
        clientName: 'Initech',
        email: 'tom@initech.com',
        subject: 'Unable to login',
    },
    {
        ticketId: 'TCK-005',
        dateReceived: '2024-06-05',
        assignedTo: 'Linda Park',
        clientName: 'Umbrella Corp',
        email: 'linda@umbrella.com',
        subject: 'Account locked',
    },
    {
        ticketId: 'TCK-006',
        dateReceived: '2024-06-06',
        assignedTo: 'Mike Ross',
        clientName: 'Cyberdyne Systems',
        email: 'mike@cyberdyne.com',
        subject: 'Data sync issue',
    },
    {
        ticketId: 'TCK-007',
        dateReceived: '2024-06-07',
        assignedTo: 'Rachel Green',
        clientName: 'Stark Industries',
        email: 'rachel@stark.com',
        subject: 'Feature request',
    },
    {
        ticketId: 'TCK-008',
        dateReceived: '2024-06-08',
        assignedTo: 'Steve Rogers',
        clientName: 'Wayne Enterprises',
        email: 'steve@wayne.com',
        subject: 'Security concern',
    },
    {
        ticketId: 'TCK-009',
        dateReceived: '2024-06-09',
        assignedTo: 'Bruce Wayne',
        clientName: 'Daily Planet',
        email: 'bruce@dailyplanet.com',
        subject: 'Application crash report',
    },
    {
        ticketId: 'TCK-010',
        dateReceived: '2024-06-10',
        assignedTo: 'Diana Prince',
        clientName: 'Oscorp',
        email: 'diana@oscorp.com',
        subject: 'Integration inquiry',
    },
    {
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },
    {
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },{
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },{
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },
    {
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },{
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },{
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },
    {
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },{
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },{
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },
    {
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },{
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    },{
        ticketId: 'TCK-011',
        dateReceived: '2024-06-11',
        assignedTo: 'Clark Kent',
        clientName: 'Pied Piper',
        email: 'clark@piedpiper.com',
        subject: 'Billing issue',
    },
    {
        ticketId: 'TCK-012',
        dateReceived: '2024-06-12',
        assignedTo: 'Tony Stark',
        clientName: 'Hooli',
        email: 'tony@hooli.com',
        subject: 'Performance degradation',
    }
]

const reportData = [
    {
        icon: <IconMailFilled style={{ width: '35px', height: '35px',color:'white' }}/>,
        title: 'Total Email Tickets',
        count: 80
    },
    {
        icon: <IconListDetails style={{ width: '35px', height: '35px',color:'white' }}/>,
        title: 'Pending Tickets',
        count: 50
    },
    {
        icon: <IconCircleCheckFilled style={{ width: '35px', height: '35px',color:'white' }}/>,
        title: 'Resolved Tickets',
        count: 30
    },
    {
        icon: <IconAlertTriangleFilled style={{ width: '35px', height: '35px',color:'white' }}/>,
        title: 'High Priority Tickets',
        count: 48
    }
]

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(2)};
    // background: green;
    gap: 12px;
    box-sizing: border-box;
`
const DashBoardHeader = styled.div`
    width: calc(100% - ${({ theme }) => theme.spacing(8)});
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: rgba(1, 43, 84, 1);
    padding: 16px;
    border-radius: 8px;
`
const DashboardBody = styled.div`
    // background: yellow;
    width: calc(100% - ${({ theme }) => theme.spacing(8)});
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 auto;
`
const StyledH1Title = styled(H1Title)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(0)};
    color: white;
`
const DashboardReport = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
`
const GridReport = styled.div`
    // background: grey;
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 2 columns
    grid-template-rows: repeat(2, auto);  // 2 rows (optional)
    gap: ${({ theme }) => theme.spacing(4)};
    flex: 0.4;
`
const Graph = styled.div`
    flex: 0.6;
    // background: grey;
    display: flex;
    justify-content: center;
    align-items: center;
`
const GridTile = styled(Card)`
    background:rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    padding: 20px 12px;
`
const Avatar = styled.div`
    border-radius: 100%;
    padding: 8px;
    background: rgba(21, 118, 226, 1);
    display: flex;
    justify-content: center;
    align-items: center;
`

const InnerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 0 0 8px;
`

const Text = styled.p`
    margin: 0;
    padding: 0;
`
const Table = styled.table`
    width: 100%;
    margin: 0 auto;
    padding: 12px;
    border-radius: 4px;
`

const THead = styled.thead`
    background: white;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 12px;
`
const Tr = styled.tr`
    &:hover {
        background: #f5f6fa;
    }
    padding: 12px;
`
const Th = styled.th`
    text-align: left;
`
const TableWrapper = styled.div`
    max-height: 280px;
    overflow-y: auto;
    border-radius: 8px;
`

export default function Dashboard() {
    const date = new Date()
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    const textDate = `${day} ${month} ${year}, ${weekday}`;
  return (
    <MainContainer>

        <DashBoardHeader>
            <StyledH1Title title="Overview" fontColor={H1TitleFontColor.Primary}/>
            <StyledH1Title title={textDate} fontColor={H1TitleFontColor.Primary}/>
        </DashBoardHeader>

        <DashboardBody>
            <DashboardReport>
                <GridReport>
                    {reportData.map(({icon, title, count})=>(
                        <GridTile>
                            <Avatar>
                                {icon}
                            </Avatar>
                            <InnerCard>
                                <Text>{title}</Text>
                                <Text style={{fontSize: '24px', fontWeight: 700}}>{count}</Text>
                            </InnerCard>
                        </GridTile>
                    ))}
                </GridReport>
                <Graph>
                    Graph Here
                </Graph>
            </DashboardReport>
            <div style={{background:'rgba(255, 255, 255, 1)', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <Text style={{position: 'sticky', top: 0, zIndex: 1, fontSize: '20px'}}>Recent Inquiries</Text>
                <TableWrapper>
                    <Table>
                        <THead> 
                            <Tr>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'left'}}>Ticket Id</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'left'}}>Date Received</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'left'}}>Assigned to</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'left'}}>Client Name</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'left'}}>Email</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'left'}}>Subject/Request</Th>
                            </Tr>
                        </THead>
                        <tbody>
                            {data.map(({ticketId,dateReceived,assignedTo,clientName, email, subject})=>(
                                <Tr>
                                    <td style={{padding: '12px', textAlign:'left'}}>{ticketId}</td>
                                    <td>{dateReceived}</td>
                                    <td>{assignedTo}</td>
                                    <td>{clientName}</td>
                                    <td>{email}</td>
                                    <td>{subject}</td>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>
            </div>
        </DashboardBody>
    </MainContainer>
  )
}