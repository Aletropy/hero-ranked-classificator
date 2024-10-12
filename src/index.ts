import ConsoleHelper from "./ConsoleHelper";
import HeroClassifier from "./HeroClassifier";

(async () => {

    const heroName = await ConsoleHelper.AskQuestion("What is your hero name? ");
    const victoriesStr = await ConsoleHelper.AskQuestion("How much victories your hero have? ");
    const defeatsStr = await ConsoleHelper.AskQuestion("How much defeats your hero have? ");

    const victories = parseInt(victoriesStr)
    const defeats = parseInt(defeatsStr)

    if(Number.isNaN(victories) || Number.isNaN(defeats))
    {
        console.log(`The victores and defeat need to be an valid number.`);
        return;
    }

    const rankedLevel = HeroClassifier.ClassifyRankedLevel(victories, defeats);

    console.log(`"The hero ${heroName} ranking level is **${rankedLevel}**"`);
})();