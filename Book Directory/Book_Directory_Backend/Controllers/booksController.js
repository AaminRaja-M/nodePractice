let Book = require('../Schema/booksSchema')

let addBook = async(req, res, next) => {
    console.log('adding new book');
    try {
        let { title, author, language, category, publisher, edition, price } = req.body
        let book = await Book.create({title, author, language, category, publisher, edition, price})
        console.log(book);
        res.json({error:false, message:"new book added to database successfully"})
    } catch (error) {
        next(error)
    }
}

let getBook = async(req, res, next) => {
    console.log('fetching single book data');
    try {
        let {id} = req.params
        let book = await Book.findById(id)
        console.log(book);
        res.json({error:false, message:"Book detals fetched successfully", book:book})
    } catch (error) {
        next(error)
    }
}

let fetchAllBooks = async(req, res, next) => {
    console.log('fetching all books data');
    try {
        let books = await Book.find()
        console.log(books);
        res.json({error:false, message:"fetched all book data", books:books})
    } catch (error) {
        next(error)
    }
}

let updateBookeDetails = async(req, res, next) => {
    console.log("updating a book data");
    try {
        let {id} = req.params;
        console.log(id);
        let { title, author, language, category, publisher, edition, price } = req.body
        let book = await Book.findByIdAndUpdate(id)
        console.log(book);
        if(!book){
            res.json({error:true, message:"book not found for this id"})
        }else{
            let updatedBookDetails = await Book.updateOne({_id:id}, { title, author, language, category, publisher, edition, price }, {new:true})
            res.json({error:false, message:"Book details updated successfully", book:book})
        }
    } catch (error) {
        next(error)
    }
}

let deleteBook = async(req, res, next) => {
    console.log('deleting one book');
    try {
        let {id} = req.params
        let book = await Book.findById(id)
        if(!book){
            res.json({error:true, message:"not found a book for this id"})
        }else{
            let bookDeleted = await Book.deleteOne({_id:id})
            res.json({error:false, message:"Books details deleted successfully", book:book})
        }
    } catch (error) {
        next(error)
    }
}

let fetchAllAuthors = async(req, res, next) => {
    console.log('fetching all authers name');
    try {
        let authors = await Book.distinct("author")
        console.log(authors);
        res.json({error:false, meassage:"fetched all authors name", authors:authors})
    } catch (error) {
        next(error)
    }
}

let fetchCategories = async(req, res, next) => {
    console.log('fetching all categories(genere) name');
    try {
        let categories = await Book.distinct("category")
        console.log(categories);
        res.json({error:false, meassage:"fetched all categories name", categories:categories})
    } catch (error) {
        next(error)
    }
}

let fetchBooksByTitle = async(req, res, next) => {
    console.log('fetching books by its name');
    try {
        let {title} = req.body
        let books = await Book.find({title:title})
        console.log(books);
        res.json({error:false, message:"fetched books by it's title", books:books})
    } catch (error) {
        next(error)
    }
}

let fetchBooksByAuthor = async(req, res, next) => {
    console.log('fetching books by its name');
    try {
        let {author} = req.body
        let books = await Book.find({author:author}) 
        console.log(books);
        res.json({error:false, message:"fetched books by it's author name", books:books})
    } catch (error) {
        next(error)
    }
}

let fetchBooksByCategory = async(req, res, next) => {
    console.log('fetching books by its category(genere)');
    try {
        let {category} = req.body
        let books = await Book.find({category:category}) 
        console.log(books);
        res.json({error:false, message:"fetched books by it's category(genere)", books:books})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addBook,
    getBook,
    fetchAllBooks,
    updateBookeDetails,
    deleteBook,
    fetchAllAuthors,
    fetchCategories,
    fetchBooksByTitle,
    fetchBooksByAuthor,
    fetchBooksByCategory
}