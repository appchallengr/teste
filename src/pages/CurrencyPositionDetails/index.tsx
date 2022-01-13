import React, { useEffect, useState } from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import { BoxReport, Container, ContainerTable, ContentReport, ContentTable, CounterPagination, DataDescription, DateBar, FooterTable, InfoDescription, PaginationActions, PaginationContainer, TextDescription } from './styles';

import { Button, DatePicker, Divider, Input, InputGroup } from 'rsuite';

import ITable from '../../models/Table';
import HeaderTableColumn from '../../components/HeaderTableColumn';
import { FaArrowRight, FaCalendar, FaDollarSign, FaSearch } from 'react-icons/fa';
import { useTable } from '../../hooks/Table';
import api from '../../services/api';
import ICurrencyPositionDetails from '../../models/CurrencyPositionDetail';
import { Link, useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableFilterRow, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { FilteringState, IntegratedFiltering, IntegratedSorting, SortingState } from '@devexpress/dx-react-grid';

const CurrencyPositionDetails: React.FC = () => {

    const columns = [
        {id: 1, name: 'trade', title: 'Trade', orderCrescent: true, ordered: false, width: '14%'},
        {id: 2, name: 'side', title: 'Side', orderCrescent: true, ordered: false, width: '14%'},
        {id: 3, name: 'amount', title: 'Amount', orderCrescent: true, ordered: false, width: '14%'},
        {id: 4, name: 'status', title: 'Status', orderCrescent: true, ordered: false, width: '14%'},
        {id: 5, name: 'contractId', title: 'ID do Contrato', orderCrescent: true, ordered: false, width: '14%'},
        {id: 6, name: 'hour', title: 'Hora', orderCrescent: true, ordered: false, width: '14%'}
    ]

    const changeOrder = (id:any) => {
        console.log("change order", id);
    }

    const [value, setValue] = useState(new Date());
    const [result, setResult] = useState<any>();
    const [trades, setTrades] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    // const [orderProperty, setOrderProperty] = useState('id');

    let { id } = useParams();

    useEffect( () => {
        setLoading(true);
      
        api
          .get(`/details/${id}`)
          .then((response:any) => {
              console.log("response",response.data)
                setTrades(response.data.trades);
                console.log("trades",trades);
          });
    }, [])

    

    const Cell = (props:any) => {
        const { column } = props;
        if (column.name === 'side') {
          return <td>{props.value}</td>;
        }
        return <Table.Cell {...props} />;
    };

    return (
        <Container>
            <HeaderTitle>
                Posições Cambiais - Detalhes
            </HeaderTitle>
            <ContainerTable>
                <ContentReport>
                    <BoxReport>
                       <FaCalendar size={"20px"} color={"#195ab4"}></FaCalendar> 
                       <InfoDescription>
                           <TextDescription>
                               Data
                           </TextDescription>
                           <DataDescription>
                           {result?.date}
                           </DataDescription>
                       </InfoDescription>
                    </BoxReport>
                    <BoxReport>
                       <FaDollarSign size={"20px"} color={"#195ab4"}></FaDollarSign> 
                       <InfoDescription>
                           <TextDescription>
                               Currency
                           </TextDescription>
                           <DataDescription>
                               {result?.trades[0].coin}
                           </DataDescription>
                       </InfoDescription>
                    </BoxReport>
                    <BoxReport>
                       <FaDollarSign size={"20px"} color={"#195ab4"}></FaDollarSign> 
                       <InfoDescription>
                           <TextDescription>
                               Posição sem contrato
                           </TextDescription>
                           <DataDescription>
                           {result?.positionWithoutContract}
                           </DataDescription>
                       </InfoDescription>
                    </BoxReport>
                    <BoxReport>
                       <FaDollarSign size={"20px"} color={"#195ab4"}></FaDollarSign> 
                       <InfoDescription>
                           <TextDescription>
                               Posição com contrato
                           </TextDescription>
                           <DataDescription>
                               {result?.positionWithContract}
                           </DataDescription>
                       </InfoDescription>
                    </BoxReport>
                    <BoxReport>
                       <FaDollarSign size={"20px"} color={"#195ab4"}></FaDollarSign> 
                       <InfoDescription>
                           <TextDescription>
                               Posição Inicial
                           </TextDescription>
                           <DataDescription>
                           {result?.openPosition}
                           </DataDescription>
                       </InfoDescription>
                    </BoxReport>
                   
                </ContentReport>
                <Divider />
                <ContentTable>
                <Paper>
                <Grid
                    rows={trades}
                    columns={columns}
                    >
                        <SortingState />
                        <IntegratedSorting />
                        <FilteringState defaultFilters={[]} />
                        <IntegratedFiltering />
                        <Table cellComponent={Cell}/>
                        <TableHeaderRow showSortingControls />
                        <TableFilterRow />
                    </Grid>
                </Paper>
                </ContentTable>
            </ContainerTable>
            <FooterTable>
                <Link to={`../posicoes-cambiais`}>
                    <Button color="blue" appearance="ghost">
                        Voltar
                    </Button>
                </Link>
            </FooterTable>
        </Container>
    );
}

export default CurrencyPositionDetails;