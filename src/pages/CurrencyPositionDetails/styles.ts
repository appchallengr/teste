import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;
    margin-top: 30px;
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

export const ContentReport = styled.div`
  display: flex;
`

export const BoxReport = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background: linear-gradient( 
    0deg, rgba(241,242,246,1) 0%, rgba(255,255,255,1) 100% );
        padding: 20px;
        border-radius: 10px;
        width: 200px;
        margin-right: 10px;
        margin-top: 10px;
`

export const InfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins'
  align-items: flex-end;
`

export const TextDescription = styled.div`
  display: flex;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
`

export const DataDescription = styled.div`
  display: flex;
  font-size:14px;
`

export const FooterTable = styled.div`
  display: flex;
  font-family: 'Poppins'
  align-items: flex-end;
`