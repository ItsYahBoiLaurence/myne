import styled from '@emotion/styled';
import { H1Title, H1TitleFontColor } from 'twenty-ui/display';

const data = [
  {
    date_range: "May 1, 2025",
    total_tickets: 18,
    open_tickets: 4,
    closed_tickets: 14,
    escalated_tickets: 2,
    sla_breached: 0
  },
  {
    date_range: "May 2, 2025",
    total_tickets: 22,
    open_tickets: 6,
    closed_tickets: 16,
    escalated_tickets: 1,
    sla_breached: 1
  },
  {
    date_range: "May 3, 2025",
    total_tickets: 19,
    open_tickets: 3,
    closed_tickets: 16,
    escalated_tickets: 0,
    sla_breached: 0
  },
  {
    date_range: "May 4, 2025",
    total_tickets: 25,
    open_tickets: 7,
    closed_tickets: 18,
    escalated_tickets: 3,
    sla_breached: 1
  },
  {
    date_range: "May 5, 2025",
    total_tickets: 21,
    open_tickets: 5,
    closed_tickets: 16,
    escalated_tickets: 1,
    sla_breached: 0
  },
  {
    date_range: "May 6, 2025",
    total_tickets: 17,
    open_tickets: 2,
    closed_tickets: 15,
    escalated_tickets: 0,
    sla_breached: 0
  },
  {
    date_range: "May 7, 2025",
    total_tickets: 24,
    open_tickets: 8,
    closed_tickets: 16,
    escalated_tickets: 2,
    sla_breached: 1
  },
  {
    date_range: "May 8, 2025",
    total_tickets: 20,
    open_tickets: 4,
    closed_tickets: 16,
    escalated_tickets: 1,
    sla_breached: 0
  },
  {
    date_range: "May 9, 2025",
    total_tickets: 23,
    open_tickets: 5,
    closed_tickets: 18,
    escalated_tickets: 1,
    sla_breached: 1
  },
  {
    date_range: "May 10, 2025",
    total_tickets: 20,
    open_tickets: 5,
    closed_tickets: 15,
    escalated_tickets: 1,
    sla_breached: 1
  },
  {
    date_range: "May 11, 2025",
    total_tickets: 19,
    open_tickets: 3,
    closed_tickets: 16,
    escalated_tickets: 0,
    sla_breached: 0
  },
  {
    date_range: "May 12, 2025",
    total_tickets: 26,
    open_tickets: 6,
    closed_tickets: 20,
    escalated_tickets: 2,
    sla_breached: 1
  },
  {
    date_range: "May 13, 2025",
    total_tickets: 21,
    open_tickets: 4,
    closed_tickets: 17,
    escalated_tickets: 0,
    sla_breached: 0
  },
  {
    date_range: "May 14, 2025",
    total_tickets: 18,
    open_tickets: 2,
    closed_tickets: 16,
    escalated_tickets: 0,
    sla_breached: 0
  },
  {
    date_range: "May 15, 2025",
    total_tickets: 22,
    open_tickets: 5,
    closed_tickets: 17,
    escalated_tickets: 1,
    sla_breached: 0
  },
  {
    date_range: "May 16, 2025",
    total_tickets: 20,
    open_tickets: 3,
    closed_tickets: 17,
    escalated_tickets: 0,
    sla_breached: 0
  },
  {
    date_range: "May 17, 2025",
    total_tickets: 23,
    open_tickets: 6,
    closed_tickets: 17,
    escalated_tickets: 2,
    sla_breached: 1
  },
  {
    date_range: "May 18, 2025",
    total_tickets: 19,
    open_tickets: 3,
    closed_tickets: 16,
    escalated_tickets: 0,
    sla_breached: 0
  },
  {
    date_range: "May 19, 2025",
    total_tickets: 24,
    open_tickets: 7,
    closed_tickets: 17,
    escalated_tickets: 2,
    sla_breached: 1
  },
  {
    date_range: "May 20, 2025",
    total_tickets: 21,
    open_tickets: 4,
    closed_tickets: 17,
    escalated_tickets: 1,
    sla_breached: 0
  }
];

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(2)};
    // background: green;
    gap: 24px;
    box-sizing: border-box;
    padding: 48px 72px;
`

const PageTitle =  styled(H1Title)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(0)};
    color: black;
    margin: 0;
    padding: 0;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const StyledText = styled.p`
    padding: 0;
    margin: 0;
`
const Text = styled.p`
    margin: 0;
    padding: 0;
`
const TableWrapper = styled.div`
    max-height: 500px;
    overflow-y: auto;
    border-radius: 8px;
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
    text-align: center;
    color: white;
`


export default function TicketSummary(){
    return(
        <MainContainer>
            <TitleContainer>
                <PageTitle title="Ticket Summary Report" fontColor={H1TitleFontColor.Primary}/>
                <StyledText>Give a snapshot of the volume and types of tickets.</StyledText>
            </TitleContainer>
          <div style={{background:'rgba(255, 255, 255, 1)', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <TableWrapper>
                    <Table>
                        <THead> 
                            <Tr style={{
                              background:'rgba(1, 43, 84, 1)',
                            }}>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'left'}}>Date Range</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'center'}}>Total Tickets</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'center'}}>Open Tickets</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'center'}}>Closed Tickets</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'center'}}>Escalated Tickets</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'center'}}>SLA Breached</Th>
                            </Tr>
                        </THead>
                        <tbody>
                            {data.map(({date_range,total_tickets,open_tickets, closed_tickets, escalated_tickets, sla_breached},index)=>(
                                <Tr style={{background: index%2==0? 'white':'rgba(243, 249, 255, 1)'}}>
                                    <td style={{padding: '12px', textAlign:'left'}}>{date_range}</td>
                                    <td  style={{padding: '12px', textAlign:'center'}}>{total_tickets}</td>
                                    <td  style={{padding: '12px', textAlign:'center'}}>{open_tickets}</td>
                                    <td  style={{padding: '12px', textAlign:'center'}}>{closed_tickets}</td>
                                    <td  style={{padding: '12px', textAlign:'center'}}>{escalated_tickets}</td>
                                    <td  style={{padding: '12px', textAlign:'center'}}>{sla_breached}</td>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>
            </div>
        </MainContainer>
    )
}