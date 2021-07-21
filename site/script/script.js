const ruleOne = `
<div class="main__rule-01">
    <h2>01. Good design is innovative.</h2>
    <p>The possibilities for progression are not, by any means, exhausted. Technological development is always offering new opportunities for original designs. But imaginative design always develops in tandem with improving technology, and can never be an end in itself.</p>
</div>
`;

const ruleTwo = `
<div class="main__rule-02">
    <h2>02. Good design makes a product useful.</h2>
    <p>A product is bought to be used. It has to satisfy not only functional, but also psychological and aesthetic criteria. Good design emphasizes the usefulness of a product whilst disregarding anything that could detract from it.</p>
</div>
`;

const ruleThree = `
<div class="main__rule-03">
    <h2>03. Good design is aesthetic.</h2>
     <p>The aesthetic quality of a product is integral to its usefulness because products are used every day and have an effect on people and their well-being. Only well-executed objects can be beautiful.</p>
</div>
`;

const ruleFour = `
<div class="main__rule-04">
    <h2>04. Good design makes a product understandable.</h2>
    <p>It clarifies the product’s structure. Better still, it can make the product clearly express its function by making use of the user’s intuition. At best, it is self-explanatory.</p>
</div>
`;

const ruleFive = `
<div class="main__rule-05">
    <h2>05. Good design is unobtrusive.</h2>
    <p>Products fulfilling a purpose are like tools. They are neither decorative objects nor works of art. Their design should therefore be both neutral and restrained, to leave room for the user’s self-expression.</p>
</div>
`;

const ruleSix = `
<div class="main__rule-06">
    <h2>06. Good design is honest.</h2>
    <p>It does not make a product appear more innovative, powerful or valuable than it really is. It does not attempt to manipulate the consumer with promises that cannot be kept.</p>
</div>
`;

const ruleSeven = `
<div class="main__rule-07">
    <h2>07. Good design is long-lasting.</h2>
    <p>It avoids being fashionable and therefore never appears antiquated. Unlike fashionable design, it lasts many years — even in today’s throwaway society.</p>
</div>
`;

const ruleEight = `
<div class="main__rule-08">
    <h2>08. Good design is thorough down to the last detail.</h2>
    <p>Nothing must be arbitrary or left to chance. Care and accuracy in the design process show respect towards the consumer.</p>
</div>
`;

const ruleNine = `
<div class="main__rule-09">
    <h2>09. Good design is environmentally friendly.</h2>
    <p>Design makes an important contribution to the preservation of the environment. It conserves resources and minimizes physical and visual pollution throughout the lifecycle of the product.</p>
</div>
`;

const ruleTen = `
<div class="main__rule-10">
    <h2>10. Good design is as little design as possible.</h2>
    <p>Less, but better — because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity.</p>
</div>
`;

// I know this is inefficient programming...
function buttonOne() {
    document.getElementsByTagName("main")[0].innerHTML = ruleOne;
}

function buttonTwo() {
    document.getElementsByTagName("main")[0].innerHTML = ruleTwo;
}

function buttonThree() {
    document.getElementsByTagName("main")[0].innerHTML = ruleThree;
}

function buttonFour() {
    document.getElementsByTagName("main")[0].innerHTML = ruleFour;
}

function buttonFive() {
    document.getElementsByTagName("main")[0].innerHTML = ruleFive;
}

function buttonSix() {
    document.getElementsByTagName("main")[0].innerHTML = ruleSix;
}

function buttonSeven() {
    document.getElementsByTagName("main")[0].innerHTML = ruleSeven;
}

function buttonEight() {
    document.getElementsByTagName("main")[0].innerHTML = ruleEight;
}

function buttonNine() {
    document.getElementsByTagName("main")[0].innerHTML = ruleNine;
}

function buttonTen() {
    document.getElementsByTagName("main")[0].innerHTML = ruleTen;
}