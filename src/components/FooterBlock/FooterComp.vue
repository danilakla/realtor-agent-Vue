<template>
<div class="container-fluid">
  <div class="container">

<div class="icon">


  <a class="navbar-brand" href="#">
    <img src="../../assets/img.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
    <p class="nameProduct">Estate</p>
  </a>

</div>
<div class="footer-list">
  <list-footer :items="Utility" :title="UtilityTitle"/>
  <list-footer :items="Company" :title="CompanyTitle"/>

  <list-footer :items="pages" :title="PagesTitle"/>
<div class="message" >
  <h1>
    Newsletter
  </h1>
  <p>Subscribe to our (infrequent) newsletter where we share <br> news about upcoming listings and projects.</p>
  <input type="text" style="width: 100%; padding: 10px; border-radius:10px " placeholder="Email">
  
</div>
</div>
    <div class="captch">

      <p>© Estate, LLC. All rights reserved. Powered by <span>Webflow</span></p>
      <div class="so">
        <img src="../../assets/img_11.png" alt="">
        <img src="../../assets/img_11.png" alt="">
        <img src="../../assets/img_11.png" alt="">
        <img src="../../assets/img_11.png" alt="">

      </div>
    </div>

  </div>
</div>
</template>

<script>
import ListFooter from "@/components/FooterBlock/ListFooter";
export default {
  name: "FooterComp",
  components: {ListFooter},
  data(){
    return{
      PagesTitle:"PagesTitle",
      CompanyTitle:"CompanyTitle",
      UtilityTitle:"UtilityTitle",

      pages:['Start','Listings','Listings alt. 2','Contact','Legal'],
      Company:['About','Our team','Newsroom'],

      Utility:['Instructions','Style guide','Licenses','Changelog','404']

    }
  }
}
</script>

<style scoped>
.captch{
  padding-top: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
}
.so{
  color: white;
  display: flex;
  justify-content: space-between;
}
.so img{
  margin-left: 5px;
  width: 25px;
  height: 25px;

}
.container{
  background-color: #292C32;

}
.nameProduct{

  display: inline-block;
  position: relative;
  top: 10px;
  color: white;
  left: 3px;
  margin-bottom: 0px;
}
.footer-list{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 100px;

}
.container-fluid{
  background-color: #292C32;
  padding-bottom: 100px;
}
.message{
  color: white;
  text-align: left;

}
.message h1{
  font-size: 13px;
  color: #FF8A63;
}
.icon{
  padding-top: 100px ;
}
</style>