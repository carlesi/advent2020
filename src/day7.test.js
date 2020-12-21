const { parseToBagRules, arrayOfRules, BagRule, bagCanContainBag, countNumOfBagsInside } = require('./day7');

describe('day7', () => {
    const stringRule = 'light red bags contain 1 bright white bag, 2 muted yellow bags.';
    it('When no string rules empy array', () => {
        expect(parseToBagRules([]).length).toBe(0);
    });
    it('When 1 string rules array of length 1', () => {
        expect(parseToBagRules([stringRule]).length).toBe(1);
    });
    it('When 1 string rules then array of BagRule of length 1', () => {
        expect(parseToBagRules([stringRule])[0]).toBeInstanceOf(BagRule);
    });
    it('When 1 string rule and starts with light red bags contain then first bag rule has light red as name', () => {
        expect(parseToBagRules([stringRule])[0].getName()).toBe('light red');
    });
    it('When arrayOfRules length of arrayOfRules length', () => {
        expect(parseToBagRules(arrayOfRules).length).toBe(arrayOfRules.length);
    });
    it('When arrayOfRules second rule name is dark orange', () => {
        expect(parseToBagRules(arrayOfRules)[1].getName()).toBe('dark orange');
    });
    it('When arrayOfRules 7 and 8 rules does not contains other bags', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let rule9 = arrayOfBagRules[8];
        expect(parseToBagRules(arrayOfRules)[8].getContainers().length).toBe(0);
        expect(parseToBagRules(arrayOfRules)[7].getContainers().length).toBe(0);
    });
    it('When arrayOfRules rule 2 contains one container', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let rule = arrayOfBagRules[2];
        expect(rule.getContainers().length).toBe(1);
    });
    it('When arrayOfRules first rule contains is 1 bright white bag, 2 muted yellow bags', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let rule = arrayOfBagRules[0];
        expect(rule.getContainers()[0].getName()).toBe('bright white');
        expect(rule.getContainers()[1].getName()).toBe('muted yellow');
    });
    it('When arrayOfRules first rule has two containers, first 1 bright white and second 2 muted yellow', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let lightRedRule = arrayOfBagRules[0];
        let lightRedRuleContainers = lightRedRule.getContainers();
        expect(lightRedRuleContainers[0].getName()).toBe('bright white');
        expect(lightRedRuleContainers[1].getName()).toBe('muted yellow');
        expect(lightRedRuleContainers[0].getNum()).toBe(1);
        expect(lightRedRuleContainers[1].getNum()).toBe(2);
    });
    it('third bag can contain shiny gold bag', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let lightRedBagRule = arrayOfBagRules[2];
        let bag = lightRedBagRule;
        let targetBag = new BagRule('shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
            'shiny gold',
            []);
        expect(bagCanContainBag(bag, targetBag, arrayOfBagRules)).toBe(true);
    });
    it('9 bag can not contain shiny gold bag', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let bag = arrayOfBagRules[8];
        let targetBag = new BagRule('shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
            'shiny gold',
            []);
        expect(bagCanContainBag(bag, targetBag, arrayOfBagRules)).toBe(false);
    });
    it('5 bag can not contain shiny gold bag', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let bag = arrayOfBagRules[5];
        let targetBag = new BagRule('shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
            'shiny gold',
            []);
        expect(bagCanContainBag(bag, targetBag, arrayOfBagRules)).toBe(false);
    });
    it('first bag can contain shiny gold bag', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let bag = arrayOfBagRules[1];
        let targetBag = new BagRule('shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
            'shiny gold',
            []);
        expect(bagCanContainBag(bag, targetBag, arrayOfBagRules)).toBe(true);
    });
    it('countTotalNumOfBags of faded blue bag is 0', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let bag = arrayOfBagRules[7];
        expect(countNumOfBagsInside(bag.getContainers(), arrayOfBagRules)).toBe(0);
    });
    it('countTotalNumOfBags of vibrant plum bag is 11', () => {
        let arrayOfBagRules = parseToBagRules(arrayOfRules);
        let bag = arrayOfBagRules[6];
        expect(countNumOfBagsInside(bag.getContainers(), arrayOfBagRules)).toBe(11);
    });
    it('countTotalNumOfBags of anotherInput is 126', () => {
        let anotherInput = `shiny gold bags contain 2 dark red bags.
        dark red bags contain 2 dark orange bags.
        dark orange bags contain 2 dark yellow bags.
        dark yellow bags contain 2 dark green bags.
        dark green bags contain 2 dark blue bags.
        dark blue bags contain 2 dark violet bags.
        dark violet bags contain no other bags.`;
        let arrayOfBagRules = parseToBagRules(anotherInput.split('\n'));
        let bag = arrayOfBagRules[0];
        expect(countNumOfBagsInside(bag.getContainers(), arrayOfBagRules)).toBe(126);
    });
});