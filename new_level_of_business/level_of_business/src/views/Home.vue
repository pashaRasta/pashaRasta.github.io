<template>
<div class="content">
  <section class="home">
    <span class="header_text">
      Что мы делаем
    </span>
    <div class="we_doing" id="span">
      <div>        
        <img 
          :srs="imgUrl" 
            alt=""
            width:300px
            >
          <h2>{{ title }}</h2>
          <p>Mane produkt : {{ name }}</p>
          <p>{{ price }} things</p>
          <span> Lorem, ipsum dolor. {{ desck }} ok?</span>
          <button>click mi</button>
      </div>
    </div> 
    
  </section>
  </div>
</template>


<script >

import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },

  name: 'ProductCard',
    data() {
      return{
        imgUrl:'https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8.png',
        title:'table 2123 modale',
        name:'Fabio Luchuni',
        price:46556,
        desck:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi vitae illo totam molestiae, nemo beatae fugiat maiores nisi eos ipsum.'

      }
    }
  })
export default class Home extends Vue {}

</script>


<style lang="scss">
@import "@/assets/_settings.scss";

.home{
  background:#bcbcbc;
  height: 400px;
}
section{
  background-color: $color_white;
  color:$color_black;
}
</style>
