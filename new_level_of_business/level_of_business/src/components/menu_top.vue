<template>
<div class="content">
    <div class="header_bg">
        <div class="header_top">
            <div class="wrapp_content header_wrapp">
                <div class="logo">
                    <!-- поменять локальный путь !!!! -->
                    <a href="http://localhost:8080/">Logotype</a> 
                </div>
                <div id="nav" class="header_nav">
                    <router-link to="/">Главная</router-link> 
                    <router-link to="/about">О нас</router-link> 
                    <router-link to="/services">Услуги</router-link> 
                    <router-link to="/contacts">Контакты</router-link>
                </div>
                <div class="phone_lang">
                    <a href="tel:+79818712492" class="my_phone">+7 (981) 871 24 92</a>
                    <div>
                        <button>ru</button>
                        <button>en</button>
                    </div>
                </div>
            </div>

            <div >
                <div class="wrapp_content">
                <div class="block_left">
                    <h1>новый уровень <br> Вашего бизнеса</h1>
                    <span>Стратегия, UI / UX дизайн, разработка, seo <br> для торговых марок премиум класса</span>
                </div>
                <button>подробнее</button>
                </div>
            </div>
        </div>
    </div>
        <router-view/> 
</div>
    
    
</template>


<style lang="scss">
@import "@/assets/_settings.scss";
.content{
    width: 100%;
}
.header_bg{
    width: 100%;
    height: 100%;
    background-image: url("../assets/header_img/bg_header.png");
}
#nav {
  a {
    font-weight: bold;
    color: $color_white;
    &.router-link-exact-active {
      color: $color_white;
      border:2px solid #ffffff;
    }
  }
}
.header_top{ 
    .header_wrapp{
        padding: 78px 0;
        @media screen and (max-width:1200px) {
            padding-left: 12px;
            padding-right: 12px;
        }
    }
}
.header_top{
    width: 100%;
    .header_wrapp{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
.logo{
     @media screen and (max-width:920px) {
            margin-bottom: 20px;
     }
    a{
        font-weight: bold;
        text-decoration: none;
        color: $color_white;
        font-size: 26px;
        font-weight: 600;
        @media screen and (max-width:920px) {
            font-size: 32px;
        }
    }
}
.header_nav{
    display: flex;
    justify-content: space-between;
    margin: 2% 12%;
    color: $color_white;
    @media screen and (max-width: 640px){
        font-size: 12px;
        padding: 12px 0;
        margin: 0;
        width: 100%;
    }
    a{
        display: flex;
        min-width: 66px;
        margin: 0 7px;
        padding: 8px 6px;
        text-decoration: none;
        @media screen and (max-width: 420px){
            padding: 4px 4px;  
            min-width: 40px; 
       }

    }
}
.phone_lang{
    display: flex;
    justify-content: space-between;
    align-items: center;
     @media screen and (max-width:920px) {
          width: 90%;
        }
    a{
        color: $color_white;
        text-decoration: none;
    }
    div{
        @include flexBox;
        width: 120px;
        justify-content: space-around;
        margin-left: 12px;
        @media screen and (max-width:920px) {
            flex-direction: inherit;
            height: auto;
            width: 110px;
        }
        button{
            width: 48px;
            height: 48px;
            background: transparent;
            color:$color_white;
            font-size: 18px;
            border: 2px solid $color_white;
            @media screen and (max-width:920px){
                &:nth-child(2){
                    margin-left: 12px;
                }
            }
             @media screen and (max-width:420px){
                width: 44px;
                height: 44px;
            }
        }
    }
}


  .block_left{
    text-align: left;
    margin-bottom: 168px;

    @media screen and (max-width:1200px) {
      margin: 0 20px;
    }
    @media screen and (max-width:920px) {
      margin: 0 40px;
    }
    @media screen and (max-width:420px) {
      margin: 0 10px;
    }
    h1{
      color: $color_white;
      font-size: 54px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      line-height: 58px;
      margin-bottom: 24px;
    }
    span{
      line-height: 34px;
      font-weight: 100;
      letter-spacing: 1px;
      color: #ffffffb8;
      font-size: 22px;
    }
  }
  button{
    margin-bottom: 54px;
    background:transparent;
    opacity: 0.6;
    border:none;
    color: $color_white;
    position: relative;
    &:before{
      content: "";
      position: absolute;
      width: 1px;
      height: 40px;
      background: #ffffff;
      top: 50%;
      left: 50%;
      transform: translate(-50%,40%);

    }
  }

</style>
