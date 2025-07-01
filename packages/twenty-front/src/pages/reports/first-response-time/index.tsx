import styled from '@emotion/styled';
import { H1Title, H1TitleFontColor } from 'twenty-ui/display';

const data = [
  {
    agent_name: "John Laurence Burgos",
    avg_frt: 12,
    sla_goal: 15,
    sla_met: "96%"
  },
  {
    agent_name: "Mary Grace Santos",
    avg_frt: 10,
    sla_goal: 15,
    sla_met: "98%"
  },
  {
    agent_name: "Alex Cruz",
    avg_frt: 14,
    sla_goal: 15,
    sla_met: "93%"
  },
  {
    agent_name: "Diana Lopez",
    avg_frt: 9,
    sla_goal: 15,
    sla_met: "99%"
  },
  {
    agent_name: "Samuel Reyes",
    avg_frt: 11,
    sla_goal: 15,
    sla_met: "97%"
  },
  {
    agent_name: "Patricia Gomez",
    avg_frt: 13,
    sla_goal: 15,
    sla_met: "95%"
  },
  {
    agent_name: "Miguel Torres",
    avg_frt: 8,
    sla_goal: 15,
    sla_met: "99%"
  },
  {
    agent_name: "Sophia Ramirez",
    avg_frt: 10,
    sla_goal: 15,
    sla_met: "97%"
  },
  {
    agent_name: "Carlos Fernandez",
    avg_frt: 12,
    sla_goal: 15,
    sla_met: "96%"
  },
  {
    agent_name: "Isabella Mendoza",
    avg_frt: 11,
    sla_goal: 15,
    sla_met: "97%"
  },
  {
    agent_name: "Joshua Bautista",
    avg_frt: 14,
    sla_goal: 15,
    sla_met: "94%"
  },
  {
    agent_name: "Emily Castillo",
    avg_frt: 9,
    sla_goal: 15,
    sla_met: "98%"
  },
  {
    agent_name: "Ryan Navarro",
    avg_frt: 13,
    sla_goal: 15,
    sla_met: "95%"
  },
  {
    agent_name: "Chloe Dela Cruz",
    avg_frt: 10,
    sla_goal: 15,
    sla_met: "97%"
  },
  {
    agent_name: "Daniel Villanueva",
    avg_frt: 12,
    sla_goal: 15,
    sla_met: "96%"
  },
  {
    agent_name: "Hannah Santos",
    avg_frt: 11,
    sla_goal: 15,
    sla_met: "97%"
  },
  {
    agent_name: "Andrew Lim",
    avg_frt: 13,
    sla_goal: 15,
    sla_met: "94%"
  },
  {
    agent_name: "Nicole Ramos",
    avg_frt: 9,
    sla_goal: 15,
    sla_met: "98%"
  },
  {
    agent_name: "Kevin Garcia",
    avg_frt: 14,
    sla_goal: 15,
    sla_met: "93%"
  },
  {
    agent_name: "Laura Hernandez",
    avg_frt: 10,
    sla_goal: 15,
    sla_met: "97%"
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
              <PageTitle title="First Response Time Report" fontColor={H1TitleFontColor.Primary}/>
              <StyledText>Measures how quickly agents respond to new tickets. </StyledText>
          </TitleContainer>
            
          <div style={{background:'rgba(255, 255, 255, 1)', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <TableWrapper>
                    <Table>
                        <THead> 
                            <Tr style={{
                              background:'rgba(1, 43, 84, 1)',
                            }}>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'left'}}>Agent Name</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'center'}}>{`AVG FRT (mins)`}</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'center'}}>SLA Goal</Th>
                                <Th style={{padding: "12px", fontSize: '16px', textAlign:'center'}}>SLA Met</Th>
                            </Tr>
                        </THead>
                        <tbody>
                            {data.map(({agent_name, avg_frt,sla_goal,sla_met},index)=>(
                                <Tr style={{background: index%2==0? 'white': 'rgba(243, 249, 255, 1)'}}>
                                    <td style={{padding: '12px', textAlign:'left'}}>{agent_name}</td>
                                    <td style={{padding: '12px', textAlign:'center'}}>{avg_frt}</td>
                                    <td style={{padding: '12px', textAlign:'center'}}>{sla_goal}</td>
                                    <td style={{padding: '12px', textAlign:'center'}}>{sla_met}</td>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>
            </div>
        </MainContainer>
    )
}