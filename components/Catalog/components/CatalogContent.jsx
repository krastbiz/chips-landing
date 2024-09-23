import { useCatalogSearch } from '../hooks/useCatalogSearch'
import { CatalogTable } from './CatalogTable'
import { SearchComponent } from '../../Common/Search'
import { Container } from '../../ui/layouts/Container'
import { Separator } from '../../ui/Separator'

export const CatalogContent = () => {
    const { data, defaultSearchValue, loadMoreRef, loading, handleSearch, handleSort, sortBy, sortOrder } =
        useCatalogSearch()

    return (
        <Container>
            <SearchComponent defaultValue={defaultSearchValue} onSearch={handleSearch} isHomePage={false} />
            <Separator />
            <CatalogTable data={data} loading={loading} onSort={handleSort} sortBy={sortBy} sortOrder={sortOrder} />
            <div ref={loadMoreRef} style={{ height: '20px' }} />
        </Container>
    )
}
