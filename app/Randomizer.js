const selectRandomPreset = () => {
    const randomIndexPreset = Math.floor(Math.random() * PRESETS.length);
    changePreset(randomIndexPreset);
};

const mutateNeighbordSelection = () => {
    const neighbors = Object.keys(settings.neighborsToSelect);
    const randomNeighborIndex = Math.floor(Math.random() * neighbors.length);
    const randomNeighbor = neighbors[randomNeighborIndex];

    settings.neighborsToSelect[randomNeighbor] = !settings.neighborsToSelect[randomNeighbor];
};

const mutateRule = (rule) => {
    let ruleNumber = Math.floor(Math.random() * 9);
    if (ruleNumber === 9) {
        ruleNumber = 8;
    }

    if (rule.has(ruleNumber)) {
        rule.delete(ruleNumber);
    } else {
        rule.add(ruleNumber);
    }
};

const mutateBirthConditions = () => {
    mutateRule(rules.born);
};

const mutateSurviveConditions = () => {
    mutateRule(rules.survive);
};

const mutateEdgeWrapping = () => {
    if (Math.random() < 0.5) {
        settings.edgeWrapping = !settings.edgeWrapping;
    }
}

const mutateInvertVisualisation = () => {
    if (Math.random() < 0.5) {
        settings.invertVisualization = !settings.invertVisualization;
    }
};

const randomizeSettings = () => {
    const candidateMutators = [];

    if (settings.randomizationRules.has('preset')) {
        candidateMutators.push(selectRandomPreset);
    }
    if (settings.randomizationRules.has('neighbors')) {
        candidateMutators.push(mutateNeighbordSelection);
    }
    if (settings.randomizationRules.has('birth')) {
        candidateMutators.push(mutateBirthConditions);
    }
    if (settings.randomizationRules.has('survive')) {
        candidateMutators.push(mutateSurviveConditions);
    }
    if (settings.randomizationRules.has('edge')) {
        candidateMutators.push(mutateEdgeWrapping);
    }
    if (settings.randomizationRules.has('invert')) {
        candidateMutators.push(mutateInvertVisualisation);
    }

    if (candidateMutators.length === 0) {
        return;
    }

    const randomMutatorIndex = Math.floor(Math.random() * candidateMutators.length);
    const randomMutator = candidateMutators[randomMutatorIndex];
    randomMutator();

    updateInterfaceAllItemsFromValue();
    resetLoopDetection();
}
