import styled from "styled-components";

export const Container = styled.div`
`;

export const ContainerTable = styled.div`
    display:flex;
    flex-direction: column;
`

export const DateBar = styled.div`
    display:flex;
`

export const ContentTable = styled.div`
    display:flex;

    th{
      font-weight: bold;
      font-size: 11px;
      font-family: 'Poppins';
    }

    tbody{
      tr{
        cursor: pointer;
      }
    }
`

export const PaginationContainer = styled.div`
  display: flex;
  align-itens: center;
  justify-content: flex-end;
  margin: .5rem 0 0 0;
`

export const CounterPagination = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem 0 1rem;
  font-size: 12px;
  font-weight: 300;
`

export const PaginationActions = styled.div`
  display: flex;
`