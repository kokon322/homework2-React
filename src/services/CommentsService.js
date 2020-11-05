export class CommentsService {
    _url = 'https://jsonplaceholder.typicode.com';

    getAllComments() {
        return fetch(`${this._url}/comments`).then(value => value.json());
    }
}