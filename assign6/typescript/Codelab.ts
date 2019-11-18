export class Codelab {
    constructor(public guests: Guest[]) {}

    getGuestsComing() {
        return this.guests.filter(g => g.coming==true);
    }
}