(function () {


    let elements = document.querySelectorAll("[title]")
    let globalTooltip = null;
        
//-------- function createToltip
    function createToltip(text, position) {
        //tworzę element
        let tooltip = document.createElement('div');
        //dodaję treśc
        tooltip.textContent = text;
        //dodaje klasę 'ukryty'
        tooltip.classList.add('tooltip', 'hidden');
        //dodajędo body
        document.body.appendChild(tooltip);
        //usatwiam
        tooltip.style.top = (position.y - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (position.x + ((position.w / 2) - (tooltip.offsetWidth / 2))) + 'px';
        //usówam klasę ukryty
        tooltip.classList.remove('hidden');
        
        //przypisanie referencji tooltipu do zmiennej globalnej aby można bylo jej użyć w innej funkcji
        globalTooltip = tooltip;
  
    } //.createToltip


//-------- function showToltip
    function showToltip(e) {
        
        //pobieram pozycję elementu
        let position = {
            w: e.target.offsetWidth,
            x: e.target.offsetLeft,
            y: e.target.offsetTop
        };
        
        //pobieram tytułelementu 
        let text = e.target.title
        
        //przekazujętytuł i pozycję do utworzonego tooltipa
        createToltip(text, position)
        
        //usówam domyślny "dymek" 
        e.target.removeAttribute('title');
    } //.showToltip

     
//-------- function removeToltip
    function removeToltip(e) {
        e.target.setAttribute('title', globalTooltip.textContent);
        globalTooltip.parentNode.removeChild(globalTooltip);
    }//.removeToltip

    
        
    //-------- function init
    function init(elements) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("mouseenter", showToltip, false);
            elements[i].addEventListener("mouseleave", removeToltip, false);
        }
    } //.init

     init(elements);
       
})();
