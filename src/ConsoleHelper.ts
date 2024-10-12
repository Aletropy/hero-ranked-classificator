import { createInterface } from "readline/promises"

export default class ConsoleHelper
{
    public static async AskQuestion(question : string) : Promise<string>
    {
        const rl = createInterface(
            process.stdin, process.stdout
        );

        const response = await rl.question(question);

        rl.close();

        return response;
    }
}