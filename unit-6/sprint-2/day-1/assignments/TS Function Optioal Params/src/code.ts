const getName = (firstname: string, lastname?: string): string => {
    if (lastname) {
        return `${firstname} ${lastname}`;
    }
    else {
        return firstname;
    }
}

export default getName;// Make no changes here