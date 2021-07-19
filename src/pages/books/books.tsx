import React from "react";
import "./books.css"

const Books = () => {
    return (
        <div className='page'>
            <div className='head'>Электронная библиотека</div>
            <input className='search' placeholder='Введите название книги или имя автора'/>
            <button className='btn'>Поиск</button>
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
                        <div className='author__name'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books;