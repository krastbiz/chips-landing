import styled from 'styled-components'
import { Button } from '../../ui/buttons/Button'
import { Text } from '../../ui/Typography'

export const CatalogTable = ({ data = [], loading }) => {
    return (
        <>
            <StyledTable>
                <TableHeader>
                    <tr>
                        <th>Производитель</th>
                        <th>Компонент</th>
                        <th>Доступно</th>
                        <th>Срок</th>
                        <th>Заказать</th>
                    </tr>
                </TableHeader>
                {!data.length && !loading ? (
                    <Text>По вашему запросу ничего не найдено</Text>
                ) : (
                    <tbody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                <td>{item.brand}</td>
                                <td>{item.partnumber}</td>
                                <td>{item.available}</td>
                                <td>{item.leadtime}</td>
                                <td>
                                    <Button primary>Заказать</Button>
                                </td>
                            </TableRow>
                        ))}
                    </tbody>
                )}
            </StyledTable>
            {loading && <LoadingText>Загрузка...</LoadingText>}
        </>
    )
}

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 16px;
    margin-top: 20px;
`

const TableHeader = styled.thead`
    background: ${({ theme }) => theme.colors.active};
    color: white;

    th {
        padding: 12px;
        text-align: left;
        border-bottom: 2px solid #ddd;
    }
`

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }

    &:hover {
        background-color: #e0e0e0;
    }

    td {
        padding: 12px;
        border-bottom: 1px solid #ddd;
        text-align: left;
        max-width: 288px;
    }
`
const LoadingText = styled.p`
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
`
