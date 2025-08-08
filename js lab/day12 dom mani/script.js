let productList =[]

let products = [];
function addProduct()
{
    const productName = document.getElementById("name").value;
    const productPrice = document.getElementById("price").value;
    const productCategory = document.getElementById("category").value;
    const filterBox = document.getElementById('filter')

    const product = {
        name :productName,
        price : productPrice,
        category : productCategory
    }

    productList.push(product);
    const option = document.createElement('option')
    option.setAttribute('value',productCategory)
    option.textContent = productCategory;

    filterBox.appendChild(option);

    displayProduct(productList);
}


function displayProduct(){
    const mainContainer = document.getElementById('mainContainer');
    mainContainer.innerHTML = ""

    allProducts.forEach((product)=>{
        const Container = document.createElement('div');
        Container.innerHTML = `
        <div class="card" style="width: 18rem;">

            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <a href="#" class="btn btn-primary">${product.category}</a>
            </div>
        </div>
        `;
        
        mainContainer.appendChild(container);
    });

}

function filterProducts(category){
    if(category === all){
        displayProduct(productList);
    }else{
        const filteredProducts =productList.filter((product)=>product.category === category);
        displayProduct(filteredProducts);
    }
}