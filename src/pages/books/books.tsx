import React, {ChangeEvent} from "react";
import "./books.css"
import {makeGet} from "../../utils/network";
import {Domain, Urls} from "../../utils/urls";

const Books = () => {
    const [query, setQuery] = React.useState<string>("");
    const [clicked, setClick] = React.useState<boolean>(false)

    React.useEffect(()=>{
        makeGet(Urls.book.searchByQuery(query)).then((resp)=>{console.log(resp.data)}).catch((e)=>{alert(e.response)})
    }, []);

    const handleQuery = React.useCallback((e: ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
    }, [])

    const handleSearch = React.useCallback(()=>{
        setClick(true)
        setTimeout(()=>{setClick(false)}, 2000)
    }, [])



    return (
        <div className='page'>
            <div className='head'>Электронная библиотека</div>
            <input className='search' placeholder='Введите название книги или имя автора' value={query} onChange={handleQuery}/>
            <button className='btn' disabled={clicked} onClick={handleSearch}>Поиск</button>
            <div>
                <div className='popularBook'>Популярные книги:</div>
                <div className='popularBook__list'>
                    <div className='book'>1</div>
                    <div className='book'>1</div>
                    <div className='book'>1</div>
                    <div className='book'>1</div>
                    <div className='book'>1</div>
                    <div className='book'>1</div>
                    <div className='book'>1</div>
                    <div className='book'>1</div>
                    <div className='book'>1</div>
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