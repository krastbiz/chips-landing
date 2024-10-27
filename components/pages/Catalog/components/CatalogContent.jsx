import { CatalogTable } from './CatalogTable'
import { SearchComponent } from '../../../Common/Search'
import { Container } from '../../../ui/layouts'
import { Separator } from '../../../ui/Separator'
import { useCatalogSearch } from '../../../hooks/useCatalogSearch'
import { RequestForm } from '../../../Common/RequestForm'

export const CatalogContent = () => {
    const {
        data,
        defaultSearchValue,
        loadMoreRef,
        loading,
        handleSearch,
        handleSort,
        sortBy,
        sortOrder,
        requestFormRef,
        scrollToForm,
        defaultFormValue,
    } = useCatalogSearch()

    return (
        <Container>
            <SearchComponent defaultValue={defaultSearchValue} onSearch={handleSearch} isHomePage={false} />
            <Separator />
            <CatalogTable
                data={data}
                loading={loading}
                onSort={handleSort}
                sortBy={sortBy}
                sortOrder={sortOrder}
                handleScroll={scrollToForm}
            />
            <div ref={loadMoreRef} style={{ height: '20px' }} />
            <div ref={requestFormRef}>
                <RequestForm defaultValue={defaultFormValue} />
            </div>
        </Container>
    )
}
