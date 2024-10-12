enum HeroLevel
{
    Iron = "Iron",
    Bronze = "Bronze",
    Silver = "Silver",
    Gold = "Gold",
    Platinum = "Platinum",
    Ascendant = "Ascendant",
    Immortal = "Immortal",
    Radiant = "Radiant"
}

enum RankedLevel
{
    Iron = "Iron",
    Bronze = "Bronze",
    Silver = "Silver",
    Gold = "Gold",
    Diamond = "Diamond",
    Legendary = "Legendary",
    Immortal = "Immortal"
}

type LevelResolvable = HeroLevel | RankedLevel | string

type LevelInfo = { min: number, max: number, level: LevelResolvable }

export default class HeroClassifier
{
    private static _xpLevels: LevelInfo[] = [
        { min: 0, max: 1000, level: HeroLevel.Iron },
        { min: 1001, max: 2000, level: HeroLevel.Bronze },
        { min: 2001, max: 5000, level: HeroLevel.Silver },
        { min: 5001, max: 7000, level: HeroLevel.Gold },
        { min: 7001, max: 8000, level: HeroLevel.Platinum },
        { min: 8001, max: 9000, level: HeroLevel.Ascendant },
        { min: 9001, max: 10000, level: HeroLevel.Immortal },
        { min: 10001, max: Infinity, level: HeroLevel.Radiant }
    ];

    private static _rankedLevels : LevelInfo[] = [
        { min: 0, max: 10, level: RankedLevel.Iron },
        { min: 11, max: 20, level: RankedLevel.Bronze },
        { min: 21, max: 50, level: RankedLevel.Silver },
        { min: 51, max: 80, level: RankedLevel.Gold },
        { min: 81, max: 90, level: RankedLevel.Diamond },
        { min: 91, max: 100, level: RankedLevel.Legendary },
        { min: 101, max: Infinity, level: RankedLevel.Immortal },
    ]

    public static ClassifyHeroLevel(xp : number) : HeroLevel
    {
        const heroLevel = this._xpLevels.find(range => xp >= range.min && xp <= range.max)
        return (heroLevel ? heroLevel.level : HeroLevel.Iron) as HeroLevel;
    }

    public static ClassifyRankedLevel(victories : number, defeats : number) : RankedLevel
    {
        const dif = victories - defeats;
        const rankedLevel = this._rankedLevels.find(range => dif >= range.min && dif <= range.max)
        return (rankedLevel ? rankedLevel.level : RankedLevel.Iron) as RankedLevel
    }
}