import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Button } from '../../../ui/buttons/Button'
import { Text } from '../../../ui/Typography'
import { useState, useEffect } from 'react'

export const CatalogTable = ({ data = [], loading, onSort, sortBy, sortOrder }) => {
    const router = useRouter()
    const [localSortBy, setLocalSortBy] = useState(sortBy)
    const [localSortOrder, setLocalSortOrder] = useState(sortOrder)

    // Set default sorting on initial render if not provided
    useEffect(() => {
        if (!sortBy) {
            setLocalSortBy('brand')
            setLocalSortOrder('asc')
        }
    }, [sortBy])

    const handleSort = (field) => {
        let newOrder = 'asc'
        if (localSortBy === field && localSortOrder === 'asc') {
            newOrder = 'desc'
        }
        setLocalSortBy(field)
        setLocalSortOrder(newOrder)
        onSort(field, newOrder)
    }

    const renderSortIcon = (field) => {
        if (localSortBy !== field) return null
        return localSortOrder === 'asc' ? '▼' : '▲'
    }

    return (
        <>
            <StyledTable>
                <TableHeader>
                    <tr>
                        <th onClick={() => handleSort('brand')}>Производитель {renderSortIcon('brand')}</th>
                        <th onClick={() => handleSort('partnumber')}>Компонент {renderSortIcon('partnumber')}</th>
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
                                    <Button
                                        onClick={() =>
                                            router.push(`/request?brand=${item.brand}&partnumber=${item.partnumber}`)
                                        }
                                        primary
                                    >
                                        Заказать
                                    </Button>
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
    font-family: ${({ theme }) => theme.fonts.velasansmed};
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
        cursor: pointer;
        user-select: none;
    }
    th:first-child {
        width: 250px;
    }

    th:nth-child(2) {
        width: 300px;
    }
`

const TableRow = styled.tr`
    background-color: #f2f2f2;

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
