/* export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
} 
You can code this in a short form:
*/

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}