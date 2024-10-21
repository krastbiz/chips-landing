import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'
import { breakpoint } from '../../lib/theme'

export const SearchComponent = ({ defaultValue, onSearch, isHomePage = false }) => {
    const [searchValue, setSearchValue] = useState(defaultValue || '')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSearch = useCallback(
        (searchValue) => {
            if (searchValue.length < 2) {
                setError('Введите минимум 2 символа для поиска')
                return
            } else {
                setError('')
            }
            if (!isHomePage) {
                onSearch(searchValue)
            }
        },
        [searchValue, router, onSearch, isHomePage],
    )

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        if (!isHomePage) {
            handleSearch(e.target.value)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && isHomePage) {
            router.push(`/catalog?q=${searchValue}`)
        }
    }

    return (
        <SearchContainer isHomePage={isHomePage}>
            <SearchInput
                placeholder="Введите название компонента, например, INA818IDR"
                value={searchValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {isHomePage && (
                <Link href={`/catalog?q=${searchValue}`} passHref>
                    <SearchButton>
                        <SearchIcon src="/static/icons/search.svg" alt="Поиск" />
                    </SearchButton>
                </Link>
            )}
            {error && <ErrorText>{error}</ErrorText>}
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    position: relative;
    display: inline-block;
    border-radius: 5px;

    ${({ isHomePage }) =>
        isHomePage &&
        `
        margin-top: 250px;
        
        ${breakpoint.desktop`
            margin-top: 200px;
        `}
    `}
`

const SearchInput = styled.input`
    height: 40px;
    padding-left: 10px;
    padding-right: 40px;
    border: 1px solid ${({ theme }) => theme.colors.main};
    border-radius: 5px;
    width: 480px;
    box-sizing: border-box;
    margin: 20px 0;
    ${breakpoint.mobile`
    width: 260px;
`}
`

const SearchButton = styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
`

const SearchIcon = styled.img`
    height: 20px;
`

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`
