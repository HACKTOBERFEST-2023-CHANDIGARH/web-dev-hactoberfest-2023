# HACKTOBER FEST 2023 WEB DEV

This is a solution to the Problem statement given in the HACKTOBERFEST 2023

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size

### Screenshot

![](../results-summary-component-main/Dhanveeryadav-summary-component/Screenshots/section-1.png)
![](../results-summary-component-main/Dhanveeryadav-summary-component/Screenshots/section-2.png)
![](../results-summary-component-main/Dhanveeryadav-summary-component/Screenshots/desktop-layout.png)


### Links: (https://shimmering-palmier-ebf6f8.netlify.app)

- Live Site URL:

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

While developing this project I learned about HTMLCollection, in HTMlCollection you can't use forEach loop as HTMLCollections do not have the forEach method by default. So To access elements you can foor loop (normal one).

To see how you can add code snippets, see below:

```html
<img class="img-icon" alt="reaction-icon" />
```

```js
const imgCollection = document.getElementsByTagName("img");

for(let i = 0 ; i < imgCollection.length; i++) {
    const img = imgCollection[i]
    img.setAttribute("src", eleData[i].icon)
}
```

## Author

- Github - [Dhanveeryadav](https://github.com/Dhanveeryadav)
- Frontend Mentor - [@Dhanveeryadav](https://www.frontendmentor.io/profile/yourusername)

The solution folders are inside the
```
web-dev-hactoberfest-2023/easy/results-summary-component-main/Dhanveeryadav-summary-component
```