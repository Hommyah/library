import React, {ChangeEvent, useEffect} from "react";
import "./books.css"
import {makeGet} from "../../utils/network";
import {Domain, Urls} from "../../utils/urls";
import Book, {BookType} from "../../components/book";

const Books = () => {
    const [query, setQuery] = React.useState<string>("");
    const [clicked, setClick] = React.useState<boolean>(false);
    const [timer, changeTimer] = React.useState(0);
    const [load, setLoad] = React.useState<boolean>(false);
    const [books, setBooks] = React.useState<Array<BookType>>([])


    useEffect(() => {
        setQuery("harry potter")
    }, [])

    const handleQuery = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        let timeout = 2000;

        setQuery(val);
        if (timer !== 0) {
            window.clearTimeout(timer)
        }
        if (val.length === 0) {
            return
        }
        if (val.length > 3) {
            timeout = 1000;
        }
        changeTimer(window.setTimeout(() => {
            makeGet(Urls.book.searchByQuery(val)).then((resp) => {
                console.log(resp.data)
            }).catch((e) => {
                alert(e.response)
            })
        }, timeout))
    }, [timer])

    const handleSearch = React.useCallback(() => {
        setClick(true)
        setTimeout(() => {
            setClick(false)
        }, 2000)
        setLoad(true);

        makeGet(Urls.book.searchByQuery(query)).then((resp) => {
            // let data = resp.data.docs.slice(0, 5);
            // let keys = data.map((obj: { key: string }) => (obj.key))
            setQuery("")
        }).catch((e) => {
            alert(e.response)
        }).finally(() => setLoad(false))


    }, [books, query])

    const handleClick = () => {
        let temp = [...books];
        temp.push({ISBN: "", cover: 0, ol: "", author: '', title: ''})
        setBooks(temp)
    }


    return (
        <div className='page'>
            <div className='head'>Электронная библиотека</div>
            <input className='search' placeholder='Введите название книги или имя автора' value={query}
                   onChange={handleQuery} onKeyPress={event => {
                if (event.key === "Enter") {
                    setLoad(true);
                    makeGet(Urls.book.searchByQuery(query)).then((resp) => {
                        //console.log(resp.data);
                        setQuery("")
                    }).catch((e) => {
                        alert(e.response)
                    }).finally(() => setLoad(false))
                }
            }
            }/>
            <button className='btn' disabled={clicked} onClick={handleSearch}>Поиск</button>
            <button onClick={handleClick}>Click</button>
            <div>
                <div className="load">
                    {load ?
                        <i className="fa fa-spinner fa-spin fa-6x fa-fw"/>
                        : null}
                </div>
                <div className='popularBook'>Популярные книги:</div>
                <div className='popularBook__list'>
                    {books.map((book, idx) => (<Book key={idx} author={book.author} ISBN={book.ISBN}
                                                     cover={book.cover}
                                                     ol={book.ol}
                                                     title={book.title}/>))}
                </div>
            </div>
            <div>
                <div className='popularAuthor'>Популярные авторы:</div>
                <div className='popularAuthor__list'>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>aaaaaaaaaaaaaaa</div>
                        <div className='author__surname'>ahhhhhhhhhhh</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books;