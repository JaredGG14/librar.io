import React from 'react';

function BookDetail() {
    
    const getBookId = async () => {
        const $book_id = 10;
        const response = await axios.get(`http://localhost/librar.io/public/api/book_id/${$book_id}`);
        console.log(response.data);
    }

    return (
        <div>
            <button onClick={getBookId}>Test</button>
        </div>
    );
}

export default BookDetail;