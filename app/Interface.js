const initializeInterface = () => {
    rules.born.forEach(v => {
        document.getElementById("inputBirth" + v).checked = true;
    });
    rules.survive.forEach(v => {
        document.getElementById("inputSurvive" + v).checked = true;
    });
};

const updateBirthRule = (button, value) => {
    if (button.checked) {
        rules.born.add(value);
    } else {
        rules.born.delete(value);
    }
};

const updateSurviveRule = (button, value) => {
    if (button.checked) {
        rules.survive.add(value);
    } else {
        rules.survive.delete(value);
    }

    console.log('new survive rules');
    console.log(rules.survive);
};
