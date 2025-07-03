import styled from '@emotion/styled';
import { H1Title, H1TitleFontColor } from 'twenty-ui/display';

const data = [
 {
  issue_type:"Forgotten Password",
  avg_resolution_time: "1hr 15mins",
  sla_goal: "2hrs",
  sla_met: "96%"
 },
 {
  issue_type:"Product Inquiry",
  avg_resolution_time: "1hr 45mins",
  sla_goal: "2hrs",
  sla_met: "99%"
 },
 {
  issue_type:"Change Contact Information",
  avg_resolution_time: "50mins",
  sla_goal: "1hrs",
  sla_met: "85%"
 },
 {
  issue_type:"Email not Received",
  avg_resolution_time: "2hr 30mins",
  sla_goal: "2hrs",
  sla_met: "83%"
 },
 {
  issue_type:"Feature Requests",
  avg_resolution_time: "3hr 05mins",
  sla_goal: "2hrs",
  sla_met: "100%"
 },
 {
  issue_type:"System Downtime Report",
  avg_resolution_time: "12hrs 5mins",
  sla_goal: "22hrs",
  sla_met: "70%"
 },
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
const Td = styled.td`
  padding: 12px;
  text-align: center;
`

export default function TicketSummary(){
    return(
        <MainContainer>
            <TitleContainer>
                <PageTitle title="Resolution Time Report" fontColor={H1TitleFontColor.Primary}/>
                <StyledText>Tracks average time taken to resolve tickets based on issue type.</StyledText>
            </TitleContainer>
          <div style={{background:'rgba(255, 255, 255, 1)', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <TableWrapper>
                    <Table >
                        <THead> 
                            <Tr style={{
                              background:'rgba(1, 43, 84, 1)',
                            }}>
                                <Th style={{fontSize: '16px', textAlign:'left', paddingLeft: '30px'}}>Issue Type</Th>
                                <Th style={{padding: "12px", fontSize: '16px'}}>Avg. Resolution Time</Th>
                                <Th style={{padding: "12px", fontSize: '16px'}}>SLA Goal</Th>
                                <Th style={{padding: "12px", fontSize: '16px'}}>SLA Met</Th>
                            </Tr>
                        </THead>
                        <tbody>
                            {data.map(({issue_type, avg_resolution_time, sla_goal, sla_met},index)=>(
                                <Tr style={{background: index%2==0? 'white': 'rgba(243, 249, 255, 1)'}}>
                                    <td style={{textAlign: 'left',paddingLeft: '30px'}}>{issue_type}</td>
                                    <Td>{avg_resolution_time}</Td>
                                    <Td>{sla_goal}</Td>
                                    <Td>{sla_met}</Td>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>
            </div>
        </MainContainer>
    )
}