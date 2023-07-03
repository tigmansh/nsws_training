type SectionType = "Fiction" | "Documentary" | "Educational";

export class Book {
    constructor(public section: SectionType, public name: string) { }
}

export class Section {
    books: Book[] = [];

    constructor(public name: SectionType) { }

    addBook(book: Book) {
        this.books.push(book);
    }
}

export class Library {
    sections: Section[] = [];

    constructor(public name: string) { }

    addSection(section: Section) {
        this.sections.push(section);
    }
}
