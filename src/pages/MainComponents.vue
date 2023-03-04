<template>
  <div id="backBlock" class="back-opacity">
  </div>
  <nav-bar />
  <content-title-bck/>
  <introduce-title id="firstBlock"/>
  <main-intro id="secondBlock"/>
  <bck-comp />
  <main-comp id="fourthBlock"/>
  <person-block id="fifthBlock"/>
  <new-rooms id="thirdBlock"/>
  <reating-block id="sixthBlock"/>
  <a :href="'#backBlock'" class="back-link">↑
  </a>
  <sub-footer/>
  <footer-comp/>
</template>

<script>
import ReatingBlock from "@/components/ReatingBlock/ReatingBlock";
import FooterComp from "@/components/FooterBlock/FooterComp";
import SubFooter from "@/components/SubFooter/SubFooter";
import NewRooms from "@/components/NewRooms/NewRooms";
import PersonBlock from "@/components/PersonBlock/PersonBlock";
import MainComp from "@/components/Body/MainComp";
import BckComp from "@/components/BckComp";
import MainIntro from "@/components/SecondInro/MainIntro";
import IntroduceTitle from "@/components/FirstTitle/IntroduceTitle";
import ContentTitleBck from "@/components/ContentTitleBck";
import NavBar from "@/components/NavBar";

export default {

  name: "MainComponents",
  components: {
    ReatingBlock,
    FooterComp,
    SubFooter,
    NewRooms,
    PersonBlock,
    MainComp,
    BckComp,
    MainIntro,
    IntroduceTitle,
    ContentTitleBck,
    NavBar,

  },
}
</script>


<style>
.back-link{
  border-radius: 50%;
  border:1px solid black;
  color: black;

  padding-top: 10px;
  text-align: center;
  text-decoration: none;
  position: fixed;right: 15px; bottom: 15px;
  height: 50px;
  width: 50px;
  transition: 0.5s;
}
.back-link:hover{
  background-color: #45525B;
  color: white;
}

.back-opacity{

  position: absolute;
  background-color: #000;
  height: 100%;
  width: 100%;
  opacity: 0;
  display: block;
  z-index: 10000;
  animation: 3s linear  test;
}

@keyframes test {
  from{
    opacity: 1;
    display: block;
  }
  to{

    opacity: 0;
    display: none;
  }
}
</style>
