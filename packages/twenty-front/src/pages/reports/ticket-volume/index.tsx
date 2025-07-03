import styled from '@emotion/styled';
import { H1Title, H1TitleFontColor } from 'twenty-ui/display';

const data = [
  {
    issue_type: "Login Issues",
    ticket_count: 120,
    percentage: '24%'
  },
  {
    issue_type: "Password Resets",
    ticket_count: 80,
    percentage: '16%'
  },
  {
    issue_type: "Feature Requests",
    ticket_count: 40,
    percentage: '8%'
  },
  {
    issue_type: "Email Delivery Problems",
    ticket_count: 60,
    percentage: '12%'
  },
  {
    issue_type: "General Inquiries",
    ticket_count: 120,
    percentage: '24%'
  },
  {
    issue_type: "Others",
    ticket_count: 80,
    percentage: '16%'
  },
]

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

const Td = styled.td`
 padding:12px;
 text-align: center;
`

export default function TicketSummary(){
    return(
        <MainContainer>
            <TitleContainer>
                <PageTitle title="Ticket Volume by Category" fontColor={H1TitleFontColor.Primary}/>
                <StyledText>Identifies trends and problem areas based on the volume of tickets by category</StyledText>
            </TitleContainer>
          <div style={{background:'rgba(255, 255, 255, 1)', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <TableWrapper>
                    <Table>
                        <THead> 
                            <Tr
                            style={{
                              background:'rgba(1, 43, 84, 1)',
                            }}>
                                <Th style={{padding: "12px", fontSize: '16px',  textAlign:'left'}}>Category</Th>
                                <Th style={{padding: "12px", fontSize: '16px',}}>Ticket this Month</Th>
                                <Th style={{padding: "12px", fontSize: '16px'}}>Percentage of Total</Th>
                            </Tr>
                        </THead>
                        <tbody>
                            {data.map(({issue_type,percentage,ticket_count},index)=>(
                                <Tr style={{background: index%2==0? 'white': 'rgba(243, 249, 255, 1)'}}>
                                    <td style={{padding: '12px', textAlign:'left'}}>{issue_type}</td>
                                    <Td>{ticket_count}</Td>
                                    <Td>{percentage}</Td>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>
            </div>
        </MainContainer>
    )
}