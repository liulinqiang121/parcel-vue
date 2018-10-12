<template>
      <div class="main">
          <div class="video">
            <video height="186" width="186" autoplay muted="muted" loop="-1" style="margin:5% 0">
               <source src="../assets/home.mp4" type="video/mp4" >
            </video>
          </div>
          <div class="words">
             欢迎使用parcel打包工具
             <p>--liulinqiang--</p>
          </div>
        </div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style scoped lang="scss">
 .main {
   text-align: center;
   margin:15% 0;
   &>div {
     display: inline-block;
     vertical-align: middle;
   }
   .words {
      width:460px;
      height:56px;
      font-size:40px;
      color:rgba(51,51,51,1);
      line-height:56px;
      text-align: left;
      p{
          font-size: 24px;
          letter-spacing: 2px;
          font-weight: 500;
          text-indent: 100px
      }
   }
 }
</style>
