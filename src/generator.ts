import { templates } from "./templates";

class Story {
    private beginning: string = "";
    private conflict: string = "";
    private choice: string = "";
    private ending: string = "";

    constructor() {
        const genre = Math.floor(Math.random() * 3);
        this.beginning = templates[genre][0][Math.floor(Math.random() * 3)];
        this.conflict = templates[genre][1][Math.floor(Math.random() * 3)];
        this.choice = templates[genre][2][Math.floor(Math.random() * 3)];
        this.ending = templates[genre][3][Math.floor(Math.random() * 3)];
    }

    toString(): string {
        return `${this.beginning}. ${this.conflict} ${this.choice} ${this.ending}`;
    }
}

export const generateStory = () => {
    const story = new Story();
    return story.toString();
}