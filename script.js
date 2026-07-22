<script>

const elementos = document.querySelectorAll(
'.card, .mv-card, .galeria img, .banners img, .titulo'
);

elementos.forEach(elemento=>{
    elemento.classList.add('animar');
});


const observer = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }

    });

},{
    threshold:0.15
});


elementos.forEach(elemento=>{
    observer.observe(elemento);
});

</script>
    
<script>

function toggleMenu(){
    document.getElementById("menu").classList.toggle("activo");
}

</script>    
