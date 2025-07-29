export function initAnimation() {
    const menuBox = document.querySelector('.menuBox')
    const list = document.querySelector('.list')
    const listItems = document.querySelectorAll('.list-item')
    const otherItems = document.querySelectorAll('.other-item')
    function createAnimation(scrollStart, scrollEnd, valueStart, valueEnd) {
        // console.log(scrollStart, scrollEnd,666666666);
        return (scroll) => {
            if (scroll <= scrollStart) {
                return valueStart
            }
            if (scroll >= scrollEnd) {
                return valueEnd
            }
            return (valueStart + (valueEnd - valueStart) * (scroll - scrollStart) / (scrollEnd - scrollStart))
        }

    }
    const animationMap = new Map()
    function getDomAnimation(scrollStart, scrollEnd, dom) {
        scrollStart=scrollStart+dom.dataset.order*350
        const opacityAnimation = createAnimation(scrollStart, scrollEnd, 0, 1)
        const scaleAnimation = createAnimation(scrollStart, scrollEnd, 0.5, 1)
        const xAnimation= createAnimation(scrollStart, scrollEnd, list.clientWidth/2-dom.offsetLeft-dom.clientWidth/2, 0)
        const yAnimation= createAnimation(scrollStart, scrollEnd, list.clientHeight/2-dom.offsetTop-dom.clientHeight/2, 0)
        const opacity = function (scroll) {
            return opacityAnimation(scroll)
        }
        const transform = function (scroll) {
            return `translate3d(${xAnimation(scroll)}px,${yAnimation(scroll)}px,10px) scale(${scaleAnimation(scroll)})`
        }
        return { opacity,transform }
    }
    function getDomAnimation1(scrollStart, scrollEnd) {
        const opacityAnimation = createAnimation(scrollStart, scrollEnd, 0.2, 1)
        const zAnimation= createAnimation(scrollStart, scrollEnd, -200, 800)
        const opacity = function (scroll) {
            return opacityAnimation(scroll)
        }
        const transform = function (scroll) {
            // console.log(zAnimation(),'zzzzzzzzzzzz');
            return `translate3d(1e-5px,1e-5px,${zAnimation(scroll)}px)`
        }
        return { opacity,transform }
    }
    function updateMap() {
        animationMap.clear();
        const menuBoxRect = menuBox.getBoundingClientRect()
        const scrollStart = menuBoxRect.top + window.scrollY;
        const scrollEnd = menuBoxRect.bottom + window.scrollY-window.innerHeight;
        for (const item of listItems) {
            animationMap.set(item, getDomAnimation(scrollStart, scrollEnd, item))
        }
        for (const items of otherItems) {
            animationMap.set(items, getDomAnimation1(scrollStart, scrollEnd))
        }
    }
    updateMap()
    function updateStyle() {
        const scroll = window.scrollY;
        for (let [ dom, value ] of animationMap) {
            for (const cssProp in value) {
                dom.style[cssProp] = value[cssProp](scroll)
            }
        }
        let firstValue = Array.from(animationMap.values())[0];
        list.style.opacity=firstValue.opacity(scroll)
    }
    updateStyle()
    window.addEventListener('scroll', updateStyle)
}
