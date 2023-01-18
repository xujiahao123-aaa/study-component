<template>
  <div id="app">
   <div class = "row">
     <hm-button @click = "aa">按钮</hm-button>
     <hm-button  type = "primary">按钮</hm-button>
     <hm-button  type = "success">按钮</hm-button>
     <hm-button  type = "info">按钮</hm-button>
     <hm-button  type = "warning">按钮</hm-button>
     <hm-button  type = "danger">按钮</hm-button>
   </div>

   <div class = "row">
     <hm-button @click = "aa" plain>按钮</hm-button>
     <hm-button plain  type = "primary">按钮</hm-button>
     <hm-button plain  type = "success">按钮</hm-button>
     <hm-button plain  type = "info">按钮</hm-button>
     <hm-button plain  type = "warning">按钮</hm-button>
     <hm-button plain  type = "danger">按钮</hm-button>
   </div>

   <div class = "row">
     <hm-button @click = "aa" round>按钮</hm-button>
     <hm-button round   type = "primary">按钮</hm-button>
     <hm-button round   type = "success">按钮</hm-button>
     <hm-button round   type = "info">按钮</hm-button>
     <hm-button round   type = "warning">按钮</hm-button>
     <hm-button round   type = "danger">按钮</hm-button>
   </div>

   <div class = "row">
     <hm-button @click = "aa" circle>按</hm-button>
     <hm-button circle  type = "primary">按</hm-button>
     <hm-button circle  type = "success">按</hm-button>
     <hm-button circle  type = "info">按</hm-button>
     <hm-button circle  type = "warning">按</hm-button>
     <hm-button circle  type = "danger">按</hm-button>
   </div>
  </div>
</template>

<script>

export default {
   
  methods: {
    aa() {
    console.log('1212')
    }
  }
}
</script>

<style lang="scss" scoped>
 .row{
  margin-top: 20px;
    .hm-button{
      margin-right:20px;
    }
 }
</style>
