<template>

<div class="container-fluid">


  <div class="container">
<p>Seen enough?</p>
  <h1>Get in touch with us today.</h1>
  <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut <br> ligula. Vestibulum sit ame
    t urna turpis. Mauris euismod elit et <br> nisi ultrices, ut faucibus orci tincidunt.</p>
    <div>
      <button v-on:click="this.dialogVisibleContact=!this.dialogVisibleContact">Contact</button>
      <button v-on:click="this.dialogVisibleListtings=!this.dialogVisibleListtings">See listings</button>
      <my-dialog v-model:show="dialogVisibleContact">
        <modal-contact/>

      </my-dialog>
      <my-dialog v-model:show="dialogVisibleListtings">
      <modal-contact/>
      </my-dialog>
    </div>

  </div>
    </div>
</template>

<script>
import MyDialog from "@/components/CustomUI/MyDialog";
import ModalContact from "@/components/InerModal/ModalContact";
export default {
  name: "SubFooter",
  components: {ModalContact, MyDialog},
  data(){
    return{

      dialogVisibleListtings:false,
      dialogVisibleContact:false
    }
  }
}
</script>

<style scoped>
.container-fluid{
  color: white;
  background-color: #45525B;

}
.container{
  background-color: #45525B;
  padding-top: 100px;
  padding-bottom: 100px;
}
button{
  color:#45525B;
  padding: 10px;
  border: 0px solid;
  border-radius:5px;
  margin-left: 20px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>