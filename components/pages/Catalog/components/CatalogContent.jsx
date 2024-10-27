import { CatalogTable } from './CatalogTable'
import { SearchComponent } from '../../../Common/Search'
import { Container } from '../../../ui/layouts'
import { Separator } from '../../../ui/Separator'
import { useCatalogSearch } from '../../../hooks/useCatalogSearch'

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
