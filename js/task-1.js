function slugify(title){
    const newTitle = title.split(" ");
    const needTitle = newTitle.join("-");
    const smallTitle = needTitle.toLowerCase();
    return smallTitle;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));