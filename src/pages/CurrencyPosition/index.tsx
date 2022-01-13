import React, { useEffect, useState } from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import { Container, ContainerTable, ContentTable, CounterPagination, DateBar, PaginationActions, PaginationContainer } from './styles';

import { DatePicker, Divider, Input, InputGroup } from 'rsuite';

import ICurrencyPosition from '../../models/CurrencyPosition';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableFilterRow, TableHeaderRow, TableSelection } from '@devexpress/dx-react-grid-material-ui';
import { FilteringState, IntegratedFiltering, IntegratedSorting, SelectionState, SortingState } from '@devexpress/dx-react-grid';

const CurrencyPosition: React.FC = () => {

    const columnsTable = [
        { name: 'id', title: 'ID' },
        { name: 'product', title: 'Product' },
        { name: 'owner', title: 'Owner' },
      ];
      const rows = [
        { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
        { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
      ];

    const columns= [
        {id: 1, name: 'coin', title: 'Moeda', orderCrescent: true, ordered: false, width: '12%'},
        {id: 2, name: 'openPosition', title: 'Posição de Abertura', orderCrescent: true, ordered: false, width: '12%'},
        {id: 3, name: 'cam', title: 'Cam 50', orderCrescent: true, ordered: false, width: '12%'},
        {id: 4, name: 'positionWithoutContract', title: 'Posição sem contrato', orderCrescent: true, ordered: false, width: '12%'},
        {id: 5, name: 'diffWithoutContract', title: 'Diff sem Contrato', orderCrescent: true, ordered: false, width: '12%'},
        {id: 6, name: 'positionWithContract', title: 'Posição com Contrato', orderCrescent: true, ordered: false, width: '12%'},
        {id: 7, name: 'diffWithContract', title: 'Diff com Contrato', orderCrescent: true, ordered: false, width: '12%'}
    ]

    const changeOrder = (id:any) => {
        console.log("change order", id);
    }

    const [value, setValue] = useState(new Date());
    const [result, setResult] = useState<ICurrencyPosition[]>([]);
    const [loading, setLoading] = useState(true);
    const [selection, setSelection] = useState([1]);

    useEffect( () => {
        setLoading(true);
        api
          .get(`/currency-position`)
          .then((response:any) => {
              console.log("response",response)
              setResult(response.data.results);
              setLoading(false);
          });
    }, [])

    const getRow = (e:any) => {
        console.log("e",e)
    }    

    return (
        <Container>
            <HeaderTitle>
                Posições Cambiais
            </HeaderTitle>
            <ContainerTable>
                <DateBar>
                    <DatePicker value={value} onChange={setValue} size="lg" placeholder="Large" format="dd/MM/yyyy" />
                </DateBar>
                <Divider />
                <ContentTable>
                <Paper>
                    <Grid
                    rows={result}
                    columns={columns}
                    >
                        <SelectionState
                        selection={selection}
                        onSelectionChange={ (e) => getRow(e)}
                        />
                        <SortingState />
                        <IntegratedSorting />
                        <FilteringState defaultFilters={[]} />
                        <IntegratedFiltering />
                        <Table />
                        <TableHeaderRow showSortingControls />
                        <TableFilterRow />
                        <TableSelection
                            selectByRowClick
                            highlightRow
                            showSelectionColumn={false}
                            />
                    </Grid>
                </Paper>
                </ContentTable>
            </ContainerTable>
        </Container>
    );
}

export default CurrencyPosition;