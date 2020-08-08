import mealList from './MealsList';

function Meals(parent, document) {

    const pageContent = `
        <header>
            <h1>Meals</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maxime. Unde nemo incidunt rerum
                accusantium voluptatem eaque. Amet aliquam obcaecati, natus repellendus fugit dolores quos ducimus unde
                tempora explicabo, quasi deserunt illum omnis reiciendis delectus.
            </p>
        </header>
        <div class="meals-list">
        ${ mealList.map(meal =>
        `       
                <div class="meal">
                    <div class='meal-image'>
                        <img src="${meal.imageUrl}"/>
                    </div>
                    <div class="meal-description">
                        <h2>${meal.title}</h2>
                        <p>${meal.description}</p>
                        <div class="meal-meta-data">
                            <div class="price">
                                ${meal.price}
                            </div>
                            <div class="buttons">
                                <button>order</button>
                                <button>info</button>
                            </div>
                        </div>
                    </div>
                </div>
                `
    ).join('')}
        </div>
        `

    const container = document.createElement('DIV');
    container.classList.add('page-meals');
    container.insertAdjacentHTML('beforeend', pageContent);

    parent.innerHTML = '';// clean up the element;
    parent.appendChild(container);// add the created element;
}



export default Meals;