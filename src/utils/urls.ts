export const Domain = "https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json"
export const Urls = {
    book : {
        searchByQuery: (query :string) => `https://openlibrary.org/search.json?q=${query}`,
        getByISBN: (ISBN :number) => `https://openlibrary.org/isbn/${ISBN}`,
        getCover: (cover :number) => `https://covers.openlibrary.org/b/isbn/${cover}-M.jpg`,
        getAuthor: (author :string) => `https://openlibrary.org/search.json?author=${author}`
    }
}